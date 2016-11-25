linkups_app.controller('DeleteDMZInfoCtrl', 
    function($scope, DMZData, $location, $routeParams){
        
        $scope.dmz = DMZData.getById($routeParams.id);
        

        $scope.delete = function(){
            DMZData.deleteDMZinfo($routeParams.id);
        }
});