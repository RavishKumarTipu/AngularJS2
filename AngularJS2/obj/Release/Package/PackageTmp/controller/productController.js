var c = app.controller("productController", function ($scope, stateService) {
    $scope.showDiv = stateService.product;
    $scope.product = {
        name: "laptop",
        price: 345300,
        model: "lenovo"

    };
});