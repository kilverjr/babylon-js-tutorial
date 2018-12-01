var
  // modules
  gulp = require('gulp'),
  browserSync = require('browser-sync').create(),

  // development mode?
  devBuild = (process.env.NODE_ENV !== 'production');
  
gulp.task('watch', ['browserReload'], function () {
  gulp.watch('src/**/*.html', ['hello']);
});

gulp.task('run', ['browserSync'], function () {
  gulp.watch('src/**/*.html', ['hello']);
  gulp.watch('src/**/*.js', ['hello']);
});

gulp.task('hello', function () {
  console.log('Hello Zell');
  browserSync.reload();
});

gulp.task('browserSync', function () {
  browserSync.init({
    server: {
      baseDir: 'src'
    },
  })
});

gulp.task('browserReload', function () {
  browserSync.reload();
});

