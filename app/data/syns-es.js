const synsEntrada = ['entrada del complejo', 'entrada principal', 'la entrada', 'entrada'];
const synsLab = ['laboratorio', 'laboratorio', 'lab', 'centro de investigación', 'lugar laboratorio', 'sitio de laboratorio', 'habitación laboratorio'];
const synsCom = ['sala de comunicaciones', 'centro de comunicaciones', 'habitación de comunicaciones', 'lugar de comunicaciones'];

const syns = {
  rooms: {
    'entrada': synsEntrada,
    'laboratorio': synsLab,
    'comunicaciones': synsCom,
    'entrada-other': synsEntrada,
    'laboratorio-other': synsLab,
    'comunicaciones-other': synsCom,
  },
  items: {
    'mesa-e1': ['mesa', 'mesa principal', 'mesa de la entrada', 'mesilla', 'mesilla de la entrada'],
    'llave-e2': ['llave', 'llave encima de la mesa'],
    'cajon-e1': ['cajón', 'cajonera'],
    'espejo-e1': ['espejo', 'espejito', 'pequeño espejo', 'pequeño espejito'],
    'anomalia-l1': ['anomalía', 'brecha', 'grieta', 'grieta de espacio tiempo', 'grieta de espaciotiempo', 'brecha de espacio tiempo', 'anomalía de espacio tiempo', 'grieta verde']
  },
};

exports.syns = syns;
