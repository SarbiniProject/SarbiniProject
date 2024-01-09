const {Admin,Users}=require('../database-Sequelize/index')
const jwt = require('jsonwebtoken');

const getAdmin= async(req,res) => {
    try {
    const result=await Admin.findAll()
    res.json(result)   
    } catch (error) {
    res.send(error)    
    }
};

const getAllcontrollers =async(req,res)=>{
    try{
        const result=await Users.findAll({where:{user_role:"controller"}})
        res.json(result)
    }
    catch(error){
        res.status(500)
        res.send(error)
    }
}

const generateToken = (id, admin_name) => {
    const expiresIn = 60 * 60 * 24;
    return jwt.sign({id, admin_name}, 'secretKey', { expiresIn: expiresIn });
  };
  module.exports={getAdmin,generateToken,getAllcontrollers}