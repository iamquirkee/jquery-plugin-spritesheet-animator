/***
 *                  __                                          __  __    _                __
 *      ____ ______/ /__   ____ ___  ___     ____ _____  __  __/ /_/ /_  (_)___  ____ _   / /
 *     / __ `/ ___/ //_/  / __ `__ \/ _ \   / __ `/ __ \/ / / / __/ __ \/ / __ \/ __ `/  / /
 *    / /_/ (__  ) ,<    / / / / / /  __/  / /_/ / / / / /_/ / /_/ / / / / / / / /_/ /  /_/
 *    \__,_/____/_/|_|  /_/ /_/ /_/\___/   \__,_/_/ /_/\__, /\__/_/ /_/_/_/ /_/\__, /  (_)
 *                                                    /____/                  /____/
 *
 *  Website: http://quirkee.sg
 *  Codepen: http://codepen.io/iamquirkee
 *  Github: https://github.com/iamquirkee
 *  Email : iam@quirkee.sg
 *
 *  I'm Kenneth, an Interaction developer based in Singapore.
 *  Feel free to ask me anything or give leave me feedback :D
 *
 */
(function ($) {

    "use strict";

    $.fn.iaqSprite = function (options) {

        var settings = $.extend({}, $.fn.hilight.defaultSettings, options);

        if (settings.debug) {
            debugConsole("initializing...");
        }

        // return object
        return this;

    };

    // settings
    $.fn.iaqSprite.defaultSettings = {
        debug: "false",
        type: "single" // Single || Double
    };

    function debugConsole(str) {
        window.console.log("iaqSpriteAnimation :: " + str);
    }

}(jQuery));