const Categories =(connection,DataTypes)=>{
    return connection.define("categories", {
   ca_name: {
     type: DataTypes.STRING,
     allowNull: false,
   }
 
 })

};

module.exports=Categories;