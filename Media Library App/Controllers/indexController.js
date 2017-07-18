mainModule
 .controller("indexController", function($scope, $location) {
    $scope.listMediafn = function() {
      $location.path('/listMedia');
    }
    $scope.homePage = function() {
      $location.path('/home');
    }

    $scope.buttonName = "List Media";  $scope.homeMode = true;

    if($location.path() === '/home') {
      $scope.buttonName = "List Media";
    }

    if($location.path() === '/listMedia') {
      $scope.buttonName = "Home";
      $scope.homeMode = false;
    }

    $scope.toggleFn = function() {
      if($scope.homeMode) {
        $scope.listMediafn();
        $scope.buttonName = "Home";
      }
      else {
        $scope.homePage();
        $scope.buttonName = "List Media";
      }
      $scope.homeMode = !$scope.homeMode;
    }
  });