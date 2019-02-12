"use strict";

const gulp = require("gulp");
const gulpLoadPlugins = require('gulp-load-plugins');
const plugins = gulpLoadPlugins();
const settings = require('./src/config/settings');

const addTask = (name, taskFile) => {
    gulp.task(name, require(`./src/config/tasks/${taskFile}`)(gulp, plugins, settings));
}

const addMultiTask = (name, tasks) => {
    gulp.task(name, gulp.series(tasks));
}

addTask('compile:js', 'compile-js');
addTask('compile:scss', 'compile-scss');
addMultiTask('compile:all', ['compile:js', 'compile:scss']);

// gulp.task('compile:js', require('./src/config/tasks/compile-js')(gulp, plugins, settings));
// gulp.task('compile:scss', require('./src/config/tasks/compile-scss')(gulp, plugins, settings));

