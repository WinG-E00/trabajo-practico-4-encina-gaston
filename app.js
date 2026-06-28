import express from "express";

import { startDB } from "./src/config/database.js";
import { movieRouter } from "./src/routes/movie.routes.js";


const app = express();
const PORT = 3001;



// Para que la base de datos entienda el formato json 
app.use(express.json());


app.use("/api",movieRouter);


app.listen(PORT, async () => {
     await startDB();
    console.log(`Servidor listo http://localhost:${PORT}`);
})

