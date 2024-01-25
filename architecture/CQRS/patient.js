class Patient {
    static ID = 0
    constructor(lastName, firstName) {
      this.id  = Patient.ID++;
      this.lastName = lastName;
      this.firstName = firstName;
      this.creationDate = new Date();
    }
  }
  
  module.exports = Patient;
  