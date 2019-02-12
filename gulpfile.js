"use strict";

const gulp = require("gulp");
const gulpLoadPlugins = require('gulp-load-plugins');
const plugins = gulpLoadPlugins();
const settings = require('./src/config/settings');

const addTask = (name, taskFile) => {
    gulp.task(name, require(`./src/config/tasks/${taskFile}`)(gulp, plugins, settings));
}

addTask('compile:js', 'compile-js');
addTask('compile:scss', 'compile-scss');

// gulp.task('compile:js', require('./src/config/tasks/compile-js')(gulp, plugins, settings));
// gulp.task('compile:scss', require('./src/config/tasks/compile-scss')(gulp, plugins, settings));

