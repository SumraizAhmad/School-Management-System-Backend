const { models } = require("../model/definition");
const { createUser } = require("./userModel");

module.exports = {
  createStudent: async function (body) {
    var userData = {
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      phoneNumber: body.phoneNumber,
      password: body.password,
    };
    var studentData = {
      regNumber: body.regNumber,
      department: body.department,
      semester: body.semester,
    };

    const user = await createUser(userData);
    studentData = { ...studentData, studentId: user.id };
    const result = await models.Student.create(studentData);
    return result;
  },

  getStudent: async function (body) {
    const result = await models.Student.findAll({
      include: {
        model: models.User,
      },
    });

    return result;
  },
  updateStudent: async function (data) {
    try {
      const student = await models.Student.findByPk(data.id);
      if (student) {
        const user = await student.getUser();
        await models.Student.update(
          { ...data },
          {
            where: {
              id: data.id,
            },
          }
        );
        await models.User.update(data, {
          where: {
            id: user.id,
          },
        });
        return "Success";
      } else {
        return "fail";
      }
    } catch (error) {
      console.error(error);
      return "error";
    }
  },

  deleteStudent: async function (id) {
    // const user= await models.User.findByPk(id);
    // if(user.role=="user")
		const result = await models.Student.destroy({
			where: { id: id },
		});
		return result;
	},

};
