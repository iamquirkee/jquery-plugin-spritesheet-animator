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
        .pipe(gulp.dest('dist'))
        .pipe(uglify({
            mangle: true
        }))
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(gulp.dest('dist'))

});