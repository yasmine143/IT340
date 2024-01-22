const validatePassword = require('./passwordValidator.js');

test('The password is not validated if it is shorter than 8 characters', () => {
   const password = 'My@j23';
   const validationResult = validatePassword(password);
   expect(validationResult).toBe(false);
});


test('The password is not validated if it does not have special characters', () => {
   const password = 'Myhiuhsiffiuj23';
   const validationResult = validatePassword(password);
   expect(validationResult).toBe(false);
});


test('The password is not validated if it does not have at least one letter', () => {
   const password = '777777@2223';
   const validationResult = validatePassword(password);
   expect(validationResult).toBe(false);
});


test('The password is not validated if it does not have at least one number', () => {
   const password = 'llllllll@ccnn';
   const validationResult = validatePassword(password);
   expect(validationResult).toBe(false);
});

