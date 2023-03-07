module.exports = {

//userWorking
createUser:require("./users/createUser"),
getUser: require("./users/getUser"),
getUserById: require("./users/getUserById"),
updateUser: require("./users/updateUser"),
deleteUser: require("./users/deleteUser"),

// //teacherWorking
// createTeacher:require("./teachers/createTeacher"),
// getTeacher: require("./teachers/getTeacher"),
// getTeacherById: require("./teachers/getTeacherById"),
// updateTeacher: require("./teachers/updateTeacher"),
// deleteTeacher: require("./teachers/deleteTeacher"),

// //studentWorking
createStudent:require("./students/createStudent"),
getStudent: require("./students/getStudent"),
// getStudentById: require("./students/getStudentById"),
updateStudent: require("./students/updateStudent"),
deleteStudent: require("./students/deleteStudent"),

// //courseWorking
// createCourse:require("./courses/createCourse"),
// getCourse: require("./courses/getCourse"),
// getCourseById: require("./courses/getCourseById"),
// updateCourse: require("./courses/updateCourse"),
// deleteCourse: require("./courses/deleteCourse"),

}