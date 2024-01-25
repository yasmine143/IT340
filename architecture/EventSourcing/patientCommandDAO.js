const database = require("./database");
const cache = require("./cache");

async function insertPatient(patient) {
    // Inserting the patient to patientList
    database.patientList.push({ ...patient, creationDate: undefined });

    // Update the patient cache with full patient details, including concatenated name
    cache.patientCache[patient.id] = { ...patient, name: `${patient.lastName} ${patient.firstName}` };
}

async function updatePatient(updatedPatient) {
    // Update the patient in the database list
    const patientIndex = database.patientList.findIndex(patient => patient.id === updatedPatient.id);
    if (patientIndex !== -1) {
        database.patientList[patientIndex] = { ...updatedPatient };
    }
    // Update the patient in the cache
    cache.patientCache[updatedPatient.id] = { ...updatedPatient, name: `${updatedPatient.lastName} ${updatedPatient.firstName}` };
}

module.exports = { insertPatient, updatePatient };

