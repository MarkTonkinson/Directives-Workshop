var app = angular.module('myDirectives');

app.directive('pending', function($q){ //does this have to be in the myDirective.js to be used in anotehr app?
	return {
		restrict: 'A',
		
		scope: {
			request: '&' //is request a special word, or a variable we make up- in html you call it by pending request:
		},
		link: function(scope, elem, attrs){ //scope, elem, attrs, cntrl is the order the information comes in, but if you only included one param it would only get scope. Names don't matter, but the order and the inclusion does
			var spinner = angular.element('<img src="ajax-loader.gif">');// angular.element turns it into an element
			elem.after(spinner);// appends to element which is the button that hides
			spinner.hide();//if we hadn't changed it to an element it wouldn't work
			elem.bind('click', function(event){
				elem.hide(); //where can I tell it to hide?
				spinner.show();//because it is now an element it will take what it didn't do before
				scope.request().then(function(data){
					elem.show();
					spinner.hide();
				})
			})
			/*var getData = function(){
				var deferred = $q.defer();
				deferred.resolve(scope.request())
				return deffered.promise
				this is an alternative*/

		},
		//template: '<img src="ajax-loader.gif">',
	}
})