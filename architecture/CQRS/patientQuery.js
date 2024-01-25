const PatientDAO = require('./patientQueryDAO');

function getPatientList() {
  return PatientDAO.retrievePatientList();
}

function getPatient(id) {
  return PatientDAO.retrievePatient(id);
}

module.exports = { getPatientList, getPatient };
