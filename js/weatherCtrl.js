var app = angular.module('userweather', []);

app.controller('weatherController', function($scope, $http) {
    $http.get("http://api.openweathermap.org/data/2.5/weather?q=Leeds,uk")
    .success(function(data) {$scope.items = data});

});