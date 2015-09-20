'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var notify = require('gulp-notify');

gulp.task('sass', function(){
  gulp.src('./src/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(notify('css built'))
    .pipe(gulp.dest('./'));
});

gulp.task('sass:watch', function(){
  gulp.watch('./src/scss/*.scss', ['sass']);
});

gulp.task('html', function(){
  gulp.src('./src/index.html')
    .pipe(notify('html built'))
    .pipe(gulp.dest('./'))
});

gulp.task('html:watch', function(){
  gulp.watch('./src/index.html', ['html']);
})

gulp.task('build', ['html', 'sass']);
gulp.task('default', ['html', 'html:watch','sass', 'sass:watch']);
