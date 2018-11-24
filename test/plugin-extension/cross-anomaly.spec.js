const { crossAnomaly } = require('../../app/plugin-extension/cross-anomaly');

describe('Cross Anomaly', () => {
  it ('changes to the other side when using from laboratorio', () => {
    const data = { roomId: 'laboratorio' };
    const scure = buildScure();

    crossAnomaly(data, scure);

    expect(data.roomId).to.equal('laboratorio-other');
  });
  it ('changes to the original side when using from laboratorio-other', () => {
    const data = { roomId: 'laboratorio-other' };
    const scure = buildScure();

    crossAnomaly(data, scure);

    expect(data.roomId).to.equal('laboratorio');
  });

  it('says first sentence when crossing for the first time', () => {
    const data = { roomId: 'laboratorio' };
    const scure = buildScure();

    const response = crossAnomaly(data, scure);

    expect(response).to.equal(scure.sentences.get('cross-anomaly-first-time'));
  });

  it('says other sentence when crossing for the first time in one direction', () => {
    const data = { roomId: 'laboratorio', alreadyCrossed: true };
    const scure = buildScure();

    const response = crossAnomaly(data, scure);

    expect(response).to.equal(scure.sentences.get('cross-anomaly-direction-to-other'));
  });

  it('says other sentence when crossing for the first time in other direction', () => {
    const data = { roomId: 'laboratorio-other', alreadyCrossed: true };
    const scure = buildScure();

    const response = crossAnomaly(data, scure);

    expect(response).to.equal(scure.sentences.get('cross-anomaly-direction-from-other'));
  });
});