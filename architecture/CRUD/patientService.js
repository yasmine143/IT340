const PatientDAO = require('./patientDAO');
const Patient = require('./patient');

function addPatient(lastName, firstName) {
  
  const patient = new Patient(lastName, firstName);
  PatientDAO.insertPatient(patient);
}

function getPatientList() {
    return PatientDAO.retrievePatientList();
  }
  
function savePatient(id, lastName, firstName) {
    const patient = PatientDAO.retrievePatient(id);
    if (patient) {
      patient.lastName = lastName;
      patient.firstName = firstName;
      PatientDAO.updatePatient(patient);
    }
}
  
function getPatient(id) {
    return PatientDAO.retrievePatient(id);
  }
  
module.exports = { addPatient, getPatientList, savePatient, getPatient };
  
  
