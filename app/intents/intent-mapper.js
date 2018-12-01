const { ENDING_AUDIO } = require('../data/audios-es');
const { getIntentForCommand } = require('scure-dialogflow').lib;
const { Commands } = require('scure').dsl;
const THE_FINAL_INTENT = () => (conv) => conv.close(ENDING_AUDIO);


const isText = (txt, conv) => conv.body.queryResult.queryText === txt;
const keepReadingIntent = (args) => {
    args['arg'] = 'libro';
    return getIntentForCommand(Commands.USE);
};

const intentMapper = (scure, conv, args, originalIntent) =>
  isText('seethefinal', conv) ? THE_FINAL_INTENT
    : isText('sigue leyendo', conv) ? keepReadingIntent(args)
    : originalIntent;


exports.intentMapper = intentMapper;