const mongoose = require("mongoose");

const membreSchema = mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  registrationDate: { type: Date, default: new Date().toISOString() },
});

module.exports = mongoose.model('Membre', membreSchema);