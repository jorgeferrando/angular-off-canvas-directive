define(["angular", "off-canvas-directive"], function (angular, offCanvasDirective) {
    "use strict";
    return angular.module('OffCanvasSample', [])
        .directive("offCanvas", offCanvasDirective);
});
