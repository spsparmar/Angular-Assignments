mainModule
 .controller("mediaListController", function($scope, $window, getService, postService, deleteService, putService) {
    $scope.mediaData; $scope.msg = "";
    $scope.title; $scope.category; $scope.artists; $scope.type; $scope.rating;

    $scope.getList = function() {
      getService
       .getMedia()
       .then(function(media) {     
          $scope.mediaData = media.medias;
        }, function(status) {
              $scope.msg = "Unable to complete request, try after some time! response status: " + status;
              console.log('users get request failed.');
           });
    };

   $scope.addMode = false;  $scope.addModeButtonName = "Add Media";
    $scope.addModefn = function() {
      $scope.addMode = ! $scope.addMode;
      if($scope.addMode) {
        $scope.addModeButtonName = "Hide Add Media Form";
      }
      else {
        $scope.addModeButtonName = "Add Media";
      }
    };

    $scope.postList = function() {
      var data = {
        title: $scope.title,
        category: $scope.category,
        artists: $scope.artists,
        type: $scope.type,
        rating: $scope.rating
      };
      console.log(data);
      var config = {
        headers : {
          'Content-Type': 'application/json'
        }
      }; 
      postService
       .postMedia(data, config)
       .then(function (data, status, headers, config) {
          $scope.mediaData.push(data);
          $window.alert("Media Added Succesfully :"+ data.title);
        }, function(data, status, headers, config) {
              $window.alert("Unable to add Media");
            });
    };

    $scope.deleteMediabyId = function(mediaId) {
      var msg = $window.confirm("Are You Sure!");
      if (msg === true) {
        deleteService
         .deleteMedia(mediaId)
         .then(function () {

          for(var i=0; i<$scope.mediaData.length; i++) {
            if($scope.mediaData[i]._id === mediaId) {
              $scope.mediaData.splice(i, 1);
              break;
            }
          }
            $window.alert("Media Deleted Succesfully :");
          }, function() {
                $window.alert("Unable to delete Media");
              });
      }
    };

    $scope.currentData; $scope.editMode;
    $scope.editMedia = function(media) {
      $scope.editMode = true;
      $scope.currentData = angular.copy(media);
    };

    $scope.editModeCancel = function() {
      $scope.editMode = false;
    };

    $scope.updateMedia = function(media) {
      $scope.editMode = false;
      var data = {
        title: media.title,
        category: media.category,
        artists: media.artists[0],
        type: media.type,
        rating: media.rating
      };
      var config = {
        headers : {
          'Content-Type': 'application/json'
        }
      };

      var mediaId = (media._id).toString();
      putService
       .putMedia(mediaId, data, config)
       .then(function (data, status, headers, config) {

        for(var i=0; i < $scope.mediaData.length; i++) {
          if($scope.mediaData[i]._id === data._id) {
            $scope.mediaData[i] = data;
            break;
          }
        }
          $window.alert("Media Updated Succesfully :"+ data.title);
          }, function(data, status, headers, config) {
                $window.alert("Unable to Update Media");
              });
    };

  });
