'use strict';

var babel = require('gulp-babel');
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha');

require('babel/register');

var src = [
	'lib/**/*.js',
];

var test = [
	'test/**/*.js',
];

var dest = 'build';

gulp.task('babel', function () {
	return gulp.src(src)
		.pipe(babel())
		.pipe(gulp.dest(dest));
});

gulp.task('jshint', function () {
	return gulp.src(src)
		.pipe(jshint('.jshintrc'))
		.pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('mocha', function () {
	return gulp.src(test, {read: false})
		.pipe(mocha());
});

gulp.task('prepublish', ['babel']);
gulp.task('test', ['mocha']);
