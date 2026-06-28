import express from "express";
 

const app = express();
const PORT = 3001;



// Para que la base de datos entienda el formato json 
app.use(express.json());


//Esto es para que la app use el router con las configuraciones que les pasemos
//app.use("/api",productRouter);


app.listen(PORT, async () => {
    // await startDB();
    console.log(`Servidor listo http://localhost:${PORT}`);
})

