var App = angular.module('hola-embular', ['templates', 'embular-object']);

var Customer = Ember.Object.extend({
    fullName: function() {
        return [this.get('name'), this.get('lastName')].join(' ');
    }.property('name', 'lastName')
});

function CustomerDetailsController($scope) {
    var customer = Customer.create({name: 'Íñigo', lastName: 'Montoya'});
    $scope.customer = customer;
}

App.controller('CustomerDetailsController', ['$scope', CustomerDetailsController]);
