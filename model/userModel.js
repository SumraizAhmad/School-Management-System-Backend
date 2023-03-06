const {models}=require("../model/definition");

module.exports={
    createUser: async function (body){
        const result = await models.User.create(body);
        return result;
    },
    getUser: async function(body){
        const result =await models.User.findAll();
        return result;
    },
    getUserById: async function (id) {
		const result = await models.User.findAll({
			where: { id: id },
		});
		return result;
	},
    updateUser: async function (body) {
		const result = await models.User.update(
			{
				...body,
			},
			{
				where: { id: body.id },
			},
		);
		return result;
	},
    deleteUser: async function (id) {
		const result = await models.User.destroy({
			where: { id: id },
		});
		return 'Deleted User';
	},
    

}