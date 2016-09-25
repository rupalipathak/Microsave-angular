Microsave
    .directive("sectorWork", function () {

        return {

            restrict: 'E',
            replace: true,
            scope: {
                content_text: "@contentText",
                content_image: '@contentImage'
            },
            templateUrl: "app/views/templates/sector-work.html"

        };

    });