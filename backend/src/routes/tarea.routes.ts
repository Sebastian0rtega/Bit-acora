import { Router } from "express";
const router = Router();


router.get("/",(req,res)=>{
    res.json({mensaje: "listado de tareas"});
});
router.post("/",(req,res)=>{
    res.status(201).json({
        mensaje: "tarea recibida",
        tarea: req.body
    });
});

export default router;