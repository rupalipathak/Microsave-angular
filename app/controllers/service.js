Microsave
    .controller("serviceCtrl", function ($scope, $http) {

        $http.get("app/service.json").then(function (response) {

            $scope.service = response.data;
        });
    });
