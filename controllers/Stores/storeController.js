const Store = require('../../models/stores/Store');
  exports.createStore=async(req,res)=>{
    try {
        console.log('%cstoreController.js line:4 "test"', 'color: #007acc;', "test");
        let {name,address,geometry}=req.body;
        let newStore=await Store.create({name,address,geometry});
        return res.status(200).json({
        succes:true,
        message:"Store Created",
        data: newStore
        });
        
    } catch (error) {
        return res.status(500).json({
            succes:false,
            message:"Store could not created.",
            data: null
            });
    }

}
exports.deleteStore=async(req,res)=>{

}
 exports.updateStore=async(req,res)=>{

}
 exports.getStores=async(req,res)=>{

}
 exports.getNearByStores=async(req,res)=>{
    try {
        
        const result=await Store.geoNear({
            type:"Point",
            coordinates:[parseFloat(req.query.lng),parseFloat(req.query.lat)]
    
            },
            {
                maxDistance:100000
            }
    
    
        )
        return res.status(200).json(result);
    } catch (error) {
        
        return res.status(500).json(error.message);
    }
}