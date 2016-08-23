'use strict';

eventsApp.controller('EventController',
  function EventController($scope) {

    $scope.event = {
      name: 'Angular Boot Camp',
      date: '8/30/2016',
      time: '10:30 am'
    }
  }
);
