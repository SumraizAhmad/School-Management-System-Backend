const { Sequelize, Model, DataTypes } = require("sequelize");

let sequelize = require("../../common/dbConnection");

class User extends Model {}

User.init(
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    firstName: {
      allowNull: false,
      type: DataTypes.STRING(), 
    },
    lastName:{
      allowNull: false,
      type: DataTypes.STRING()
    },
    email: {
      unique: true,
      allowNull: false,
      type: DataTypes.STRING(),
    },
    phoneNumber: {
      unique: true,
      allowNull: false,
      type: DataTypes.STRING(),
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING(),
    },
    // role:{
    //   allowNull: false,
    //   type: DataTypes.STRING()
    // }
    
   
  },
  {
    timestamps: true, //created and updated time
    paranoid: true, //
    sequelize: sequelize,
    modelName: "User",
  }
);

module.exports = User;
