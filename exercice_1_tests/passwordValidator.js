
function validatePassword(password, rules = {}) {
  const minLength = rules.minLength || 8;
  const minDigits = rules.minDigits || 1;
  const minLetters = rules.minLetters || 1;
  const minSpecialChars = rules.minSpecialChars || 1;
  const specialChars = rules.specialChars ? new RegExp(`[${rules.specialChars}]`) : /[@#$%^&+=]/;

  // Check if the password meets the minimum length requirement
  if (password.length < minLength) {
      return false;
  }

  // Check if the password has the minimum number of digits
  const digits = password.replace(/\D/g, '');
  if (digits.length < minDigits) {
      return false;
  }

  // Check if the password has the minimum number of letters
  const letters = password.replace(/[^a-zA-Z]/g, '');
  if (letters.length < minLetters) {
      return false;
  }

  // Check if the password has the minimum number of special characters
  if (!specialChars.test(password)) {
      return false;
  }

  

  return true;
}

module.exports = validatePassword;
