Microsave

.directive("announcement",function(){

        return {

            restrict : 'E',
            replace:true,
            scope:{
                announcement_text:'@announcementText',
                announcement_by:"@announcementBy",
                announcement_date:"@announcementDate",




            },
            templateUrl: "app/views/templates/announcement.html"

        };


    });