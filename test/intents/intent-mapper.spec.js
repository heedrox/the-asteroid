const { intentMapper } = require('../../app/intents/intent-mapper');

describe('Intent Mapper', () => {
  it('shows the final when the query is "seethefinal"', () => {
    const conv = {
      body: { queryResult: { queryText: 'seethefinal' } },
      close: sinon.spy(),
    };

    const intent = intentMapper({}, conv, {}, null);

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

    const intent = intentMapper({}, conv, {}, originalIntent);

    intent()(conv);
    expect(conv.close.getCalls().length).to.equal(0);
    expect(originalIntentSpy.getCalls().length).to.equal(1);
  });
});