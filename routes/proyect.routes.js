const router =require("express").Router()
const {
    getProyects,
    getProyectByID,
    createProyect,
    updateProyects,
    deleteProyects
}=require("../controllers/proyectos")

router.get("/todos-los-proyectos", getProyects)
router.get("/un-proyecto/:id", getProyectByID)
router.post("/crear/proyectos", createProyect)
router.put("/actualizar-proyecto/:id",  updateProyects)
router.delete("/borrar-proyectos/:id", deleteProyects)

module.exports= router