const database = require('./database');
const patientCache = require('./cache');

function retrievePatientList() {
  return database.patientList;
}

function retrievePatient(id) {
  
  return patientCache.patientCache[id];

}

module.exports = { retrievePatientList, retrievePatient };
