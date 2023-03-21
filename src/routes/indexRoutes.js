import { Router } from "express";
import Asignatura from "../models/Asignatura";
import Profesor from "../models/Profesor";
import {
  actAlumno,
  agrAlumno,
  buscAlumno,
  delAlumno,
  renderAlumno,
  staAlumno,
} from "../controller/alumnoController";
import {
  actProfesor,
  agrProfesor,
  buscProfesor,
  delProfesor,
  renderProfesor,
  staProfesor,
} from "../controller/profesorController";
import {
  actAsignatura,
  agrAsignatura,
  buscAsignatura,
  delAsignatura,
  renderAsignatura,
  staAsignatura,
} from "../controller/materiaController";

const router = Router();

router.get("/", async (req, res) => {
  res.render("index");
});


//Metodos de la clase Asignatura

router.post("/asignatura/agregar", agrAsignatura);

router.get("/agregarAsig", renderAsignatura);

router.get("/actualizarAsig/:id", buscAsignatura);

router.post("/actualizarAsig/:id", actAsignatura);

router.get("/eliminarAsig/:id", delAsignatura);

//Boton de status de la asignatura
router.get("/statusAsig/:id", staAsignatura);



//Metodos de la clase Alumno

router.post("/alumno/agregar", agrAlumno);

router.get("/agregarAlum", renderAlumno);

router.get("/actualizarAlum/:id", buscAlumno);

router.get("/eliminarAlum/:id", delAlumno);

router.post("/actualizarAlum/:id", actAlumno);

//Boton de status del alumno
router.get("/statusAlum/:id", staAlumno);



//Metodos de la clase Profesor

router.post("/profesor/agregar", agrProfesor);

router.get("/agregarProf", renderProfesor);

router.post("/actualizarProf/:id", actProfesor);

router.get("/actualizarProf/:id", buscProfesor);

router.get("/eliminarProf/:id", delProfesor);

//Boton de status del profesor
router.get("/statusProf/:id", staProfesor);

export default router;
