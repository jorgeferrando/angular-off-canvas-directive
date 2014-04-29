define(["angular"], function (angular) {
    "use strict";

    function offCanvas() {
        return {
            restrict: 'A',
            replace: true,
            templateUrl: "partials/off-canvas-directive.html",
            link: function (scope, element, attrs) {
                console.log(element);
                element.on("click", function () {
                    $("." + attrs.toggleClass).toggleClass("active");
                });
            }
        };
    }

    return [offCanvas];
});