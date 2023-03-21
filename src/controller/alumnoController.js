import Alumno from "../models/Alumno";

//Exportaciones de la clase Alumno

export const renderAlumno = async (req, res) => {
    const alumno = await Alumno.find().lean();
    res.render("agregarAlumno", { alumno: alumno });
};

export const agrAlumno = async (req, res) => {
    try {
        const alumno = Alumno(req.body);
        await alumno.save();
        res.redirect("/agregarAlum");
    } catch (error) {
        console.log(error);
    }
};

export const buscAlumno = async (req, res) => {
    try {
        const alumno = await Alumno.findById(req.params.id).lean();
        res.render("editarAlumno", { alumno });
    } catch (error) {
        console.log(error.message);
    }
};

export const delAlumno = async (req, res) => {
    const { id } = req.params;
    await Alumno.findByIdAndDelete(id);

    res.redirect("/agregarAlum");
};

export const actAlumno = async (req, res) => {
    const { id } = req.params;
    await Alumno.findByIdAndUpdate(id, req.body);

    res.redirect("/agregarAlum");
};

export const staAlumno = async (req, res) => {
    const { id } = req.params;
    const alumno = await Alumno.findById(id);
    //Esta propiedad proviene de la carpeta model
    alumno.opcion = !alumno.opcion;
    await alumno.save();
    res.redirect("/agregarAlum/")
};