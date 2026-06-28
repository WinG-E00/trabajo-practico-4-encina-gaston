import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";





//Modelo
// id
// title
// genre
// duration
// year
// synopsis
export const Movie = sequelize.define(
  "Movie",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    synopsis: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    timestamps: false, // Si no quieres createdAt y updatedAt
  }
);