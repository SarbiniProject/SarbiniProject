const Product =(connection,DataTypes)=>{
    return connection.define("product", {
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    image : {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description : {
        type: DataTypes.STRING,
        allowNull: true,
      },

      
    
  })};

module.exports=Product;
