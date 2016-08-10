angular.module('GearShare')
    .controller('gearController', gearController)

gearController.$inject = ['gearFactory']

function gearController (gearFactory){
    var gCtrl = this;
    gCtrl.newGear ={};
    gCtrl.retrieveGear = function(){
        gearFactory
            .getGear()
            .then(function(response){
                gCtrl.gearList = response.data;
            })
    }
    gCtrl.retrieveGear();
    gCtrl.makeSomeGear = function () {
        gearFactory
            .createGear(gCtrl.newGear)
            .then(function(response){
                console.log(response);
                gCtrl.retrieveGear();
            });
    }
}
