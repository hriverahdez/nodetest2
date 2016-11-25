linkups_app.controller('DeleteInstCtrl', 
    function($scope, InstData, $location, $routeParams){
        

        
        $scope.institution = InstData.getById($routeParams.id);
        

        $scope.delete = function(){
            InstData.deleteInst($routeParams.id);
        }
    });