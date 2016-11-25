const gulp = require('gulp');
const jscs = require('gulp-jscs');
const jshint = require('gulp-jshint');
const mocha = require('gulp-mocha');

const urls = {
  testFiles: 'test/*.js',
  srcFiles: 'src/*.js',
  gulpFile: 'gulpfile.js',
};

gulp.task('mocha', () => {
  gulp.src(urls.testFiles, { read: false })
    .pipe(mocha());
});

gulp.task('jscs', () => {
  gulp.src([urls.srcFiles, urls.testFiles, urls.gulpFile])
    .pipe(jscs())
    .pipe(jscs.reporter());
});

gulp.task('jshint', () => {
  gulp.src([urls.srcFiles, urls.testFiles, urls.gulpFile])
    .pipe(jshint())
    .pipe(jshint.reporter());
});

//////////////////////
// Main definitions //
//////////////////////

gulp.task('test', ['mocha']);
gulp.task('lint', ['jscs', 'jshint']);
gulp.task('build', []);

gulp.task('default', ['lint', 'test', 'build']);
