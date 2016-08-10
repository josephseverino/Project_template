var mongoose = require('mongoose');

// Create a model / schema
var gearSchema = mongoose.Schema({
    email:      {type : String},
    phone:      {type : String},
    typeEquip:  {type : String},
    descript:   {type : String},
    profilePic: {type : String},
    equipPic:   {type : [String]},
});

// export the model
module.exports = mongoose.model('Gear', gearSchema);
