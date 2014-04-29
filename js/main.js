require.config({
    paths: {
        "jquery": "https://code.jquery.com/jquery-2.1.0.min",
        "bootstrap3": "http://netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min",
        "angular": "http://ajax.googleapis.com/ajax/libs/angularjs/1.2.14/angular"
    },
    shim: {
        "angular": {
            exports: "angular"
        },
        "bootstrap3": {
            deps: ["jquery"]
        }
    }
});

define([
    "jquery", "bootstrap3", "angular", "app"
], function ($, bootstrap3, angular, app) {
    "use strict";
    $(document).ready(function () {
        angular.bootstrap(document, ["OffCanvasSample"]);
    });
});
