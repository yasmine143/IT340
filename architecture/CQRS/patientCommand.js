const PatientDAO = require('./patientCommandDAO');
const Patient = require('./patient');
const { patientCache } = require('./cache');

function addPatient(lastName, firstName) {
  const patient = new Patient(lastName, firstName);
  PatientDAO.insertPatient(patient);
  patientCache[patient.id] = `${firstName} ${lastName}`;

}


function savePatient(id, lastName, firstName) {
   
    const updatedPatient = { id, lastName, firstName };
    PatientDAO.updatePatient(updatedPatient);
    patientCache[id] = `${firstName} ${lastName}`;

  }
  

module.exports = { addPatient, savePatient };
