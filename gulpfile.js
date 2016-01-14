/***
 *                          __
 *        ____  ____ ______/ /______ _____ ____  _____
 *       / __ \/ __ `/ ___/ //_/ __ `/ __ `/ _ \/ ___/
 *      / /_/ / /_/ / /__/ ,< / /_/ / /_/ /  __(__  )
 *     / .___/\__,_/\___/_/|_|\__,_/\__, /\___/____/
 *    /_/                          /____/
 */

// Core
var gulp = require('gulp');

// Utilities
var header = require('gulp-header');
var rename = require("gulp-rename");
var plumber = require('gulp-plumber');
var stylish = require('jshint-stylish');

var packageJSON  = require('./package');
var jshintConfig = packageJSON.jshintConfig;
    jshintConfig.lookup = false;

// JS
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');


/***
 *        __
 *       / /_  ____ _____  ____  ___  _____
 *      / __ \/ __ `/ __ \/ __ \/ _ \/ ___/
 *     / /_/ / /_/ / / / / / / /  __/ /
 *    /_.___/\__,_/_/ /_/_/ /_/\___/_/
 *
 */

var banner =

    '/***\n' +
    ' *                  __                                          __  __    _                __\n' +
    ' *      ____ ______/ /__   ____ ___  ___     ____ _____  __  __/ /_/ /_  (_)___  ____ _   / /\n' +
    ' *     / __ `/ ___/ //_/  / __ `__ \\/ _ \\   / __ `/ __ \\/ / / / __/ __ \\/ / __ \\/ __ `/  / /\n' +
    ' *    / /_/ (__  ) ,<    / / / / / /  __/  / /_/ / / / / /_/ / /_/ / / / / / / / /_/ /  /_/\n' +
    ' *    \\__,_/____/_/|_|  /_/ /_/ /_/\\___/   \\__,_/_/ /_/\\__, /\\__/_/ /_/_/_/ /_/\\__, /  (_)\n' +
    ' *                                                    /____/                  /____/\n' +
    ' *\n' +
    ' *  Website: http://quirkee.sg\n' +
    ' *  Codepen: http://codepen.io/iamquirkee\n' +
    ' *  Github: https://github.com/iamquirkee\n' +
    ' *  Email : iam@quirkee.sg\n' +
    ' *\n' +
    ' *  I\'m Kenneth, an Interaction developer based in Singapore.\n' +
    ' *  Feel free to ask me anything or give leave me feedback :D\n' +
    ' *\n' +
    ' */\n';

/***
 *        __          _ __    __   __             __
 *       / /_  __  __(_) /___/ /  / /_____ ______/ /_______
 *      / __ \/ / / / / / __  /  / __/ __ `/ ___/ //_/ ___/
 *     / /_/ / /_/ / / / /_/ /  / /_/ /_/ (__  ) ,< (__  )
 *    /_.___/\__,_/_/_/\__,_/   \__/\__,_/____/_/|_/____/
 *
 */

gulp.task('default', function () {

    gulp.src('src/**/*')
        .pipe(plumber(function(){
            console.log(' -- An Error Occurred -- ');
        }))
        .pipe(jshint(jshintConfig))
        .pipe(jshint.reporter(stylish))
        .pipe(header(banner))
        .pipe(gulp.dest('dist'))
        .pipe(uglify({
            mangle: true
        }))
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(header(banner))
        .pipe(gulp.dest('dist'))

});