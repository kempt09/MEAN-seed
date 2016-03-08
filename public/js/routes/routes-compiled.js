app.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: '/views/index.html',
        controller: 'index'
    }).when('/data', {
        templateUrl: '/views/data.html',
        controller: 'data'
    }).otherwise({
        redirectTo: '/'
    });
});

//# sourceMappingURL=routes-compiled.js.map