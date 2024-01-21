const {orders,Users, Product}=require('../database-Sequelize/index')

const AllOrders = async(req,res) => {
    try {
    const result=await orders.findAll();
    res.json(result)   
    } catch (error) {
    res.send(error)    
    }
};


const AddOrders = async(req,res) => {
    try {
    const result=await orders.create(req.body)
    res.json(result)   
    } catch (error) {
    res.send(error)    
    }
};

const UpdateStatus1 = async(req,res) => {
    try {
        const result=await orders.update({satus1:req.body.satus1},{where:{id:req.params.id}})
        res.json(result)
    } catch (error) {
        res.send("err",error)
    }
}
const UpdateStatus2 = async(req,res) => {
    try {
        const result=await orders.update({satus2:req.body.satus1},{where:{id:req.params.id}})
        res.json(result)
    } catch (error) {
        res.send("err",error)
    }
}
const UpdateStatus3 = async(req,res) => {
    try {
        const result=await orders.update({satus3:true},{where:{id:req.params.id}})
        res.json(result)
    } catch (error) {
        res.send("err",error)
    }
}

const OrdersByUserId = async (req, res) => {
    try {
        const userId = req.params.userId; // Assuming userId is passed in the request parameters
        const userOrders = await orders.findAll({
            where: { userId: userId }, // Assuming the foreign key in orders table is named userId
            include: [Users] // Include other associated models if needed
        });
        res.json(userOrders);
    } catch (error) {
        res.send(error);
    }
};

module.exports = { AllOrders, AddOrders, UpdateStatus1,UpdateStatus2,UpdateStatus3, OrdersByUserId };
