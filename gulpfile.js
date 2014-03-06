var gulp = require('gulp');
var sass = require('gulp-ruby-sass');

var paths = {
  sass: {
    src: './css/style.scss',
    dest: './css',
    watch: './css/**/*.scss'
  }
};

gulp.task('sass', function() {

  return gulp.src(paths.sass.src)
    .pipe(sass({ style: 'compressed' }))
    .pipe(gulp.dest(paths.sass.dest));
});

gulp.task('watch', function() {
  gulp.watch(paths.sass.watch, ['sass']);
});

gulp.task('default', ['watch']);
