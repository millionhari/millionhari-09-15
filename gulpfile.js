'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var notify = require('gulp-notify');

gulp.task('sass', function(){
  gulp.src('./src/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(notify('css built'))
    .pipe(gulp.dest('./dist/styles'));
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

gulp.task('js', function(){
  gulp.src('./src/js/*.js')
    .pipe(notify('js built'))
    .pipe(gulp.dest('./dist/js'))
});

gulp.task('js:watch', function(){
  gulp.watch('./src/js/*.js', ['js']);
});

gulp.task('img', function(){
  gulp.src('./src/img/*')
    .pipe(notify('images copied over'))
    .pipe(gulp.dest('./dist/img'))
});

gulp.task('build', gulp.series(['html', 'sass', 'js', 'img']));
gulp.task('default', gulp.series(['html', 'html:watch','sass', 'sass:watch', 'js', 'js:watch', 'img']));
