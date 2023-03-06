const { Sequelize, Model, DataTypes } = require("sequelize");

let sequelize = require("../../common/dbConnection");

class Courses extends Model {}
Courses.init(
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    courseTitle: {
      allowNull: false,
      type: DataTypes.STRING(),
    },
    courseCode: {
      unique: true,
      allowNull: false,
      type: DataTypes.STRING(),
    },
    creditHours: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: true,
    paranoid: true,
    sequelize: sequelize,
    modelName: "Courses",
  }
);

module.exports = Courses;
