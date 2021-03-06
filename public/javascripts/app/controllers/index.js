PulseApp.controller('IndexCtrl', ['$scope', '$rootScope', '$announcementService', function($scope, $rootScope, $announcementService){
	
	$rootScope.activeView='Announcements';

	$scope.announcements = $announcementService.announcements;

	$scope.getFreshness = function(message){
		var now = new Date();
		var fifteenMinutesAgo = new Date();
		fifteenMinutesAgo.setTime(now.getTime() +(-15*60*1000));
		
		var anHourAgo = new Date();
		anHourAgo.setTime(now.getTime() +(-60*60*1000));

		var messageTime = new Date(Date.parse(message.time));
		if(messageTime> fifteenMinutesAgo)
			return 'fresh';
		else if(messageTime>anHourAgo)
			return 'old';
		else
			return 'stale';
	};


	var lastMsg = null;
	$scope.newMessage = '';
	$scope.postNewMessage = function(){
		$announcementService.add($scope.newMessage);
		$scope.newMessage='';
	};

}]);