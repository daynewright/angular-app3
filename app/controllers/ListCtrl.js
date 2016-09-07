'use strict';

app.controller('ListCtrl', function($scope, getData){

getData()
 .then(function(data){
   $scope.resources = data;
   console.log($scope.resources);
});

});
