'use strict';

const gulp = require('gulp');
const util = require('gulp-util');
const sass = require('gulp-sass');
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');

gulp.task('sass', function () {
    return gulp.src('sass/main.scss')
        .pipe(sass({
            includePaths: [
                require('bourbon').includePaths
            ]
        }).on('error', sass.logError))
        .pipe(postcss([
            autoprefixer({browsers: ['last 2 versions']})
        ]))
        .pipe(gulp.dest('./'));
});

gulp.task('watch-sass', function () {
    return gulp.watch('sass/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch-sass']);