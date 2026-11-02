import express from "express";
import tareaRoutes from "./routes/tarea.routes";

const app = express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.json({mensaje:"backed operativo"});
});
app.use("/tareas" , tareaRoutes);


export default app;