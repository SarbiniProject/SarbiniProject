const {Admin}=require('../database-Sequelize/index')
const jwt = require('jsonwebtoken');

const getAdmin= async(req,res) => {
    try {
    const result=await Admin.findAll()
    res.json(result)   
    } catch (error) {
    res.send(error)    
    }
};

const generateToken = (id, admin_name) => {
    const expiresIn = 60 * 60 * 24;
    return jwt.sign({id, admin_name}, 'secretKey', { expiresIn: expiresIn });
  };
  module.exports={getAdmin,generateToken}