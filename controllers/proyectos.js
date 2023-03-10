const Proyect =require('../models/Proyect.model')

//obtener todos los proyectos
exports.getProyects=async(req,res)=>{
    const proyects=await Proyect.find()
    res.json(proyects)
}

//para tener un proyecto
exports.getProyectByID=async(req, res)=>{
    const {id}=req.params
    const proyect=await Proyect.findById(id)
    res.json({proyect})
}

//crear un proyecto
exports.createProyect=async(req,res)=>{
    const {proye, descripcion, fotos, categoria}=req.body
    console.log(req.body)
    const proyect=await Proyect.create({proye, descripcion, fotos, categoria})
    res.json(proyect)
}

//actualizar un proyecto
exports.updateProyects=async(req, res)=>{
    const {id}=req.params
    const {proye, descripcion, fotos, categoria}=req.body
    const proyect=await Proyect.findByIdAndUpdate(id, {proye, descripcion, fotos, categoria})
    res.json(proyect)
}

//borrar un proyecto
exports.deleteProyects=async (req, res)=>{
    const {id}= req.params
    await Proyect.findByIdAndDelete(id)
    res.json({message:"deleted"})
}