var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    sass = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src('app/assets/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('app/assets/css'));
})

gulp.task('watch', function () {
    gulp.watch('app/assets/sass/*.scss', ['sass'])
})


gulp.task('bsync', function () {
   var files = [
      'app/*.html',
      'app/assets/css/*.css',
   ];

   browserSync.init(files, {
      server: {
         baseDir: './app'
      }
   });
});
