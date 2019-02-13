"use strict";

const gulp = require("gulp");
const gulpLoadPlugins = require("gulp-load-plugins");
const plugins = gulpLoadPlugins();
const settings = require("./src/config/settings");
const {addTask, addMultiTask} = require('./src/config/gulp-helpers/task-functions')(gulp, plugins, settings);

// Basic dev scripts
addTask("compile:js", "compile-js");
addTask("compile:scss", "compile-scss");
addTask('clean:dist', 'clean-dist');

addMultiTask("compile:all", ["compile:js", "compile:scss"]);

// Basic watch tasks
gulp.task('watch:all', function() {
    gulp.watch([settings.paths.files.scss], gulp.parallel('compile:scss'));
    gulp.watch([settings.paths.files.js], gulp.parallel('compile:js'));
});

// Basic release tasks
addMultiTask("release:all", ["clean:dist", "compile:js", "compile:scss"]);
