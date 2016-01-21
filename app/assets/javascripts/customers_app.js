var app = angular.module('customers', []);

var CustomerSearchController = function($scope, $http){
  var page = 0;

  $scope.search = function(searchTerm){
    $http.get("/customers.json",
      {"params": {"keywords": searchTerm, "page": page}}
    ).then(function(response) {
        $scope.customers = response.data;
      }, function(response) {
        alert("There was a problem: " + response.statusText);
      }
    );
  }

  $scope.previousPage = function() {
    if (page > 0) {
      page = page - 1;
      $scope.search($scope.keywords);
    }
  }

  $scope.nextPage = function() {
    page = page + 1;
    $scope.search($scope.keywords);
  }
}

app.controller("CustomerSearchController", ["$scope", "$http", CustomerSearchController]);
