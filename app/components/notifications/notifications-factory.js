'use strict';

angular.module('myApp.notifications')

.factory('notificationsFactory', ['$http', function($http) {
  var getSeverityColor = function(severity){
    switch (severity) {
      case 'error':
          return 'red';
      case 'warning':
          return 'orange';
      case 'success':
          return 'green';
    }
  }
  return $http.get('json/notifications.json').then(function(res){
    var messages = res.data.messages;
    var messagesObj = {};
    messages.forEach(function(obj){
      if (messagesObj.hasOwnProperty(obj.message)){
        messagesObj[obj.message].aggregatedCount += obj.aggregatedCount;
      } else {
        messagesObj[obj.message] = obj;
      }
      messagesObj[obj.message].severityColor =  getSeverityColor(obj.severity);
    })
    return Object.keys(messagesObj).map(function (key) {return messagesObj[key]});
  });
}]);
