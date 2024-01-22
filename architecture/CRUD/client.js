
const patientService = require('./patientService');

patientService.addPatient('Yasmine', 'Hamdaoui');
patientService.addPatient('Anas', 'Toub');
patientService.addPatient('Zaineb', 'Ikabour');


const patientList = patientService.getPatientList();
console.log('Patient list:', patientList);

console.log('\nModification of the patient with ID = 1');
patientService.savePatient(1, 'Remilia', 'Scarlet');

const updatedPatientList = patientService.getPatientList();
console.log('Updated patient list:', updatedPatientList);

const patient2 = patientService.getPatient(2);
console.log('Patient 2 is:', patient2);