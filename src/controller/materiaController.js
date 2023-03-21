import Asignatura from "../models/Asignatura";

//Exportaciones de la clase Asignatura

export const renderAsignatura = async (req, res) => {
  const asignatura = await Asignatura.find().lean();
  res.render("agregarMateria", { asignatura: asignatura });
};

export const agrAsignatura = async (req, res) => {
  try {
    const asignatura = Asignatura(req.body);
    await asignatura.save();
    res.redirect("/agregarAsig");
  } catch (error) {
    console.log(error);
  }
};

export const actAsignatura = async (req, res) => {
  const { id } = req.params;
  await Asignatura.findByIdAndUpdate(id, req.body);

  res.redirect("/agregarAsig");
};

export const buscAsignatura = async (req, res) => {
  try {
    const asignatura = await Asignatura.findById(req.params.id).lean();
    res.render("editarMateria", { asignatura });
  } catch (error) {
    console.log(error.message);
  }
};

export const delAsignatura = async (req, res) => {
  const { id } = req.params;
  await Asignatura.findByIdAndDelete(id);

  res.redirect("/agregarAsig");
};

export const staAsignatura = async (req, res) => {
  const { id } = req.params;
  const asignatura = await Asignatura.findById(id);
  //Esta propiedad proviene de la carpeta model
  asignatura.opcion = !asignatura.opcion;
  await asignatura.save();
  res.redirect("/agregarAsig");
};
