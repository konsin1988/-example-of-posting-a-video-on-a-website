const gulp = require("gulp"),
  minifyCSS = require("gulp-clean-css"),
  renameCSS = require("gulp-rename"),
  sass = require("gulp-sass")(require("sass")),
  minifyJS = require("gulp-minify");

// minCSS
gulp.task("mincss", async function () {
  gulp
    .src("./app/css/*.scss")
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(renameCSS({ suffix: ".min" }))
    .pipe(gulp.dest("./public/css"));
});

//minJS
gulp.task("minjs", async function () {
  gulp.src("./app/js/*.js").pipe(minifyJS()).pipe(gulp.dest("./public/js"));
});

// Watch
gulp.task("watchAll", async function () {
  gulp.watch("./app/css/*.scss", gulp.series("mincss"));
  gulp.watch("./app/js/*.js", gulp.series("minjs"));
});
