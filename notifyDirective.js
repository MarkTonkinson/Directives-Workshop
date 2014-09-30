var app = angular.module('myDirectives');

app.directive('notify', function(){
	return {
		restrict: 'A',
		
		scope: {
			title: "=",
			body: '=',
			icon: '='
			},
		
		link: function(scope, elem, attr){
			//console.log(scope);
			//console.log(elem);
			//console.log(attr);
			var Notification = window.Notification || window.mozNotification || window.webkitNotification;
			Notification.requestPermission(function (permission) {
				console.log(permission);
			});
			elem.click(function(){
				var appearToUser = new Notification(scope.title, {body: scope.body, icon: scope.icon});//this format is specific to notifications
				
			});

		}

	}
})