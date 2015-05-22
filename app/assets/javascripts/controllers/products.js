function ProductsCtrl($scope, Products) {
    "use strict";
    $scope.products = Products.index();
    $scope.Brandfilters = { };

  $scope.lower_price = 100;
  $scope.upper_price = 500;
  
  $scope.priceRange = function(products) {
    return (products['cost'] >= $scope.lower_price && products['cost'] <= $scope.upper_price);
  };

}

function ProductShowCtrl($scope, $routeParams, Product) {"use strict";
    $scope.product = Product.show({
        product_id : $routeParams.product_id
    });    
}

