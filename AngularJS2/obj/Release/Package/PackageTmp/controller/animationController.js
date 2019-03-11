var a = angular.module('animApp', ['ngAnimate']);

var c = a.controller("animationController", function ($scope, $interval) {

    $scope.number = 0;

    $interval(function () {
        $scope.number++;
    }, 1000);

    var colors = ['red', 'green', 'blue', 'yellow', 'orange', 'blueviolet'];
    $scope.colorClass = function (number) {
        return (colors[number % colors.length]);
    };
});