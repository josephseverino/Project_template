var gearCtrl = require('./gears');
// var otherCtrl = require('./other');

module.exports = (app) => {

    // Routes go here

    // Hero Routes
    app.get('/api/gears', gearCtrl.get)
    app.post('/api/gears', gearCtrl.upsert)


}
