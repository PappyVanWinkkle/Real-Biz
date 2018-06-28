const gulp = require('gulp');
const minifyCSS = require('gulp-minify-css');
const autoprefixer = require('gulp-autoprefixer');
const gp_concat = require('gulp-concat');
const gulp_rename = require('gulp-rename');
const gulp_uglify = require('gulp-uglify');
const path = require('path');

// Tasks

gulp.task('css-styles', function() {
	return gulp
		.src([ './css/style.css', 'css/nivo-lightbox/nivo-lightbox.css', './css/nivo-lightbox/default.css' ])
		.pipe(minifyCSS())
		.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
		.pipe(gp_concat('style.min.css'))
		.pipe(gulp.dest('./css/dist/css'));
});

gulp.task('external-css', function() {
	return gulp
		.src([ './css/bootstrap.css', './fonts/font-awesome/css/font-awesome.css' ])
		.pipe(minifyCSS())
		.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
		.pipe(gp_concat('vendor.min.css'))
		.pipe(gulp.dest('./css/dist/vendor/'));
});
gulp.task('style', [ 'css-styles', 'external-css' ], function() {});
