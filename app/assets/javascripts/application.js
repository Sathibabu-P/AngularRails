//= require jquery
//= require angular
//= require ui-bootstrap-tpls-0.2.0
//= require bootstrap-sprockets
//= require angular-resource
//= require services/moviesService
//= require controllers/movies
//= require services/productsService
//= require controllers/products
//= require angular-slider

angular.module('AngularRails', ['moviesService','productsService','uiSlider', 'ui.bootstrap'])
  .config(['$httpProvider', function(provider){
    provider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
  }])
  .config(['$routeProvider', function(router){
    router
      .when('/movies', {templateUrl:'/movies/index.html', controller:MoviesCtrl})
      .when('/movies/add', {templateUrl:'/movies/add.html', controller: MovieAddCtrl})
      .when('/movies/:movie_id', {templateUrl:'/movies/show.html', controller:MovieShowCtrl})
      .when('/movies/:movie_id/edit', {templateUrl:'/movies/edit.html', controller: MovieEditCtrl})
      .when('/products', {templateUrl:'/products/index.html', controller:ProductsCtrl})
      .when('/products/:product_id', {templateUrl:'/products/show.html', controller:ProductShowCtrl})
      .otherwise({redirectTo: '/products'});
  }])
  .filter('unique', function() {
   return function(collection, keyname) {
      var output = [], 
          keys = [];

      angular.forEach(collection, function(item) {
          var key = item[keyname];
          if(keys.indexOf(key) === -1) {
              keys.push(key);
              output.push(item);
          }
      });
      return output;
   };
});


