mainModule
  .controller("putListController", function($scope, $window, putService) {
    $scope.msg = "";
    $scope.editMedia = function(media) {
      var data = {
        title: $scope.title,
        category: $scope.category,
        artists: $scope.artists,
        type: $scope.type,
        rating: $scope.rating
      };
    var config = {
      headers : {
        'Content-Type': 'application/json'
      }
    }; 
   putService.putMedia(mediaId, data, config)
          .then(function (data, status, headers, config) {
            $window.alert("Media Updated Succesfully :"+ data.title);
           }, function(data, status, headers, config) {
              $window.alert("Unable to Update Media");
              });
    };
  });
