var gulp = require('gulp');
var sass = require('gulp-ruby-sass');

var paths = {
  sass: {
    src: './css/style.scss',
    dest: './css'
  }
};

gulp.task('sass', function() {

  return gulp.src(paths.sass.src)
    .pipe(sass({ style: 'compressed' }))
    .pipe(gulp.dest(paths.sass.dest));
});

gulp.task('default', function() { });
