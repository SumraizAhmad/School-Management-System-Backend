const studentService=require('../../services/studentService');

module.exports=async function (req, res){
    const data=await studentService.getStudent(req.body);
    res.send(data);
}