'use strict';

var gulp = require('gulp');

var paths = gulp.paths;

gulp.task('watch', ['inject'], function () {
  gulp.watch([
    paths.src + '/*.html',
    paths.src + '/{app,assets,components}/**/*.scss',
    paths.src + '/{app,assets,components}/**/*.js',
    'bower.json'
  ], ['inject']);
});
