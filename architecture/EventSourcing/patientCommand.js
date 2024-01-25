const eventStore = require("./eventStore");
const patientCommandDAO = require("./patientCommandDAO");

let currentId = 1;

function addPatient(lastName, firstName) {
  eventStore.addEvent("Adding patient", currentId, { lastName, firstName }, new Date());
  patientCommandDAO.insertPatient({ id: currentId++, ...{ lastName, firstName }, creationDate: new Date() });
}

function restorePatient(patientId) {
    
    let patient = {};

    eventStore.getEventsForPatient(patientId).forEach(event => {
        switch (event.name) {
            case "Adding patient":
                patient = { ...event.payload, id: patientId, creationDate: event.creationDate };
                break;
            case "Saving patient":
                patient = { ...patient, ...event.payload };
                break;
        }
    });

    return patient;
}

function savePatient(patientId, lastName, firstName) {
    const patient = restorePatient(patientId);

    if (patient) {
        const payload = { lastName, firstName };
        eventStore.addEvent("Saving patient", patientId, { lastName, firstName });
        patientCommandDAO.updatePatient({ id: patientId, ...{ lastName, firstName }, creationDate: patient.creationDate });
    }
}


module.exports = {addPatient, restorePatient, savePatient}