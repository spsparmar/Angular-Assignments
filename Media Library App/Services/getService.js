mainModule
 .factory('getService',function ($http, $q, $timeout) {
    var service = {
      media: {},
      getMedia: getMedia
    };
    var max = 3,counter = 1;
    function getMedia() {
      var def = $q.defer();
      $http.get("http://localhost:3000/media")
           .success(function(data) {
              service.media = data;
              def.resolve(data);
            })
           .error(function(status) {
              if (counter < max) {
                console.log(counter);
                $timeout(getMedia, 500);
                counter++;
              } else {
                def.reject(status);
              }
            });
      return def.promise;
    };
    return service;
});
