(function ($) {

    "use strict";

    $.fn.iaqSprite = function (options) {

        var settings = $.extend({}, $.fn.iaqSprite.defaultSettings, options);

        // console log
        if (settings.debug) { debugConsole("initializing..."); }

        // return object
        return this;

    };

    // settings
    $.fn.iaqSprite.defaultSettings = {
        debug: false,
        type: "single", // Single || Double
        frames: 0,
        loop: false,
        repeat: false
    };

    function debugConsole(str) {
        window.console.log("iaqSpriteAnimation :: " + str);
    }

}(jQuery));