angular.module('GearShare')
    .factory('gearFactory', gearFactory)

gearFactory.$inject = ['$http'];

function gearFactory($http){
    function getGear () {
        return $http.get('/api/gears')
    }
    function createGear (gearData) {
        return $http.post('/api/gears', gearData)
    }

    // This return value is exactly what we gain access to in the controller
    return {
        getGear : getGear,
        createGear: createGear
    }
}
