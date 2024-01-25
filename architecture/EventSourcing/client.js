const patientCommand = require("./patientCommand")


patientCommand.addPatient("Yasmine", "Limsatia")
patientCommand.addPatient("Mona", "Lostora")


patientCommand.savePatient(1, "Yasmine", "Limamsatiach")


console.log(patientCommand.restorePatient(1))
console.log(patientCommand.restorePatient(2))
