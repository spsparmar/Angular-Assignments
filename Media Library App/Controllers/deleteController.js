mainModule
  .controller("deleteController", function($scope, $window, deleteService) {
    $scope.msg = "";
    $scope.deleteMediabyId = function(mediaId) {
   deleteService.deleteMedia(mediaId)
          .then(function () {
            $window.alert("Media Deleted Succesfully :");
           }, function() {
              $window.alert("Unable to delete Media");
              });
    };
  });
