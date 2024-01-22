// bank.test.js
const bank = require('./bank');
const bankDAO = require('./bankDAO');
const bankTransfer = require('./bankTransfer');

jest.mock('./bankDAO');
jest.mock('./bankTransfer');

test('retrieveBalance is called with the correct accountId', () => {
    const accountId = '12345';
    bank.getBalance(accountId);
    expect(bankDAO.retrieveBalance).toHaveBeenCalledWith(accountId);
});

test('transferMoney calls transfer with correct parameters', async () => {
  const accountId = '12345';
  const amount = 100;

  await bank.transferMoney(accountId, amount);

  expect(bankTransfer.transfer).toHaveBeenCalledWith(accountId, amount);
});

test('transferMoney calls debitAccount with correct parameters', async () => {
  bankTransfer.transfer.mockResolvedValue();

  const accountId = '12345';
  const amount = 100;

  await bank.transferMoney(accountId, amount);

  expect(bankDAO.debitAccount).toHaveBeenCalledWith(accountId, amount);
});

