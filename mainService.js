var app = angular.module('directiveWorkshop');

app.service('mainService', function($http, $q){
	this.getData = function(artist) {
		var deferred = $q.defer();
        return $http({'method': 'JSONP', 'url': 'https://itunes.apple.com/search?term=' + artist + '&callback=JSON_CALLBACK' })
            .then(function (data) {
                deferred.resolve(data);
            });
            return deferred.promise
    };
})