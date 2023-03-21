import Profesor from "../models/Profesor";

//Exportaciones de la clase Profesor

export const renderProfesor = async (req, res) => {
    const profesor = await Profesor.find().lean();
    res.render("agregarProfesor", { profesor: profesor });
};

export const agrProfesor = async (req, res) => {
    try {
        const profesor = Profesor(req.body);
        await profesor.save();
        res.redirect("/agregarProf");
    } catch (error) {
        console.log(error);
    }
};

export const actProfesor = async (req, res) => {
    const { id } = req.params;
    await Profesor.findByIdAndUpdate(id, req.body);

    res.redirect("/agregarProf");
};

export const buscProfesor = async (req, res) => {
    try {
        const profesor = await Profesor.findById(req.params.id).lean();
        res.render("editarProfesor", { profesor });
    } catch (error) {
        console.log(error.message);
    }
};

export const delProfesor = async (req, res) => {
    const { id } = req.params;
    await Profesor.findByIdAndDelete(id);

    res.redirect("/agregarProf");
};

export const staProfesor = async (req, res) => {
    const { id } = req.params;
    const profesor = await Profesor.findById(id);
    //Esta propiedad proviene de la carpeta model
    profesor.opcion = !profesor.opcion;
    await profesor.save();
    res.redirect("/agregarProf/")
};

