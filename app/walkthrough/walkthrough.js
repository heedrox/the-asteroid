const c = require('scure-dialogflow').sdk.dsl.aCommand;
const { runWalkthrough } = require('scure-dialogflow').sdk;
const { data } = require('../data/data-es');

const commands = [
  c('_welcome', ''),
  c('look', ''),
  c('walk', ''),
  c('look', 'mesa'),
  c('look', 'cajón'),
  c('use', 'cajón'),
  c('walk', 'laboratorio'),
  c('look', ''),
  c('walk', 'laboratorio del otro lado'),
  c('look', 'anomalía'),
  c('walk', 'anomalía'),
  c('walk', 'laboratorio'),
  c('walk', 'laboratorio'),
  c('look', 'anomalia'),
  c('look', 'laser'),
  c('look', ''),
  c('walk', 'entrada'),
  c('look', 'mesa'),
  c('look', 'caja'),
  c('look', 'teclado'),
  c('use', 'cajon'),
  c('pickup', 'papel'),
  c('look', 'juego'),
  c('use', 'juego'),

];

try {
  runWalkthrough(data, commands);
} catch (ex) {
  console.log('error', ex);
  throw ex;
}


