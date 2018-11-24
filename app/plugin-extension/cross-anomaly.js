const otherSide = room => `${room}-other`;
const originalSide = room => room.substring(0, room.indexOf('-other'));
const isOriginalSide = (roomId) => roomId.indexOf('-other')>=0;
const changeRoom = (roomId) => (isOriginalSide(roomId) ? originalSide(roomId) : otherSide(roomId));
const getResponseBasedOnDirection = (roomId, sentences) =>
  isOriginalSide(roomId) ?
    sentences.get('cross-anomaly-direction-to-other') :
    sentences.get('cross-anomaly-direction-from-other');

const getResponse = (data, scure) => (!data.alreadyCrossed ?
  scure.sentences.get('cross-anomaly-first-time') :
  getResponseBasedOnDirection(data.roomId, scure.sentences));

exports.crossAnomaly = (data, scure) => {
  data.roomId = changeRoom(data.roomId);
  return getResponse(data, scure);
};