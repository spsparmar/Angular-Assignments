mainModule.directive('detailDirective', function() {
  return {
    restrict: 'AE',
    templateUrl: 'Templates/detailMedia.html',
    replace: true,
    scope: {
      m: '=m',
      dm: '&dm',
      em: '&em',
    }
  }
});
