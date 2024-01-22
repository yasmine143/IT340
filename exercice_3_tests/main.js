// main.js
const bank = require('./bank');

const accountId = '12345';
console.log(`Balance for account ${accountId}: `, bank.getBalance(accountId));

const transferAmount = 50;
bank.transferMoney(accountId, transferAmount)
   .then(() => console.log(`Transferred ${transferAmount} from account ${accountId}`))
   .catch(error => console.error('Transfer failed:', error));
