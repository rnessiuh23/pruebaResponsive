import app from "./app"; //Equivale al codigo existente en app.js
import "./database";
import { PUERTO } from "./config";
const port = process.env.PORT || PUERTO;
app.listen(port);
console.log("Servidor en puerto", port);
