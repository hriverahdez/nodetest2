linkups_app.factory('DMZData', function($resource, $location, $q){
    return {
        getAllDMZInfo: function() {
            var IResource = $resource('/api/dmz/');
            return IResource.query();
        },
        getById: function(_id) {
            var DMZRes = $resource('/api/dmz/:id');            
            return DMZRes.get({ id: _id });
        },
        saveDMZinfo: function(dmz){
            var DMZRes = $resource('/api/dmz');
            DMZRes.save(dmz);            
        },
        updateDMZinfo: function(dmz){
            var DMZRes = $resource('/api/dmz/:id', { id: '@_id' }, {
                update: { method: 'PUT' }
            });
            DMZRes.update(dmz);            
        },
        deleteDMZinfo: function(_id){
            var DMZRes = $resource('/api/dmz/:id');
            DMZRes.delete({id: _id});
            $location.path('/dmzmgmt');
        }       
        
    }
});