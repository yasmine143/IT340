
// bankTransfer.js
function transfer(accountId, amount) {
    if (amount > 100) {
    
      return Promise.reject(new Error("Transfer amount exceeds limit"));
    }
   
    return Promise.resolve();
  }
  
  module.exports = { transfer };
  
  
  