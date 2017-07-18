mainModule
 .factory('getByIdService', function ($http, $q) {
   var service = {
      media: {},
      getMediaById: getMediaById
    };
    function getMediaById(mediaId) {
      var def = $q.defer();
      var _mediaId  = (mediaId).toString();
      $http.get("http://localhost:3000/media/"+ _mediaId)
           .success(function (data) {
              service.media = data;
              def.resolve(response.status);
          })
            .error(function (response) {
              def.reject(response.status);
          });

          return def.promise;
    }
    return service;
  });
