const Sequelize = require("sequelize");
var config = require("../../config.json");
const db = {};
config = config.db;
let sequelize = require("../../common/dbConnection");
const User = require("../definition/users");
const Teacher = require("../definition/teachers");
const Student = require("../definition/students");
const Course = require("../definition/courses");
const Class = require("./junctionTable/class");

const models = {
  User,
  Teacher,
  Student,
  Course,
  Class,
};

// relation

// // user-teacher (1:1)
User.hasOne(Teacher, { onDelete: "CASCADE", foreignKey: "userId" });
Teacher.belongsTo(User, { onDelete: "CASCADE", foreignKey: "userId" });

// // user-student (1:1)
User.hasOne(Student, { onDelete: "CASCADE", foreignKey: "studentId" });
Student.belongsTo(User, { onDelete: "CASCADE", foreignKey: "studentId" });

// // teacher-Class (1:m)
// Teacher.hasMany(Class, {onDelete:'CASCADE',foreignKey:'teacherId'});
// Class.belongsTo(Teacher, {onDelete:'CASCADE', foreignKey:'teacherId'});

// // Student-Class(1:m)
// Student.hasMany(Class, {onDelete:'CASCADE', foreignKey:'classId'});
// Class.belongsTo(Student, {onDelete:'CASCADE', foreignKey:'classId'});

// //  Course-Class (1:m)
// Course.hasMany(Class, {onDelete:'CASCADE', foreignKey:'courseId'});
// Class.belongsTo(Course, {onDelete:'CASCADE', foreignKey:'courseId'});

// // Course-Class (1:m)
// Course.hasMany(Class, {onDelete:'CASCADE', foreignKey:'courseId'});
// Class.belongsTo(Course, {onDelete:'CASCADE', foreignKey:'courseId'});

// // Teacher-teacherCourse (1:m)
// Teacher.hasMany(teacherCourse, {onDelete:'CASCADE', foreignKey:'teacherCourseId'});
// teacherCourse.belongsTo(Teacher, {onDelete:'CASCADE', foreignKey:'teacherCourseId'});

// // Course-teacherCourse (1:m)
// Course.hasMany(teacherCourse, {onDelete:'CASCADE', foreignKey:'coursesId'});
// teacherCourse.belongsTo(Course, {onDelete:'CASCADE', foreignKey:'CoursesId'})

sequelize.model = models;
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = { db, models };
