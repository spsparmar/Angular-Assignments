mainModule
 .factory('putService', function ($http, $q) {
    function putMedia(mediaId, data, config) {
      var def = $q.defer();
       $http.put("http://localhost:3000/media/"+mediaId, data, config)
            .success(function (data, status, headers, config) {
              def.resolve(data);
          })
            .error(function (data, status, headers, config) {
              def.reject(data);
          });

          return def.promise;
    }
    return {
      putMedia: putMedia
    };
  });
