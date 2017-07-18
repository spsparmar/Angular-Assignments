mainModule
  .controller("postListController", function($scope, $window, postService) {
    $scope.postList = function() {
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
   postService.postMedia(data, config)
          .then(function (data, status, headers, config) {
            $window.alert("Media Added Succesfully :"+ data.title);
           }, function(data, status, headers, config) {
              $window.alert("Unable to add Media");
              });
    };
  });
