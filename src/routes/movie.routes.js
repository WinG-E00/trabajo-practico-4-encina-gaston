import { Router } from "express";

import { 
  getAllMovies, 
  getMovieById, 
  createMovie, 
  updateMovie, 
  deleteMovie 
} from "../controllers/movie.controllers.js";



export const movieRouter = Router();

// GET /api/movies: devolver todas las películas registradas.
// GET /api/movies/:id: devolver una película por su ID.
// POST /api/movies: crear una nueva película (con validación).
// PUT /api/movies/:id: actualizar los datos de una película existente (con validación y
// verificación de existencia y unicidad de title).
// DELETE /api/movies/:id: eliminar una película.


movieRouter.get("/api/movies", getAllMovies);

movieRouter.get("/api/movies/:id", getMovieById);

movieRouter.post("/api/movies", createMovie);

movieRouter.put("/api/movies/:id", updateMovie);

movieRouter.delete("/api/movies/:id", deleteMovie);