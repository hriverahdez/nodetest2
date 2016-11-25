linkups_app.controller('HomeCtrl', function($scope, $resource, InstData, ModalService, $timeout){
        
        $scope.dataLoaded = false;      // Data loading flag to show loading spinner
    
        $scope.showInfoForm = false;        
    
        $scope.search_query = "";
        
        /* TYPE NAMES MAPPING */ 
        $scope.type_names = {
            NODO: "NODO",
            policlinico: "POL",
            hospital: "HOSP",
            dir_salud: "DS",
            c_genetica: "CGM",
            b_sangre: "BS",
            c_higiene: "CMHE",
            filial: "Filial",
            other: "Otros"
        };
    
        // APPLYING STYLE TO EVEN ROWS
        $scope.evenRow = "even-row"; 
    
        //$scope.institutions = InstData.getAllInstitutions();
        
        InstData.getAllInstitutionsDeferred().then(function(inst){
            $scope.institutions = inst;            
            $scope.dataLoaded = true;
        },function(error){
            //do something
        });
        
    
        // FUNCTION TO SHOW ADDITIONAL INFO FOR SELECTED INSTITUTION
        $scope.showInfo = function(_id){
            
            //event.preventDefault();
            $scope.showInfoForm = true;
            
            //$scope.info = InstData.getById(_id);            
        }
    
    
        
        $scope.showComplex = function(_id) {
            
            ModalService.showModal({
                templateUrl: "partials/more-info.html",
                controller: "MoreInfoCtrl",
                inputs: {
                    inst_id: _id
                }
            }).then(function(modal) {
              modal.element.modal();
              modal.close();
            });

        };
    
     
        
        
        
        
        
    });