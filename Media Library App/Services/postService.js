mainModule
 .factory('postService', function ($http, $q) {
    function postMedia(data, config) {
      console.log("Hunter");
      var def = $q.defer();
       $http.post("http://localhost:3000/media/", data, config)
            .success(function (data, status, headers, config) {
              def.resolve(data);
          })
            .error(function (data, status, headers, config) {
              def.reject(data);
          });

          return def.promise;
    }
    return {
      postMedia: postMedia
    };
  });
 