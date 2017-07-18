mainModule
 .controller("getByIdController", function($scope, getByIdService) {
    $scope.mediaDataById; $scope.msg = "";
    $scope.getMediaById = function(mediaId) {
      getByIdService.getMediaById(mediaId)
        .then(function(media) {     
            $scope.mediaDataById = media;
        },function() {
            $scope.msg = "Unable to complete request, try after some time! response status: ";
            console.log('users get request failed.');
        });
    };
  });
