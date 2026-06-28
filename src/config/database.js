import { Sequelize } from "sequelize";

// Conexion con la base de datos
export const sequelize = new Sequelize("movies", "root", "", {
    host: "localhost",
    dialect: "mysql",
});


//

export const startDB = async () => {

    try {
        await sequelize.authenticate();
        await sequelize.sync({ force: true});
        console.log("Conexion a la base de datos lista");

    }catch (error){
        console.log("No se pudo conectar a la db;", error)
    }



}
