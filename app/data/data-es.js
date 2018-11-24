const { aCommandSyn, Commands, theEndingScene, aRoom, anItem, aLockedDestination, aCondDescUsage, aCondDesc, anExpectAnswerAction, anAnswer, anUsage, aConditionalResponse, anUnlockingAction, aPickingAction, pluginExtension, aPickingCondition } = require('scure').dsl;
const { syns } = require('./syns-es');
const { crossAnomaly } = require('../plugin-extension/cross-anomaly');

exports.data = {
  sentences: {
    help: 'Me puedes dar las siguientes instrucciones: Mirar, Usar, Ir, Coger e Inventario. Quedan {time}. ',
    'help-no-screen': 'Me puedes dar las siguientes instrucciones: Mirar, Usar, Ir, Coger e Inventario. Quedan {time}. ',
    fallback: 'No te entiendo. Mi programación actual solo me permite mirar, usar, coger objetos; e ir a lugares. Quedan {time}. ',
    destinations: 'Desde aquí puedo ir a: {destinations}. ',
    'destination-unknown': 'No sé ir a {destination}. ',
    'remaining-time': '{minutes} minutos y {seconds} segundos',
    'ending-remaining-time': 'Quedaban {timeLeft}',
    'item-not-in-location': 'No encuentro o veo ese objeto. ',
    'item-notseen': 'No veo el objeto {name} por aquí. ',
    'item-unknown': 'No te he entendido qué quieres que me lleve. ',
    'item-pickedup': 'Ok, me llevo el objeto {name}. ',
    'item-notpickable': 'No puedo llevarme el objeto {name}. ',
    'item-alreadyinventory': 'Ya llevo el objeto {name}. ',
    'item-alreadypicked': 'Ya me llevo el objeto {name}. ',
    'use-noarg': 'Dime qué objeto u objetos quieres que use. ',
    'use-cant': 'No puedo usar el objeto {item}. ',
    'use-canttwo': 'No puedo usar los objetos {item1} y {item2} entre sí. ',
    'use-onlyonce': 'Ya utilicé ese objeto. No puedo usarlo otra vez. ',
    'use-onlyonce-two': 'Ya utilicé esos objetos. No puedo usarlos otra vez. ',
    inventory: 'Llevo los siguientes objetos encima: {items}. ',
    'inventory-nothing': 'No llevo nada encima. ',
    bye: 'Ha sido un placer trabajar contigo. Es una lástima que la humanidad esté perdida. Intentémoslo otra vez más adelante. ¡Gracias!',
    'end-timeover': 'Ya no hay tiempo, la anomalía se ha desgarrado, y nuestra existencia con ella. Lo siento. ¡Inténtalo otra vez!',
    'answer-cant': '¿Perdona? No estaba esperando una respuesta. Si me estás contestando a un código, utiliza antes el objeto en cuestión.',
    'walk-nowhere': 'Desde aquí no podemos ir a ningún sitio. ¡Busca una salida!',
    'cross-anomaly-first-time': 'Me adentro en la anomalía, al principo con miedo, pero veo que no hay peligro. Ha sido como cruzar una cortina. Estoy en el mismo laboratorio, pero me siento como al otro lado. Creo que he cruzado a otra dimensión. Este sitio es el mismo, pero no es el mismo. Le llamaré el "Laboratorio del otro lado".',
    'cross-anomaly-direction-to-other': 'Vuelvo a adentrarme en el laboratorio del otro lado.',
    'cross-anomaly-direction-from-other': 'Vuelvo al laboratorio de nuestro universo.',
  },
  init: {
    totalMinutes: 10,
    roomId: 'entrada',
    welcome: [
      '¡Hola! Soy Dron Johnson, y soy tu compañero de aventuras. Tenemos 10 minutos para salvar a la humanidad, y descubrir qué es esa anomalía. Dame instrucciones para interactuar con el entorno. ¡Vamos allá!',
    ],
  },
  rooms: [
    aRoom('entrada', 'Entrada del complejo', syns.rooms['entrada'], 'Es la entrada del complejo. Lo más destacable de este lugar es una mesa con un cajón.'),
    aRoom('laboratorio', 'Laboratorio', syns.rooms['laboratorio'], 'Es el laboratorio. Una gran anomalía en el tejido del espacio tiempo se encuentra en mitad de esta habitación.'),
    aRoom('comunicaciones', 'Centro de comunicaciones', syns.rooms['comunicaciones'], 'Es el centro de comunicaciones. Hay un gran ordenador en una de las paredes.'),
    aRoom('laboratorio-other', 'Laboratorio del otro lado', syns.rooms['laboratorio-other'], 'Es el laboratorio al otro lado. Puedo ver en este lado una réplica del complejo. La anomalía desde este lado tiene una vibración diferente, como... inversa. Un láser apunta en dirección a ésta.'),
    aRoom('comunicaciones-other', 'Centro de comunicaciones del otro lado', syns.rooms['comunicaciones-other'], 'En el centro de comunicaciones del otro lado. Desde el ordenador se pueden oir conversaciones, pero se oyen extrañas. ¿Como si estuvieran al revés?'),
    aRoom('entrada-other', 'Entrada del otro lado', syns.rooms['entrada-other'], 'Es la entrada del complejo, en el otro lado. La puerta al exterior está cerrada. Tiene también una mesa con su cajón.'),
  ],
  mapImage: {
    url: 'https://simomega-1debd.firebaseapp.com/map/map.jpg',
    alt: 'Mapa con: entrada, laboratorio y comunicaciones.',
  },
  map: {
    'entrada': ['laboratorio', 'comunicaciones'],
    'laboratorio': ['entrada','comunicaciones', aLockedDestination('laboratorio-other', 'crossedAlready', 'Antes de ir al laboratorio directamente, quizás debería andar hacia la anomalía.')],
    'comunicaciones': ['entrada', 'laboratorio'],
    'entrada-other': ['laboratorio-other', 'comunicaciones–other'],
    'laboratorio-other': ['entrada-other','conunicaciones-other', aLockedDestination('laboratorio', 'crossedAlready')],
    'comunicaciones-other': ['entrada-other', 'laboratorio-other'],
  },
  items: [
    anItem('mesa-e1', 'Mesa', syns.items['mesa-e1'], [
      aCondDesc('!unlocked:cajon-e1', 'Es una mesa que tiene un cajón. Parece que el cajón está cerrado. Necesita una llave.'),
      aCondDesc('!picked:laser-e1', 'La mesa tiene un cajón, que ya hemos abierto. Parece que dentro de éste hay algo...'),
      aCondDesc('picked:laser-e1', 'La mesa tiene un cajón, que ya hemos abierto.'),
    ], 'entrada', false),
    anItem('cajon-e1', 'Cajón', syns.items['cajon-e1'], [
      aCondDesc('!unlocked:cajon-e1', 'El cajón está cerrado.'),
      aCondDesc('!picked:puntero-e1', 'Dentro del cajón veo un puntero láser portátil.'),
      aCondDesc('picked:puntero-e1', 'El cajón de la mesa está abierto, pero ya no tiene nada dentro.'),
    ], 'entrada', false),
    anItem('anomalia-l1', 'Anomalía', syns.items['anomalia-l1'],
      'Es la brecha en el espacio tiempo, de tinte verdoso, que se encuentra flotando en el aire en medio del laboratorio. Es lo suficientemente grande como permitirme ver que hay algo al otro lado; creo que lo puedo cruzar.', 'laboratorio', false),
    anItem('llave-e2', 'Llave', syns.items['llave-e2'], 'Es la llave de la mesa de la entrada.', 'entrada-other', true),

  ],
  usages: [
    anUsage('cajon-e1', [
        aConditionalResponse([
          aCondDescUsage(false, '!unlocked:cajon-e1', 'Para abrir el cajón creo que necesitamos una llave.'),
          aCondDescUsage(false, '!picked:puntero-e1', 'Ya hemos abierto el cajón. Se ve un puntero láser portátil dentro.'),
          aCondDescUsage(false, 'picked:puntero-e1', 'Ya hemos abierto el cajón, y está vacío.'),
        ]),
      ], false),
    anUsage('anomalia-l1', [ pluginExtension(crossAnomaly) ], false),
    anUsage(['llave-e2', 'cajon-e1'], ['El cajón ya está abierto. No hace falta usar la llave aquí. '], false),
  ],
  answers: [
  ],
  commandSyns: [
    aCommandSyn(Commands.WALK, 'anomalia-l1', Commands.USE),
  ],
};
