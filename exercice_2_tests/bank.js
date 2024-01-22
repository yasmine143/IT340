

const { retrieveBalance } = require('./bankDAO');

function getBalance(accountId) {
    return retrieveBalance(accountId);
}

module.exports = { getBalance };
