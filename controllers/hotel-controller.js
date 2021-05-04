const fs=require('fs');
const HotelModel = require('../models/hotel');
exports.create=async(req,res)=>{
 try {
    const newHotel=new HotelModel(req.fields);
    console.log('%chotel-controller.js line:6 req.fields', 'color: #007acc;', req.fields);
    console.log('%chotel-controller.js line:5 req.files[0]', 'color: #007acc;', req.files);
     if(req.files.image){
         newHotel.image.data= fs.readFileSync(req.files.image.path);
         newHotel.image.contentType=req.files.image.type;
     }
     await newHotel.save();
     return res.status(200).send("OK");
 } catch (error) {
     console.log('%chotel-controller.js line:14 error', 'color: #007acc;', error);
     return res.status(500).send("Internal Server Error!")
 }
   
}
exports.getImage=async(req,res)=>{
    try{
        let id=req.params.id
        let hotel=await HotelModel.findById(id);
        res.set('Content-Type',hotel.image.contentType);
        return res.send(hotel.image.data);
    }
    catch(err){
        return res.status(500).send("internal server error");
    }
   

}