const { Sequelize, Model, DataTypes } = require("sequelize");

let sequelize = require("../../common/dbConnection");

class Teacher extends Model {}
Teacher.init({
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  department: {
    allowNull: false,
    type: DataTypes.STRING(),
  },
  teacherId: {
    unique: true,
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  officeLocation: {
    allowNull: false,
    type: DataTypes.STRING(),
  },
  officeHours: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
},
{
    timestamps:true,
    paranoid:true,
    sequelize:sequelize,
    modelName:"Teacher"
}
);

module.exports=Teacher;