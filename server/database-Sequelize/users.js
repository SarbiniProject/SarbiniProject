const Users =(connection,DataTypes)=>{
    return connection.define("users", {
   user_name: {
     type: DataTypes.STRING,
     allowNull: true,
   },
   user_phone:{
    type: DataTypes.INTEGER,
    allowNull: true,
   },
   user_Pseudo: {
     type: DataTypes.STRING,
     allowNull: true,
   },
   user_password: {
     type: DataTypes.STRING,
     allowNull: true,
   },
   user_role: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  user_location :{
    type: DataTypes.STRING,
    allowNull: true,
  }
 
 })

};

module.exports=Users;