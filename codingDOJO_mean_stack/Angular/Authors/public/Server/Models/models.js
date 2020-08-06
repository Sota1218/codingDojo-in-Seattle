const mongoose = require("mongoose");

const PetSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, minlength: 3, unique: true },
    type: { type: String, required: true, minlength: 3 },
    description: { type: String, required: true, minlength: 3 },
    skill: { type: [String], default: [] },
    like: { type: Number, required: true, default: 0 }
  },
  { timestamps: true }
);

const Pet = mongoose.model("pet", PetSchema);

module.exports = Pet;
