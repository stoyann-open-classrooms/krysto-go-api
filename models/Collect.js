const mongoose = require("mongoose");

const CollectSchema = new mongoose.Schema(
  {
    collectPoint: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CollectPoint",
    },

    remarque: {
      type: String,
      maxlength: [500, "Remarque can not be more than 500 characters"],
      default: "Aucune remarque",
    },

    status: {
      type: String,
      enum: ["todo", "done", "fail"],
      default: "todo",
    },

    assignedTo: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },

    collectDemandeDate: {
      type: Date,
      default: Date.now,
    },
    collectDate: {
      type: Date,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Collect", CollectSchema);
