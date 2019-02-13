"use strict";

const gulp = require("gulp");
const gulpLoadPlugins = require("gulp-load-plugins");
const plugins = gulpLoadPlugins();
const settings = require("./src/config/settings");
const {addTask, addMultiTask} = require('./src/config/gulp-helpers/task-functions')(gulp, plugins, settings);

addTask("compile:js", "compile-js");
addTask("compile:scss", "compile-scss");

addMultiTask("compile:all", ["compile:js", "compile:scss"]);

gulp.task('watch:all', function() {
    gulp.watch([settings.paths.files.scss], gulp.parallel('compile:scss'));
    gulp.watch([settings.paths.files.js], gulp.parallel('compile:js'));
});
