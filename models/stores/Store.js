const mongoose = require('mongoose');
const StoreSchema = require('./StoreSchema');
module.exports=mongoose.model("Store",StoreSchema,"stores");