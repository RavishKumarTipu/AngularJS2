var ad = angular.module('adApp', []);

var cad = ad.controller("advtController", function ($scope, $interval) {

    $scope.advtString1 = "";
    $scope.advtString2 = "";

    var i = 0;
    $interval(function () {

        i = 1 - i;
        if (i == 0) {
            $scope.advtString1 = "include/advertisement1.html";
            $scope.advtString2 = "include/advertisement2.html";
        }
        else if (i == 1) {
            $scope.advtString1 = "include/advertisement2.html";
            $scope.advtString2 = "include/advertisement1.html";
        }
    },1);

});