const gulp = require('gulp');
const { htmlmin, plumber, notify, sourcemaps, sass } = require('gulp-load-plugins')();
const runSequence = require('run-sequence');
const browserSync = require('browser-sync');
const rimraf = require('rimraf');
const sassPackageImporter = require('node-sass-package-importer');

// Clean dist directory
gulp.task('clean', callback => {
  rimraf('dist', callback);
});

// Compile HTML
gulp.task('html', () => {
  return gulp.src('src/html/**/*')
    .pipe(plumber({ errorHandler: notify.onError('<%= error.message %>') }))
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist'));
});

// Copy static files
gulp.task('static', () => {
  return gulp.src('static/**/*')
    .pipe(plumber({ errorHandler: notify.onError('<%= error.message %>') }))
    .pipe(gulp.dest('dist'));
});

// Compile Sass
gulp.task('sass', () => {
  return gulp.src('src/styles/index.scss')
    .pipe(plumber({ errorHandler: notify.onError('<%= error.message %>') }))
    .pipe(sourcemaps.init())
    .pipe(sass({
      importer: sassPackageImporter({
        extensions: ['.scss', '.sass', '.css']
      }),
      outputStyle: 'compressed'
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist'));
});

// Watch changes
gulp.task('watch', () => {
  gulp.watch('src/html/**/*', ['html']);
  gulp.watch('static/**/*', ['static']);
  gulp.watch('src/styles/**/*', ['sass']);
});

// Start development server
gulp.task('serve', ['watch'], () => {
  const bs = browserSync.create();
  bs.init({
    server: 'dist',
    files: 'dist'
  });
});

// Build
gulp.task('build', callback => {
  return runSequence(
    'clean',
    ['html', 'static', 'sass'],
    callback
  );
});
