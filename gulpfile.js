'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var notify = require('gulp-notify');

gulp.task('sass', function(done){
  gulp.src('./src/scss/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(notify('css built'))
    .pipe(gulp.dest('./dist/styles'));
  done();
});

gulp.task('sass:watch', function(done){
  gulp.watch('./src/scss/styles.scss', gulp.series('sass'));
  done();
});

gulp.task('html', function(done){
  gulp.src('./src/index.html')
    .pipe(notify('html built'))
    .pipe(gulp.dest('./'))
  done();
});

gulp.task('html:watch', function(done){
  gulp.watch('./src/index.html', gulp.series(['html']));
})

gulp.task('js', function(done){
  gulp.src('./src/js/*.js')
    .pipe(notify('js built'))
    .pipe(gulp.dest('./dist/js'))
  done();
});

gulp.task('js:watch', function(done){
  gulp.watch('./src/js/*.js', gulp.series(['js']));
  done();
});

gulp.task('img', function(done){
  gulp.src('./src/img/*')
    .pipe(notify('images copied over'))
    .pipe(gulp.dest('./dist/img'))
  done();
});

gulp.task('build', gulp.series(['html', 'sass', 'js', 'img']));
gulp.task('default', gulp.series(['html', 'html:watch','sass', 'sass:watch', 'js', 'js:watch', 'img']));
