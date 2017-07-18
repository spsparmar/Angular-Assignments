mainModule
 .factory('deleteService', function ($http, $q) {
    function deleteMedia(mediaId) {
      var def = $q.defer();
      var _mediaId  = (mediaId).toString();
      $http.delete("http://localhost:3000/media/"+ _mediaId)
            .success(function (response) {
              def.resolve(response.status);
          })
            .error(function (response) {
              def.reject(response.status);
          });

          return def.promise;
    }
    return {
      deleteMedia: deleteMedia
    };
  });
