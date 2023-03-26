import app from "./app"; //Equivale al codigo existente en app.js
import "./database";
import { PORT } from "./config";
const port = process.env.PORT || PORT
app.listen(port);
console.log("Servidor en puerto", port);
