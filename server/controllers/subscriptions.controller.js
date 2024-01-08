const {subscriptions,Users, Admin}=require('../database-Sequelize/index')

const AllSubs = async(req,res) => {
    try {
    const result=await subscriptions.findAll();
    res.json(result)   
    } catch (error) {
    res.send(error)    
    }
};


const AddSubs = async(req,res) => {
    try {
    const result=await subscriptions.create(req.body)
    res.json(result)   
    } catch (error) {
    res.send(error)    
    }
};

const UpdateSubs = async(req,res) => {
    try {
        const result=await subscriptions.update({send:req.body.send},{where:req.params})
        res.json(result)
    } catch (error) {
        res.send(error)
    }
}


module.exports={AllSubs,AddSubs,UpdateSubs}