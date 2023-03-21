import { Schema, model } from "mongoose";

const asignaturaEsquema = new Schema(
  {
    nombre: {
      type: String,
      required: true,
      unique: true,
      trim: true, //Sirve para eliminar espacios y caracteres innecesarios
    },
    creditos: {
      type: String,
      required: true,
      trim: true,
    },
    horas: {
      type: String,
      required: true,
      trim: true,
    },
    opcion: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Asignaturas", asignaturaEsquema);
