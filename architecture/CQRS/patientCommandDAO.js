const database = require('./database');

function insertPatient(patient) {
  database.patients.push(patient);
  database.patientList.push({ id: patient.id, lastName: patient.lastName, firstName: patient.firstName }); // without creationDate
}

function updatePatient(updatedPatient) {
  const index = database.patients.findIndex(p => p.id === updatedPatient.id);
  if (index !== -1) {
    database.patients[index] = updatedPatient;
   
    const listIndex = database.patientList.findIndex(p => p.id === updatedPatient.id);
    if (listIndex !== -1) {
      database.patientList[listIndex] = { id: updatedPatient.id, lastName: updatedPatient.lastName, firstName: updatedPatient.firstName };
    }
  }
}

module.exports = { insertPatient, updatePatient };
