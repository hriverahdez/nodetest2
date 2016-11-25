linkups_app.controller('StatsCtrl', function($scope, InstData){
    
    $scope.up = 0;
    $scope.down = 0;
    $scope.nodo = 0;
    $scope.pol = 0;
    $scope.hosp = 0;
    $scope.dms = 0;
    $scope.cg = 0;
    $scope.bs = 0;
    $scope.cmhe = 0;
    $scope.filial = 0;
    $scope.other = 0;
    
    
    $scope.institutions = InstData.getAllInstitutionsDeferred().then(function(inst){
        
        angular.forEach(inst,function(item){
            if (item.state == "UP")
                $scope.up++;
            else
                $scope.down++;
            switch(item.type){
                case "NODO": {$scope.nodo++; }
                    break;
                case "policlinico": {$scope.pol++; }
                    break;
                case "hospital": {$scope.hosp++; }
                    break;
                case "dir_salud": {$scope.dms++; }
                    break;
                case "c_genetica": {$scope.cg++; }
                    break;
                case "b_sangre": {$scope.bs++; }
                    break;
                case "c_higiene": {$scope.cmhe++; }
                    break;
                case "filial": {$scope.filial++; }
                    break;
                case "other": {$scope.other++; }
                    break;
            }
            
        });    
        
    });
    
    
});
                    
                    