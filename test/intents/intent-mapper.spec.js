const { intentMapper } = require('../../app/intents/intent-mapper');

describe('Intent Mapper', () => {

  let scure;

  beforeEach(() => {
    scure = buildScure();
  });

  it('shows the final when the query is "seethefinal"', () => {
    const conv = {
      body: { queryResult: { queryText: 'seethefinal' } },
      close: sinon.spy(),
    };

    const intent = intentMapper(scure, conv, {}, null);

    intent()(conv);
    expect(conv.close.getCalls().length).to.equal(1);
  });

  it('returns originalIntent when the query is "seethefinal"', () => {
    const conv = {
      body: { queryResult: { queryText: 'another text' } },
      close: sinon.spy(),
    };
    const originalIntentSpy = sinon.spy();
    const originalIntent = () => originalIntentSpy;

    const intent = intentMapper(scure, conv, {}, originalIntent);

    intent()(conv);
    expect(conv.close.getCalls().length).to.equal(0);
    expect(originalIntentSpy.getCalls().length).to.equal(1);
  });

  it('translates "sigue leyendo" into a "use book" intent', () => {
    const conv = {
      body: { queryResult: { queryText: 'sigue leyendo' } },
      close: sinon.spy(),
      data: { roomId: 'entrada' },
    };
    const args = {};

    const intent = intentMapper(scure, conv, args, () => {});

    expect(intent.name).to.equal('use');
    expect(args['arg']).to.equal('libro');
  });
});