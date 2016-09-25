Microsave
    .directive("frontCover",function(){

        return {

            restrict : 'E',
            replace:true,
            scope:{
                front_image:'@frontImage',
                front_text:"@frontText"

            },
            templateUrl: "app/views/templates/front-cover.html"

        };

    });

