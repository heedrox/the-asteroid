const { ENDING_AUDIO } = require('../data/audios-es');
const THE_FINAL_INTENT = () => (conv) => conv.close(ENDING_AUDIO);

const intentMapper = (scure, conv, args, originalIntent) =>
  (conv.body.queryResult.queryText === 'seethefinal') ? THE_FINAL_INTENT : originalIntent;

exports.intentMapper = intentMapper;