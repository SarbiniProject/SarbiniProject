const {Product, Categories}=require('../database-Sequelize/index')

const AllProduct = async(req,res) => {
    try {
    const result=await Product.findAll({
        include:{model:Categories},
    });
    res.json(result)   
    } catch (error) {
    res.send(error)    
    }
};


const AddProduct = async(req,res) => {
    try {
    const result=await Product.create(req.body)
    res.json(result)   
    } catch (error) {
    res.send(error)    
    }
};

const UpdateProduct = async(req,res) => {
    try {
    const result=await Product.update(req.body,{where:req.params})
    res.json(result)   
    } catch (error) {
    res.send(error)    
    }
};

const DeleteProduct= async(req,res) => {
    try {
    const result=await Product.destroy({where:req.params})
    res.json(result)   
    } catch (error) {
    res.send(error)    
    }
};

module.exports={AllProduct,AddProduct,UpdateProduct,DeleteProduct}