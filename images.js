var gulp = require("gulp");
var imagemin = require("gulp-imagemin");

gulp.task("images", function () {
  return gulp.src("source/img/**/*.{png,jpg,svg}")
    .pipe(imagemin([
      imagemin.optipng({optimizationLevel: 3})
      ]))
    .pipe(gulp.dest("source/img"));
});
