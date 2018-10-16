var app = angular.module('myApp', []);
app.controller('myCtrl',
    function($scope, $http) {
        var apiKey = "5bc65c3f863c5056eefc046d1bad46f1cb5dac528f1e8";

        $scope.onup = function() {
            $scope.websiteFinePrint = "";
            console.log($scope.url);
            var url = "https://api.linkpreview.net/?key=" + apiKey + "&q=" + $scope.url;

            $http.get(url).then(function(response) {
                    console.log(response);

                    $scope.websiteTitle = response.data.title;
                    $scope.websiteDescription = response.data.description;
                    if (response.data.image != "") {
                        $scope.websitePreview = response.data.image;
                    } else {
                        $scope.websitePreview = "Stick.jpg";
                    }
                    $scope.websiteURL = response.data.url;
                })
                .catch((err => {
                    console.log("Woops");
                    $scope.websiteName = "Dog.jpg";
                    
                    $scope.websiteTitle = "You've summoned the wrath of the admins";
                    $scope.websiteDescription = "This website really doesn't want you to see what's inside";
                    $scope.websitePreview = "Dog.jpg";
                    $scope.websiteURL = "https://www.youtube.com/watch?v=8uXrgv1xIFk";
                    $scope.websiteFinePrint = "(Or you just put in a weird address)";
                }));
            console.log("in onup");
        };



    });
