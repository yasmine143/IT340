const { addPatient, savePatient } = require('./patientCommand');
const { getPatientList, getPatient } = require('./patientQuery');

// Add a patient
addPatient('Yasmine', 'Limstia');
addPatient('Mona', 'Lostora');


// Update a patient
savePatient(0, 'Yasmine', 'Limamstiach');

// Get patient list
console.log(getPatientList());

// Get a single patient
console.log(getPatient(0));
console.log(getPatient(1));
