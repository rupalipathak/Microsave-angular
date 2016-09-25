Microsave.controller("announcementCtrl",function($scope,$http){

    $http.get("app/announcement.json").then(function(response){

        $scope.data=response.data;
        //console.log($scope.data);


    });

});
