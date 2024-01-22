
const bank = require('./bank');
const bankDAO = require('./bankDAO');

jest.mock('./bankDAO');

describe('Bank tests', () => {
  test('retrieveBalance is called with the correct accountId', () => {
    const accountId = '12345';
    bank.getBalance(accountId);
    expect(bankDAO.retrieveBalance).toHaveBeenCalledWith(accountId);
  });

  test('no log "Retrieve balance" when retrieveBalance is mocked', () => {
    const logSpy = jest.spyOn(console, 'log');
    bank.getBalance('12345');
    expect(logSpy).not.toHaveBeenCalledWith("Retrieve balance");
    logSpy.mockRestore();
  });

  test('returns the correct balance', () => {
    bankDAO.retrieveBalance.mockReturnValue(200);
    const balance = bank.getBalance('12345');
    expect(balance).toBe(200);
  });
});
