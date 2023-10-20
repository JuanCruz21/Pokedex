const express = require('express')
const Region = require('../Models/Region')
const RegionRouter = express.Router();
//Listar regiones
RegionRouter.get("/", (req,res)=>{
    Region.find()
    .then(datos => res.json({regiones: datos}))
    .catch(error=> res.json({mensaje: error}));
});
//Guardar region nueva
RegionRouter.post("/", (req,res)=>{
    const region = new Region(req.body)
    region.save()
    .then(datos=>res.json(datos))
    .catch(error=>res.json({mensaje: error}))
})
//Actualizar
RegionRouter.patch("/", (req,res)=>{
    const region = new Region(req.body)
    region.updateOne({_id: region._id}, region)
    .then(datos=>res.json(datos))
    .catch(error=>res.json({mensaje: error}))
})
//Eliminar
RegionRouter.delete("/:id", (req,res)=>{
    const region = new Region(req.body)
    region.deleteOne({_id: region.id})
    .then(datos=>res.json(datos))
    .catch(error=>res.json({mensaje: error}))
})

module.exports = RegionRouter;