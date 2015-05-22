angular.module('productsService', ['ngResource'])
  .factory('Products', function($resource) {
    return $resource('products.json', {}, {
      index: { method: 'GET', isArray: true},
      create: { method: 'POST' }
    });
  })
  .factory('Product', function($resource){
    return $resource('products/:product_id.json', {}, {
      show: { method: 'GET' },
      update: { method: 'PUT' },
      destroy: { method: 'DELETE' }
    });
  });
