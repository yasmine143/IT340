
const bankDAO = require('./bankDAO');
const bankTransfer = require('./bankTransfer');

function getBalance(accountId) {
    return bankDAO.retrieveBalance(accountId);
}

async function transferMoney(accountId, amount) {
    try {
      await bankTransfer.transfer(accountId, amount);
      bankDAO.debitAccount(accountId, amount);
    } catch (error) {
      console.error("Transfer failed:", error);
      
      return;
    }
  }
  

module.exports = { getBalance, transferMoney };
