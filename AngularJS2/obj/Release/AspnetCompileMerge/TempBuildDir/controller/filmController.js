var f = app.controller("filmController", function ($scope, $http, stateService) {

    $scope.showDiv = stateService.film;
    $scope.loadComplete = false; 
    $scope.showFilter = false;
    $scope.fetchFilms = function () {
        $scope.loadComplete = true;
          var films = [];
        var mybody = angular.element(document).find("body");
        mybody.addClass("waiting");
 
        $http.get("http://localhost/FilmsLibrary/api/Films").
            success(function (data) {
                films = JSON.parse(data);
               // console.log(films);
                $scope.films = JSON.parse(films);
                mybody.removeClass("waiting");
                $scope.loadComplete = false;
                $scope.showFilter = true;
            }).error(function (error)
        {
                console.log(error);
                mybody.removeClass("waiting");
                $scope.loadComplete = false;
                $scope.showFilter = false;
        });
       
    };
});