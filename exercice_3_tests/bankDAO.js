
function retrieveBalance(accountId) {
    console.log("Retrieve balance");
    return 1000; 
}

function debitAccount(accountId, amount) {
    console.log(`Debiting ${amount} from account ${accountId}`);
}

module.exports = { retrieveBalance, debitAccount };
