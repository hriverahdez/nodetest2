linkups_app.controller('DMZCtrl', function($scope, DMZData, $location, $route){
    var showAddPoolRow = true;
    
    $scope.showBtnAdd = true;
    $scope.showBtnUpd = false;
    
    
    $scope.dmz = DMZData.getAllDMZInfo();
    
    $scope.save = function(form){   
        
        //window.alert("i'm here dude");
        DMZData.saveDMZinfo($scope.formdmz);
        $route.reload();
        //refresh window here or look for alternative
        
    };
    
    $scope.update = function(){
        DMZData.updateDMZinfo($scope.formdmz);
    }
    
    $scope.editDMZInfo = function(id) {
        toggleBtns();
        $scope.formdmz = DMZData.getById(id);  
    }
    
    toggleBtns = function(){
        $scope.showBtnAdd = !$scope.showBtnAdd;
        $scope.showBtnUpd = !$scope.showBtnUpd;        
    }

    
    
    
});