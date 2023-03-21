import { Schema, model } from "mongoose";

const profesorEsquema = new Schema(
  {
    rfc: {
      type: String,
      required: true,
      unique: true,
      trim: true, //Sirve para eliminar espacios y caracteres innecesarios
    },
    nombres: {
      type: String,
      required: true,
      trim: true,
    },
    paterno: {
      type: String,
      required: true,
      trim: true,
    },
    materno: {
      type: String,
      required: true,
      trim: true,
    },
    fechaNacimiento: {
      type: String,
      required: true,
      trim: true,
    },
    direccion: {
      type: String,
      required: true,
      trim: true,
    },
    celular: {
      type: String,
      required: true,
      trim: true,
    },
    profesion: {
      type: String,
      required: true,
      trim: true,
    },
    numeroEmpleado: {
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

export default model("Profesores", profesorEsquema);
