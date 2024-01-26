const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { AddUser} = require('./users.controller');
const {Users,Admin}=require('../database-Sequelize/index')


const generateToken = (userId, userName) => {
  const expiresIn = 60 * 60 * 24;
  return jwt.sign({ userId, userName }, 'secretKey', { expiresIn: expiresIn });
};
const signUp = async (req, res) => {
  const { user_location,user_phone,user_name, user_Pseudo, user_password ,user_role } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(user_password, 10);

    const newUser = {
      user_location,
      user_phone,
      user_name,
      user_Pseudo,
      user_role,
      user_password: hashedPassword}
     
      AddUser({ body: newUser }, res);
  } catch (error) {
    res.status(500).json({ error: 'Error' });
  }
};


// const signIn = async(req, res) => {
//   const{user_Pseudo,user_password}=req.body;
//     try {
//          const result= await Users.findOne({ where :{user_Pseudo:user_Pseudo}})
//          if(result ===null) res.send("pseusdo not found")
//          else {
//           const verif=result.dataValues.user_password
//           const passwordMatch = await bcrypt.compare(user_password,verif)
//           if(passwordMatch){
//              const tok=generateToken(result.dataValues.id,result.dataValues.user_name)  
//              result.dataValues.tok=tok
//             res.send(result.dataValues)
//           }
//           else{
//             res.send("password mismatch")
//           }
          
//       }
    
//     }
//     catch (error) {res.send(error)}
// };
// Server-side code (signIn function)
const signIn = async (req, res) => {
  const { user_Pseudo, user_password } = req.body;

  try {
    // Use findOne with attributes to select specific fields
    const result = await Users.findOne({
      attributes: ['id', 'user_role', 'user_password'],
      where: { user_Pseudo: user_Pseudo },
    });

    if (!result) {
      return res.status(404).send("Pseudo not found");
    }


    const storedPassword = result.dataValues.user_password;

    if (user_password === storedPassword) {
      // Assuming generateToken is a function that generates a token based on user information
      const tok = generateToken(result.dataValues.id, result.dataValues.user_name,result.dataValues.user_role);
      
      // Create a new object with necessary properties
      const userData = {
        id: result.dataValues.id,
        user_name: result.dataValues.user_name,
        user_role:result.dataValues.user_role,
        tok: tok,
      };

      res.status(200).json(userData);
    } else {
      res.status(401).send("Password mismatch");
    }
  } catch (error) {
    console.error('Error during sign-in:', error);
    res.status(500).send('Internal Server Error');}}

const adminGenerateToken = (userId, userName) => {
  const expiresIn = 60 * 60 * 24;
  return jwt.sign({ userId, userName }, 'secretKey', { expiresIn: expiresIn });
};

const adminSignIn = async (req, res) => {
  const { admin_Pseudo, admin_password } = req.body;

  try {
    const result = await Admin.findOne({ where: { admin_Pseudo: admin_Pseudo } });

    if (result === null) {
      return res.status(404).json({ error: "Pseudonym not found" });
    }

    const storedPassword = result.dataValues.admin_password;
    const passwordMatch = await bcrypt.compare(admin_password, storedPassword);

    if (passwordMatch||admin_password===storedPassword) {
      const token = adminGenerateToken(result.dataValues.id, result.dataValues.admin_name);
      result.dataValues.tok = token;
      console.log(result.dataValues);
      res.status(200).json(result.dataValues);
    } else {
      res.status(401).json({ error: "Password mismatch" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });

  }
};
module.exports = {
  signUp,
  signIn,
  adminSignIn
}