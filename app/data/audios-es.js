exports.GRABACION_AUDIO = 'Sí, parece que se oye algo: ' +
  '<audio src="https://actions.google.com/sounds/v1/alarms/digital_watch_alarm_long.ogg">' +
  'Para cerrar la brecha, debemos saturarla lumínicamente con los tres colores principales: rojo, azul y verde. Todo apuntando a la anomalía. Quizás el láser que estábamos usando en nuestro lado te puede servir, ya que emite luz azul. Aunque necesitarás algo más. Para encender el láser, utiliza el siguiente código de 6 dígitos: 2 1 1 0.' +
  '</audio>. Parece que la grabación se corta abruptamente.';

exports.LASER_ON_AUDIO = '<par>' +
  '    <media end="10s">' +
  '      <audio clipBegin="1s" src="https://actions.google.com/sounds/v1/science_fiction/alien_beam.ogg">' +
  '      </audio>' +
  '      </media>' +
  '    <media><speak>¡Bien! El láser se enciende y un potente rayo azul atraviesa la estancia e impacta en la anomalía. Así se mantiene por ahora.' +
  '  </speak>' +
  '  </media>' +
  '  </par>';

exports.ENDING_AUDIO = '<par><media repeatCount="3" soundLevel="-20dB">' +
  '  <audio src="https://actions.google.com/sounds/v1/weapons/big_explosion_cut_off.ogg"></audio>\n' +
  '  </media>' +
  '  <media begin="15s">' +
  '  <audio src="https://actions.google.com/sounds/v1/weapons/big_explosion_distant.ogg"></audio>' +
  '  </media>' +
  '  <media>' +
  '    <speak>' +
  '      La luz roja de la linterna, la luz verde de la anomalía y la luz azul del láser se combinan generando una luz blanca que satura a la anomalía. Se ve cómo la luz blanca se va consumiendo, a medida que la anomalía se va cerrando. Al final se cierra. ¡Bien! Has conseguido liberar a la humanidad de una destrucción sin precedentes. ¡Enhorabuena! Cuando salgas de aquí, recuerda que Dron Johnson te ayudó. ¡Hasta la próxima!' +
  '    </speak>' +
  '  </media>' +
  '    </par>';
