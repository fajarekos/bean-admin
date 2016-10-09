var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function() {
    gulp.src('assets/sass/**/*.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('assets/stylesheets/'))
});

//Watch task
gulp.task('default',function() {
    gulp.watch('assets/sass/**/*.sass',['styles']);
});
