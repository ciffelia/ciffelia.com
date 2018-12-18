const gulp = require('gulp');
const { htmlmin, plumber, notify, sass } = require('gulp-load-plugins')();
const browserSync = require('browser-sync');
const rimraf = require('rimraf');
const sassPackageImporter = require('node-sass-package-importer');

// Remove dist directory
const removeDist = callback => {
  rimraf('dist', callback);
};

// Compile HTML
const compileHTML = () => {
  return gulp.src('src/html/**/*')
    .pipe(plumber({ errorHandler: notify.onError('<%= error.message %>') }))
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist'));
};

// Copy static files
const copyStaticFiles = () => {
  return gulp.src('static/**/*')
    .pipe(plumber({ errorHandler: notify.onError('<%= error.message %>') }))
    .pipe(gulp.dest('dist'));
};

// Compile Sass
const compileSass = () => {
  return gulp.src('src/styles/index.scss', { sourcemaps: true })
    .pipe(plumber({ errorHandler: notify.onError('<%= error.message %>') }))
    .pipe(sass({
      importer: sassPackageImporter({
        extensions: ['.scss', '.sass', '.css']
      }),
      outputStyle: 'compressed'
    }))
    .pipe(gulp.dest('dist', { sourcemaps: '.' }));
};

// Build
const build = gulp.series(
  removeDist,
  gulp.parallel(compileHTML, copyStaticFiles, compileSass)
);

// Watch changes
const watch = gulp.series(build, async () => {
  gulp.watch('src/html/**/*', compileHTML);
  gulp.watch('static/**/*', copyStaticFiles);
  gulp.watch('src/styles/**/*', compileSass);
});

const runBrowserSync = callback => {
  const bs = browserSync.create();
  bs.init({
    server: 'dist',
    files: 'dist'
  }, callback);
};

// Start development server
const serve = gulp.series(watch, runBrowserSync);

module.exports = { build, watch, serve };
