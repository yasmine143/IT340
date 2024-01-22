const database = require('./database');

function insertPatient(patient) {

  database.patients.push(patient);
  
}

function retrievePatientList() {
    return database.patients.map(({ id, lastName, firstName }) => ({ id, lastName, firstName }));
  }
  
function updatePatient(updatedPatient) {
    const index = database.patients.findIndex(p => p.id === updatedPatient.id);
    if (index !== -1) {
      database.patients[index] = updatedPatient;
     
    }
}
  
function retrievePatient(id) {
    const patient = database.patients.find(p => p.id === id);
    if (patient) {
      return { ...patient, name: `${patient.lastName} ${patient.firstName}` };
    }
    return null;
}
  
module.exports = { insertPatient, retrievePatientList, updatePatient, retrievePatient };