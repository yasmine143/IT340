const Event = require("./event")

let eventList = []

function addEvent(name, patientId, payload, date) {
  const event = new Event(name, patientId, payload, date);
  eventList.push(event);
}

function getEventsForPatient( id ){
    return eventList.filter(event => event.patientID==id)
}
module.exports = {addEvent, getEventsForPatient}