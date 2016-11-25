linkups_app.factory('InstData', function($resource, $location, $q){
    return {
        getAllInstitutions: function() {
            var IResource = $resource('/api/institutions/');
            return IResource.query();
        },
        getById: function(_id) {
            var InstitutionRes = $resource('/api/institutions/:id');            
            return InstitutionRes.get({ id: _id });
        },
        saveInst: function(inst){
            var InstitutionRes = $resource('/api/institutions');
            InstitutionRes.save(inst);
            $location.path('/');
        },
        updateInst: function(inst){
            var InstitutionRes = $resource('/api/institutions/:id', { id: '@_id' }, {
                update: { method: 'PUT' }
            });
            InstitutionRes.update(inst);
            $location.path('/');
        },
        deleteInst: function(_id){
            var InstitutionRes = $resource('/api/institutions/:id');
            InstitutionRes.delete({id: _id});
            $location.path('/')
        }, 
        getAllInstitutionsDeferred: function(){
            var IResource = $resource('/api/institutions/');
            var deferred = $q.defer();
            IResource.query(
                function(inst) {
                    deferred.resolve(inst);                    
                },
                function(inst) {
                    deferred.reject(inst);
                }
                
            );
            return deferred.promise;
        }
        
    }
});