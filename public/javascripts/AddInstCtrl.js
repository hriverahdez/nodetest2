linkups_app.controller('AddInstCtrl', 
    function($scope, InstData, $location){
        
        var def = "<NO DISPONIBLE>";
        /* Saving the institution */
        $scope.save = function(form){   
            if (form.$valid){
                if (($scope.institution.type != null && $scope.institution.type != "") && ($scope.institution.state != null && $scope.institution.state != "")){                        
                    if ($scope.institution.last_report == null || $scope.institution.last_report == "")
                        $scope.institution.last_report = def;
                    InstData.saveInst($scope.institution);                    
                }
                else {
                    window.alert("Seleccione el estado tipo de enlace y el tipo de  institución");
                }
                
                
            }
        };
    
        $scope.cancel = function(){
            $location.path('/');
        }
    });