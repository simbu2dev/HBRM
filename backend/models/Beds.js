const mongoose = require("mongoose");

const bedSchema = mongoose.Schema({
  bedNumber: {
    type: Number,
    required: true,
  },

  roomNumber: {
    type: Number,
    required: true,
  },

  occupied: {
    type: String,
  },

  patientID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "patient",
  },
});

const BedModel = mongoose.model("beds", bedSchema);

module.exports = { BedModel };