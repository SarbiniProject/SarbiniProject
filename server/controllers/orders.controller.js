const { or, where } = require('sequelize');
const {orders,Users, Product, Sequelize}=require('../database-Sequelize/index')

const AllOrders = async(req,res) => {
    try {
    const result=await orders.findAll({where:{satus3:false}});
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
        const result=await orders.update({satus2:req.body.satus2},{where:{id:req.params.id}})
        res.json(result)
    } catch (error) {
        res.send("err",error)
    }
}

const AjoutProduct = async(req,res)=>{
    try{
        const result=await orders.update({products:req.body.products},{where:{id:req.params.id}})
        res.json(result)
    }
    catch (error) {
        res.send("err",error)
    }
}
const Opnedtable=async(req,res)=>{
    try{
        const result=await orders.findOne({where:{satus1:true}})
        res.json(result)
    }
    catch (error) {
        res.send("err",error)
    }
}
const Getproduct=async(req,res)=>{
    try{
        const result = await orders.findAll({
            attributes: ['products'],
            where: { satus1: true },
          });
        res.json(result)
    }
    catch (error) {
        res.send("err",error)
    }   
}
const Orderon = async(req,res) => {
    try {
    const result=await orders.findAll({where:{satus1:true}});
    res.json(result)   
    } catch (error) {
    res.send(error)    
    }
};
const Note=async(req,res)=>{
    try{
        const result=await orders.update({note:req.body.note},{where:{id:req.params.id}})
        res.json(result)
    }
    catch (error) {
        res.send(error)    
        }
}
const Deleteprod = async (req, res) => {
    const idprodtodelete = req.body.id;
    const idorder = req.params.id;
  
    try {
      const order = await orders.findByPk(idorder);
  
      if (!order) {
        return res.status(404).json({ error: 'Commande non trouvée' });
      }
  
      // Vérifier que order.products est un tableau
      if (!Array.isArray(order.products)) {
        return res.status(500).json({ error: 'La propriété products n\'est pas un tableau' });
      }
  
      // Retirer l'objet spécifique du tableau
      const updatedProducts = order.products.filter(product => product.id !== idprodtodelete);
  
      // Mettre à jour la commande avec les produits mis à jour
      await orders.update(
        { products: updatedProducts },
        { where: { id: idorder } }
      );
  
      res.status(200).json({ message: 'Produit supprimé avec succès' });
    } catch (error) {
      console.error('Erreur lors de la suppression du produit :', error);
  
      // Ajout d'une réponse JSON avec l'erreur pour un diagnostic ultérieur
      res.status(500).json({ error: 'Erreur lors de la suppression du produit', details: error.message });
    }
  };


module.exports={AllOrders,AddOrders,UpdateStatus1,UpdateStatus2,AjoutProduct,Opnedtable,Getproduct,Orderon,Note,Deleteprod}