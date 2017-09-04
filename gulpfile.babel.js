const gulp  = require('gulp');
const babel = require('gulp-babel');
const clean = require('gulp-clean');
const exec = require('child_process').exec;

gulp.task('default', ['start:server'], function() {
  console.log('Gulp is running!!!');
});

gulp.task('start:server', ['transpiler'], function (cb) {
  console.log("server task");
  exec('node dist/app.js', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

// Transpiling all ES6 code to ES5 in dist Folder.
gulp.task('transpiler', ['clean'], function () {
  console.log("Transpiler task");
  return gulp.src('./src/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('dist'));
});

gulp.task('clean', function () {
  return gulp.src('dist', {read: false})
    .pipe(clean());
});
