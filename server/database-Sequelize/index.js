const { Sequelize, DataTypes } = require("sequelize");
const config = require('../config/config.js')

const connection = new Sequelize(config.database,config.user,config.password,{
    host: "127.0.0.1",
    dialect: "mysql",
    logging:false
  }
);



const sarbini={}
sarbini.connection=connection
sarbini.Sequelize=Sequelize
sarbini.Admin = require ('./admin.js')(connection,DataTypes)
sarbini.Users = require ('./users.js')(connection,DataTypes)
sarbini.Product = require ('./product.js')(connection,DataTypes)
sarbini.Categories = require ('./categories.js')(connection,DataTypes)
sarbini.orders= connection.define('orders',{ 
 satus:{
  type: DataTypes.BOOLEAN,
  allowNull: false,
  defaultValue:false
}})
sarbini.Users.belongsToMany(sarbini.Product ,{ through: 'orders' })
sarbini.Product.belongsToMany(sarbini.Users ,{ through: 'orders' })

sarbini.Subscriptions= connection.define('subscriptions',{ 
  deadline:{
    type: DataTypes.DATE,
    allowNull: false,
  },
  name:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  price:{
    type: DataTypes.INTEGER,
    allowNull: false,
  },
})
sarbini.Admin.belongsToMany(sarbini.Users,{ through: 'subscriptions' })
sarbini.Users.belongsToMany(sarbini.Admin,{ through: 'subscriptions' })


sarbini.payments= connection.define('payments',{ 
  total:{
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  send:{
   type: DataTypes.BOOLEAN,
   allowNull: false,
   defaultValue:false
 }})
 sarbini.Users.belongsToMany(sarbini.orders ,{ through: 'payments' })
 sarbini.orders.belongsToMany(sarbini.Users ,{ through: 'payments' })

sarbini.Categories.hasMany(sarbini.Product)
sarbini.Product.belongsTo(sarbini.Categories)



sarbini.connection.authenticate()

sarbini.connection.sync({ force: false })
  .then(() => {
    console.log("tables created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });

module.exports=sarbini
