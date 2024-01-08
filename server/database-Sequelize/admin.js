const Admin =(connection,DataTypes)=>{
    return connection.define("admin", {
   admin_name: {
     type: DataTypes.STRING,
     allowNull: false,
   },
   admin_Pseudo: {
     type: DataTypes.STRING,
     allowNull: false,
   },
   admin_password: {
     type: DataTypes.STRING,
     allowNull: false,
  
  },
 
 })

};

module.exports=Admin;