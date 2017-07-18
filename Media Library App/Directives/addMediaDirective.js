mainModule.directive('addMediaDirective', function() {
  return {
    restrict: 'AE',
    templateUrl: 'Templates/addMedia.html',
    replace: true,
    scope: {
      title: '=title',
      category: '=category',
      artists: '=artists',
      type: '=type',
      rating: '=rating',
      post: '&post',
      toggle: '&toggle'
    }
  };
});