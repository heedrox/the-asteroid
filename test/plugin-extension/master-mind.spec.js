const { masterMind } = require('../../app/plugin-extension/master-mind');

describe('Master Mind', () => {

  let scure;

  beforeEach(() => {
    scure = buildScure();
  });

  describe('initializes a random number', () => {
    it ('initializes with a number when it is not set', () => {
      const data = { };

      masterMind(data, scure);

      expect(data.mastermindNumber).not.to.be.undefined;
    });

    xit('initializes with a random number (I THINK BETTER NOT)', () => {
      const data = { };
      const data2 = {};

      masterMind(data, scure);
      masterMind(data2, scure);

      expect(data.mastermindNumber).not.to.be.equal(data2.mastermindNumber);
    });

    it('initializes with a number of three digits between 100 and 999', () => {
      const data = { };

      masterMind(data, scure);

      expect(data.mastermindNumber).to.be.greaterThan(99);
      expect(data.mastermindNumber).to.be.lessThan(1000);
    });

    it('initializes with a round number', () => {
      const data = { };

      masterMind(data, scure);

      expect(data.mastermindNumber).to.be.equal(Math.round(data.mastermindNumber));
    });

    it('when a number is initialized, it does not overwrite it', () => {
      const data = { mastermindNumber: 123 };

      masterMind(data, scure);

      expect(data.mastermindNumber).to.equal(123);
    });

    it('does not initialize numbers with repeating digits', () => {
      const data = { };

      masterMind(data, scure);

      const numberStr = `${data.mastermindNumber}`;
      expect(numberStr[0]).not.to.equal(numberStr[1]);
      expect(numberStr[0]).not.to.equal(numberStr[2]);
      expect(numberStr[1]).not.to.equal(numberStr[2]);
    });
  });

  describe('responds when user fails', () => {
    it ('counts numbers that are OK - when 1', () => {
      const data = { mastermindNumber: 145 };
      const userAnswer = '167';

      const response = masterMind(data, scure, userAnswer);

      expect(response).to.contains('bola verde con el número 1');
    });

    it ('counts numbers that are OK - when 2', () => {
      const data = { mastermindNumber: 145 };
      const userAnswer = '147';

      const response = masterMind(data, scure, userAnswer);

      expect(response).to.contains('bola verde con el número 2');
    });

    it ('counts numbers that are in wrong position - when 1', () => {
      const data = { mastermindNumber: 145 };
      const userAnswer = '157';

      const response = masterMind(data, scure, userAnswer);

      expect(response).to.contains('bola naranja con el número 1');
    });

    it ('counts numbers that are in wrong position - when 2', () => {
      const data = { mastermindNumber: 145 };
      const userAnswer = '154';

      const response = masterMind(data, scure, userAnswer);

      expect(response).to.contains('bola naranja con el número 2');
    });

    it ('counts numbers that are in wrong position - when 3', () => {
      const data = { mastermindNumber: 145 };
      const userAnswer = '451';

      const response = masterMind(data, scure, userAnswer);

      expect(response).to.contains('bola naranja con el número 3');
    });

    it ('counts numbers that are not ok - when 1', () => {
      const data = { mastermindNumber: 145 };
      const userAnswer = '148';

      const response = masterMind(data, scure, userAnswer);

      expect(response).to.contains('bola roja con el número 1');
    });

    it ('counts numbers that are not ok - when 2', () => {
      const data = { mastermindNumber: 145 };
      const userAnswer = '137';

      const response = masterMind(data, scure, userAnswer);

      expect(response).to.contains('bola roja con el número 2');
    });

    it ('tells you numbers cannot repeat', () => {
      const data = { mastermindNumber: 145 };
      const userAnswer = '112';

      const response = masterMind(data, scure, userAnswer);

      expect(response).to.contains(scure.sentences.get('master-mind-norepeat'));
    });

    it ('removes and cleans numbers', () => {
      const data = { mastermindNumber: 145 };
      const userAnswer = '1 3 4';

      const response = masterMind(data, scure, userAnswer);

      expect(response).to.contains('bola naranja con el número 1');
    });
  });

});