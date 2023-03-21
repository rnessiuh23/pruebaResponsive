import express from "express";
import indexRoutes from "./routes/indexRoutes";
import exphbs from "express-handlebars";
import path from "path"; //Modulo de node
import morgan from "morgan";

const app = express();

app.set("views", path.join(__dirname, "views"));
app.engine(
  ".hbs",
  exphbs({
    layoutsDir: path.join(app.get("views"), "layouts"),
    defaultLayout: "main",
    extname: ".hbs",
  })
);
app.set("view engine", ".hbs");

//middleware 'Intermediario entre servidor y cliente'
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

//Rutas
app.use(indexRoutes);

//Archivos estaticos
//El path nos sirve para no estar escribiendo la ruta todo el tiempo
app.use(express.static(path.join(__dirname, "frontend")))

export default app; //Exportacion del objeto app
