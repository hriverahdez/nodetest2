linkups_app.controller('EditInstCtrl', 
    function($scope, InstData, $location, $routeParams){	
        var def = "<NO DISPONIBLE>";
        
        $scope.institution = InstData.getById($routeParams.id);
        

        $scope.save = function(){
            if ($scope.institution.last_report == null || $scope.institution.last_report == "")
                $scope.institution.last_report = def;
                InstData.updateInst($scope.institution);
        }
        
        $scope.cancel = function(){
            $location.path('/');
        }
    });