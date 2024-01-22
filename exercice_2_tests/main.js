
const bank = require('./bank');

const accountId = '12345';
console.log(`Balance for account ${accountId}: `, bank.getBalance(accountId));
