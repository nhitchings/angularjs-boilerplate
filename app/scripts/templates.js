angular.module('templates', []).run(['$templateCache', function($templateCache) {$templateCache.put('about.html','<div class="page-header">\n  <h1>About</h1>\n</div>\n<div class="row">\n  <div class="col-sm-4 col-md-4 col-lg-4">\n    <h3>About 1</h3>\n    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>\n    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>\n  </div>\n  <div class="col-sm-4 col-md-4 col-lg-4">\n    <h3>About 2</h3>\n    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>\n    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>\n  </div>\n  <div class="col-sm-4 col-md-4 col-lg-4">\n    <h3>About 3</h3>\n    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>\n    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>\n  </div>\n</div>\n<div class="row">\n  <div class="col-lg-2">\n    <button type="button" class="btn btn-success btn-sm" ng-click="routeChange(\'index\')">Index</button>\n  </div>\n  <div class="col-lg-2">\n    <button type="button" class="btn btn-success btn-sm" ng-click="routeToIndex()">Index Manually</button>\n  </div>\n</div>\n');
$templateCache.put('main.html','<div class="jumbotron">\r\n  <h1>Welcome!</h1>\r\n  <p>This is an AngularJS 1.x template written in ES5.</p>\r\n</div>\r\n<div class="row">\r\n  <div class="col-sm-4 col-md-4 col-lg-4">\r\n    <h3>Main 1</h3>\r\n    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>\r\n    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>\r\n  </div>\r\n  <div class="col-sm-4 col-md-4 col-lg-4">\r\n    <h3>Main 2</h3>\r\n    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>\r\n    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>\r\n  </div>\r\n  <div class="col-sm-4 col-md-4 col-lg-4">\r\n    <h3>Main 3</h3>\r\n    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>\r\n    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>\r\n  </div>\r\n</div>\r\n<div class="row">\r\n  <div class="col-lg-2">\r\n    <button type="button" class="btn btn-success btn-sm" ng-click="routeToAbout()">About</button>\r\n  </div>\r\n</div>\r\n');}]);