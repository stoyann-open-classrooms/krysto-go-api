const mongoose = require("mongoose");

const WasteSchema = new mongoose.Schema(
  {
    wasteCategory: {
      type: String,
      enum: [
        "Aluminium",
        "Plastique",
        "Huile",
        "Papier",
        "Carton",
        "Déchets alimentaire",
        "Papier confidentiel",
        "Verre",
        "Bois",
        "Capsule"
      ],
      required: [true, "Merci d'ajouter un type de dechets"],
      default: "Plastique"
    },

    
  
    wasteType: String,

    plasticType: {
      type: String,
      enum: [
        "PET",
        "PP",
        "HDPE",
        "PEHD",
        "PS",
        "PLA",
        "Autres"
      ],
    },

    image: {
      type: String,
    },

    détails: {
      type: String,
      maxlength: [500, "Remarque can not be more than 5000 characters"],
      default: "Aucune remarque",
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);
// reverse populate with virtuals

WasteSchema.virtual("collectPoints", {
  ref: "CollectPoint",
  localField: "_id",
  foreignField: "waste",
  justOne: false,
});


module.exports = mongoose.model("Waste", WasteSchema);
