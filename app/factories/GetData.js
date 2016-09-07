'use strict';

app.factory('GetData', function($http, $q){

  let getNashData = ()=> {
    return $q((resolve, reject)=> {
        $http.get('https://data.nashville.gov/resource/8zc7-2afq.json')
        .success((response)=> {
          resolve(response);
        })
      .error((error) => {
          reject(error);
        });
      });
    };

  return getNashData;
});
