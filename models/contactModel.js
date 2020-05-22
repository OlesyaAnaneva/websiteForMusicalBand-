const mongoose = require('mongoose');


const contactSchema = new mongoose.Schema({
  job: String,
  nameJob: String,
  emailJob: String,
  telJob: String,
});

module.exports = mongoose.model('contactModel', contactSchema);
