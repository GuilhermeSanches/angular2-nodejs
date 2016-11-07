const del = require('del');
const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const colors = require('colors');
const concat = require('gulp-concat');
const liveServer = require('gulp-live-server');
const plumber = require('gulp-plumber');
const runSequence = require('run-sequence');
const sass = require('gulp-sass');
const sassLint = require('gulp-sass-lint');
const sourcemaps = require('gulp-sourcemaps');
const sysBuilder = require('systemjs-builder');
const tslint = require('gulp-tslint');
const tsc = require('gulp-typescript');
const uglify = require('gulp-uglify');
const tsconfig = require('tsconfig-glob');
const testTscConfig = require('./tests/tsconfig.json');
const tscConfig = require('./tsconfig.json');



gulp.task('clean:dist:js', function () {
  return del('public/dist/js/*');
});

gulp.task('clean:dist:css', function () {
  return del('public/dist/css/*');
});

gulp.task('clean:lib', function () {
  return del('public/lib/**/*');
});

gulp.task('clean:tests', function () {
  return del('tests/**/*');
});

// gulp.task('lint:ts', function () {
//   return gulp.src('app/**/*.ts')
//     .pipe(tslint())
//     .pipe(tslint.report('verbose', { emitError: false }));
// });

gulp.task('compile:ts', function () {
  return gulp
    .src(tscConfig.filesGlob)
    .pipe(plumber({
      errorHandler: function (err) {
        console.error('>>> [tsc] Typescript compilation failed'.bold.green);
        this.emit('end');
      }
    }))
    .pipe(sourcemaps.init())
    .pipe(tsc(tscConfig.compilerOptions))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('public/dist/js'));
});

gulp.task('bundle:js', function () {
  var builder = new sysBuilder('public', './systemjs.config.js');
  return builder.buildStatic('app', 'public/dist/js/app.min.js')
    .then(function () {
      return del(['public/dist/js/**/*', '!public/dist/js/app.min.js']);
    })
    .catch(function (err) {
      console.error('>>> [systemjs-builder] Bundling failed'.bold.green, err);
    });
});

gulp.task('minify:js', function () {
  return gulp
    .src('public/dist/js/app.min.js')
    .pipe(uglify())
    .pipe(gulp.dest('public/dist/js'));
});

gulp.task('minify:css', function () {

  gulp
    .src('app/css/global/*.css')
    .pipe(concat('global.min.css'))
    .pipe(cleanCSS())
    .pipe(gulp.dest('public/dist/css/global'));


  gulp
    .src('app/component/**/*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('public/dist/css/component'));
});


gulp.task('copy:libs', function () {
  gulp.src(['node_modules/rxjs/**/*'])
    .pipe(gulp.dest('public/lib/js/rxjs'));

  gulp.src(['node_modules/angular2-in-memory-web-api/**/*'])
    .pipe(gulp.dest('public/lib/js/angular2-in-memory-web-api'));


  gulp.src([
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/bootstrap/dist/js/bootstrap.min.js',
    'node_modules/es6-shim/es6-shim.min.js',
    'node_modules/es6-promise/dist/es6-promise.min.js',
    'node_modules/zone.js/dist/zone.js',
    'node_modules/reflect-metadata/Reflect.js',
    // 'node_modules/systemjs/dist/system-polyfills.js',
    'node_modules/systemjs/dist/system.src.js',
    'system.config.js',
  ])
    .pipe(concat('vendors.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('public/lib/js'));

  gulp.src([
    'node_modules/es6-shim/es6-shim.map',
    'node_modules/reflect-metadata/Reflect.js.map',
    'node_modules/systemjs/dist/system-polyfills.js.map'
  ]).pipe(gulp.dest('public/lib/js'));

  gulp.src([
    'node_modules/bootstrap/dist/css/bootstrap.*'
  ]).pipe(gulp.dest('public/lib/css'));


  return gulp.src(['node_modules/@angular/**/*'])
    .pipe(gulp.dest('public/lib/js/@angular'));
});

gulp.task('copy:assets', function () {
  return gulp.src(
    [
      '*.json',
      '*.html',
      '*.css',
      '!*.ts',
      '!*.scss'
    ],
    { base: 'app/**/*' })
    .pipe(gulp.dest('public/dist'))
});

gulp.task('tsconfig-glob', function () {
  return tsconfig({
    configPath: '.',
    indent: 2
  });
});

gulp.task('watch:src', function () {
  gulp.watch('app/**/*.ts', ['scripts']);
});

gulp.task('serve', ['watch:src'], function () {
  var server = liveServer.new('server.js');
  server.start();

  gulp.watch('server.js', server.start.bind(server));
});

// Compile .ts files unbundled for tests
gulp.task('compile:specs', function() {
  return gulp
    .src([
      "app/**/*.ts",
      "typings/*.d.ts"
    ])
    .pipe(plumber({
      errorHandler: function (err) {
        console.error('>>> [tsc] Typescript tests compilation failed'.bold.green);
        this.emit('end');
      }}))
    .pipe(tsc(testTscConfig.compilerOptions))
    .pipe(gulp.dest('tests'));
});

gulp.task('test', ['compile:specs'], function() {
  gulp.watch('app/**/*.ts', ['compile:specs']);
});

// gulp.task('lint', ['lint:ts', 'lint:sass']);

gulp.task('clean', ['clean:dist:js', 'clean:dist:css', 'clean:lib', 'clean:tests']);

gulp.task('copy', function (callback) {
  runSequence('clean:lib', 'copy:libs', callback);
});
gulp.task('scripts', function (callback) {
  runSequence([
            // 'lint:ts',
            'clean:dist:js'], 
            'compile:ts', 'bundle:js', 'minify:js', callback);
});

gulp.task('styles', function (callback) {
  runSequence(['clean:dist:css'], ['minify:css'], callback);
});

gulp.task('build', function (callback) {
  runSequence('copy', 'scripts', 'styles', callback);
});

gulp.task('default', function (callback) {
  runSequence('build', 'serve', callback);
});