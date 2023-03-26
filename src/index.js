import app from "./app"; //Equivale al codigo existente en app.js
import "./database";
import { PORT } from "./config";

app.listen(PORT);
console.log("Servidor en puerto", PORT);
