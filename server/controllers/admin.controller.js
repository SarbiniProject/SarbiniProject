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

const getlocation=async(req,res)=>{
    try{
        const result=await Users.findAll({attributes:["user_location"]})
        res.json(result)
    } catch (error){
        res.send(error)
    }
}

const getlocation2 = async (req, res) => {
    try {
        const result = await Users.findAll({attributes: ["user_location"],where: { user_role: "controller" }
        });
        res.json(result);
    } catch (error) {
        res.send(error);
    }
};


const getonebyname=async (req,res)=>{
    try{
        const result=await Users.findAll({attributes:["user_name"]})
        res.json(result)
    } catch (error){
        res.send(error)
    }
}

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

const updateuser = async (req, res) => {
    try {
      const id = req.params.id;
      const info = req.body;
      const result = await Users.update(info, { where: { id: id } });
  
      res.json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };

  const updateadmin = async (req, res) => {
    try {
      const id = req.params.id;
      const info = req.body;
      const result = await Admin.update(info, { where: { id: id } });
  
      res.json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };
  

const deleteuser=async(req,res)=>{
    try{
        let id=req.params.id
        const result=await Users.destroy({where:{id:id}})
        res.json(result)
    }
    catch(error){
        res.send(error)
    }
}


const getOneById = async (req, res) => {
    try {
      const pseudo = req.params.pseudo; 
      const result = await Admin.findOne({ where: { id: pseudo } });
      res.json(result);
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };

 

const generateToken = (id, admin_name) => {
    const expiresIn = 60 * 60 * 24;
    return jwt.sign({id, admin_name}, 'secretKey', { expiresIn: expiresIn });
  };
  module.exports={getAdmin,generateToken,getAllcontrollers ,deleteuser,getlocation ,updateuser,getonebyname,getlocation2,getOneById,updateadmin}