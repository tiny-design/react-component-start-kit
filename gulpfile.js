'use strict';

const gulp = require('gulp');
const cssmin = require('gulp-cssmin');
const concat = require('gulp-concat');
const minifyCss = require('gulp-minify-css');

gulp.task('compile', function () {
    return gulp.src('./src/styles/*.css')
        .pipe(cssmin())
        .pipe(gulp.dest('./lib/styles'));
});

gulp.task('concat', function () {
    return gulp.src('./src/styles/*.css')
        .pipe(concat('index.min.css'))
        .pipe(minifyCss())
        .pipe(gulp.dest('./lib'))
});

gulp.task('build', ['compile', 'concat']);