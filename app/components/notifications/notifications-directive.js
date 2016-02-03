'use strict';

angular.module('myApp.notifications')

.directive('notifications', ['notificationsFactory', function(notificationsFactory) {
  return {
    restrict: 'E',
    transclude: true,
    scope: {},
    templateUrl: 'components/notifications/notifications-view.html',
    link: function (scope) {
      notificationsFactory.then(function(messages){
        scope.messages = messages;
        console.log (messages);
      })
      scope.filters = {};
    }
  };
}]);
