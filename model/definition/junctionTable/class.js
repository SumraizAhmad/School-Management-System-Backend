const { Sequelize, Model, DataTypes } = require("sequelize");

let sequelize = require("../../../common/dbConnection");

class Class extends Model {}

Class.init(
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    
  },
  {
    timestamps: true, //created and updated time
    paranoid: true, //
    sequelize: sequelize,
    modelName: "class",
  }
);

module.exports = Class;
