import { Movie } from "../models/Movie.model.js";

// GET /api/movies: devolver todas las películas registradas
export const getAllMovies = async (req, res) => {
    try {
        const movies = await Movie.findAll();
        res.json(movies);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener películas" });
    }
};



// GET /api/movies/:id: devolver una película por su ID
export const getMovieById = async (req, res) => {
    try {
        const { id } = req.params;
        const movie = await Movie.findByPk(id);

        if (!movie) {
            return res.status(404).json({ error: "Película no encontrada" });
        }

        res.json(movie);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener la película" });
    }
};



// POST /api/movies: crear una nueva película (con validación)
export const createMovie = async (req, res) => {
    try {
        const { title, genre, duration, year, synopsis } = req.body;

        // Validación
        if (!title || !genre || !duration || !year) {
            return res.status(400).json({ error: "Faltan campos obligatorios" });
        }

        if (typeof duration !== "number" || duration <= 0) {
            return res.status(400).json({ error: "Duration debe ser un número positivo" });
        }

        if (typeof year !== "number" || year < 1800 || year > new Date().getFullYear()) {
            return res.status(400).json({ error: "Year debe ser un año válido" });
        }

        // Crear película
        const movie = await Movie.create({
            title,
            genre,
            duration,
            year,
            synopsis,
        });

        res.status(201).json(movie);
    } catch (error) {
        res.status(500).json({ error: "Error al crear la película" });
    }
};



// PUT /api/movies/:id: actualizar película (con validación y verificación de unicidad de title)
export const updateMovie = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, genre, duration, year, synopsis } = req.body;

        // Verificar si la película existe
        const movie = await Movie.findByPk(id);
        if (!movie) {
            return res.status(404).json({ error: "Película no encontrada" });
        }

        // Validación
        if (!title || !genre || !duration || !year) {
            return res.status(400).json({ error: "Faltan campos obligatorios" });
        }

        if (typeof duration !== "number" || duration <= 0) {
            return res.status(400).json({ error: "Duration debe ser un número positivo" });
        }

        if (typeof year !== "number" || year < 1800 || year > new Date().getFullYear()) {
            return res.status(400).json({ error: "Year debe ser un año válido" });
        }

        // Verificar unicidad de title (si es diferente al actual)
        if (title !== movie.title) {
            const existingMovie = await Movie.findOne({ where: { title } });
            if (existingMovie) {
                return res.status(400).json({ error: "El título ya existe" });
            }
        }

        // Actualizar película
        await movie.update({
            title,
            genre,
            duration,
            year,
            synopsis,
        });

        res.json(movie);
    } catch (error) {
        res.status(500).json({ error: "Error al actualizar la película" });
    }
};

// DELETE /api/movies/:id: eliminar una película
export const deleteMovie = async (req, res) => {
    try {
        const { id } = req.params;

        const movie = await Movie.findByPk(id);
        if (!movie) {
            return res.status(404).json({ error: "Película no encontrada" });
        }

        await movie.destroy();
        res.json({ message: "Película eliminada correctamente" });
    } catch (error) {
        res.status(500).json({ error: "Error al eliminar la película" });
    }
};