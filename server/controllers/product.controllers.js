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

const Productbycaetg =async(req,res)=>{
    try{
        let categ=req.params.categoryId
        const result=await Product.findAll({where:{categoryId:categ}})
        res.json(result)
    }
    catch (error) {
        res.send(error)    
        }
}

const search =async(req,res)=>{
    try{
        let search=req.body.product_name
        const result= await Product.findAll({
            where: {
                product_name:search
            }
        })
        res.json(result)
    }
    catch (error) {
        res.send(error)    
        }
}

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


module.exports={AllProduct,AddProduct,UpdateProduct,DeleteProduct,Productbycaetg,search}