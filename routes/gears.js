

// Require the model so we can access the collection
var Gear = require('../models/gear');



module.exports = {
    get : (req, res) => {
        // Read
        Gear.find({}, function(err, gears){
            res.json(gears);
        });
    },

    upsert : (req, res) =>{
        // Create / Update
        if(req.params.id){
            // Update existing document
        }
        else {
            // No id in the url, create a new document
            var newGear = new Gear(req.body);
            // Save gear to DB
            newGear.save(function(err, gear){
                if(err){
                    return res.json(err);
                }
                res.json(gear);
            });
        }

    },

    remove : (req, res) =>{
        // Delete
    }

}
