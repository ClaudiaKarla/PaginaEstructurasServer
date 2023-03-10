const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const ProyectSchema = new Schema(
  {
    categoria: {
      type: String,
      required: true,
      enum:["Concreto",
      "Acero",
      "Mampostería",]
    },
    proye: {
        type: String,
        required: true,
      },
      descripcion: {
        type: String,
      },
      fotos:{ 
      type:String},
  }
);

const Proyect = model("Proyect", ProyectSchema);

module.exports = Proyect;
