var gulp = require('gulp');
var jshint = require('gulp-jshint');
var browserify = require('gulp-browserify');
var rename = require('gulp-rename');

gulp.task('lint', function() {
  return gulp.src('./client/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('browserify', function() {
  return gulp.src('client/index.js')
    .pipe(browserify({
      insertGlobals: true
    }))
    .pipe(rename('car-finder.js'))
    .pipe(gulp.dest('public/javascripts'));
});

gulp.task('watch', function() {
  gulp.watch('client/**/*.js', ['lint', 'browserify']);
});

gulp.task('default', ['lint', 'browserify', 'watch']);

