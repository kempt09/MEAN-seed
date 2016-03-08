app.controller('index', ['$scope', function ($scope) {
    'use strict';
    $scope.greeting = 'Hello Index';
}]);

app.controller('data', ['$scope', function ($scope) {
    'use strict';
    $scope.greeting = 'Hello Data';
}]);