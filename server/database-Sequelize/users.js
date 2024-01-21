const Users =(connection,DataTypes)=>{
    return connection.define("users", {
   user_name: {
     type: DataTypes.STRING,
     allowNull: false,
   },
   user_phone:{
    type: DataTypes.INTEGER,
    allowNull: true,
   },
   user_Pseudo: {
     type: DataTypes.STRING,
     allowNull: false,
   },
   user_password: {
     type: DataTypes.STRING,
     allowNull: false,
   },
   user_role: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  user_location :{
    type: DataTypes.STRING,
    allowNull: true,
  }
 
 })

};

module.exports=Users;