var gulp = require('gulp'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	csso = require('gulp-csso'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	concat = require('gulp-concat'),
	gutil = require('gulp-util'),
	del = require('del');

gulp.task('styles', function () {
	gulp.src('assets/sass/styles.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer('last 2 version'))
		.pipe(gulp.dest('public/css'))
		.pipe(rename({ suffix: '.min' }))
		.pipe(csso())
		.pipe(gulp.dest('public/css'));
});

gulp.task('scripts', function () {
	gulp.src(['assets/js/*.js'])
		.pipe(concat('app.js'))
		.pipe(gulp.dest('public/js'))
		.pipe(rename({ suffix: '.min' }))
		.pipe(uglify().on('error', gutil.log))
		.pipe(gulp.dest('public/js'));
});

gulp.task('watch', function () {
	gulp.watch('assets/sass/*.scss', ['styles']);
	gulp.watch('assets/js/*.js', ['scripts']);
});

gulp.task('clean', function (cb) {
	del([
			'public/js/*', 
			'public/css/*', 
			'public/*', 
		], cb);
});

gulp.task('default', ['styles', 'scripts']);