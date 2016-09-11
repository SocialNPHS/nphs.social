var gulp = require("gulp");

var sourcemaps = require("gulp-sourcemaps");

var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");

var uglify = require("gulp-uglify");

var browserSync = require('browser-sync').create();


// COPYING ====================================================================


gulp.task("copy", function() {
  // Copy all files that won't be later processed by gulp
  gulp.src(["./www/**/*", "!./www/**/*.js", "!./www/**/*.sass"])
    .pipe(gulp.dest("dist"));
});


// SASS compilation and minification ==========================================


gulp.task("sass", function() {
  gulp.src("./www/sass/main.sass")
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: "compressed"}))
    .pipe(sourcemaps.write())
    .pipe(autoprefixer({browsers: "last 5 versions"}))
    .pipe(gulp.dest("./dist"))
    .pipe(browserSync.reload({stream: true}));
});


// JS compilation and minification ============================================


gulp.task("js", function() {
  gulp.src("./www/**/*.js")
    .pipe(sourcemaps.init())
    .pipe(uglify({mangle: false}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("./dist"))
    .pipe(browserSync.reload({stream: true}));
});


// SERVING ====================================================================


gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: './dist'
    },
  });
  gulp.watch(
    ["./www/**/*.html"],
    browserSync.reload
  );
});


// MAIN ACTIONS ===============================================================


// Watch
gulp.task("watch", ["build"], function() {
  gulp.watch("./www/**/*.sass", ["sass"]);
  gulp.watch("./www/**/*.js", ["js"]);
  gulp.watch("./www/**/*", ["copy"]);
});

// Build once
gulp.task("build", ["copy", "sass", "js"]);

// Watch *and* serve with `gulp`
gulp.task("default", ["watch", "serve"]);
