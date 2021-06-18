
const mongoose = require('mongoose');
const Schema = mongoose.Schema

const studentSchema = new Schema({
    content: String,
    created: { type: Date, default: Date.now },
    firstname: {
        desc: "The user's firstname.",
        trim: true,
        type: String,
        required: true,
      },
    lastname: {
        desc: "The user's lastname.",
        trim: true,
        type: String,
        required: true,
      },
    age: {
        desc: "The users's age.",
        type: Number,
      },
  },
  { strict: false }
);

module.exports = mongoose.model('student',studentSchema)
