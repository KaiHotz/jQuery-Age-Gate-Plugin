var gulp = require('gulp'),
	  sass = require('gulp-sass'),
    scss = require('gulp-scss'),
	  autoprefixer = require('gulp-autoprefixer'),
	  sourcemaps = require('gulp-sourcemaps'),
    livereload = require('gulp-livereload'),
    del = require('del');


gulp.task('default', ()=> {
  gulp.src('scss/agegate.scss')
    .pipe(sass({
        //outputStyle: 'compact',
        sourceComments: false
      }))
    .pipe(autoprefixer({
        versions:['last 10 browsers']
      }))
    //.pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('css/'))
});

//Gulp Watch
gulp.task('watch',()=> {

  // Watch .scss files
  gulp.watch('scss/site/**/*.scss', ['default']);

  // Create LiveReload server
  livereload.listen();

  // Watch any files in dist/, reload on change
  gulp.watch(['css/site/**']).on('change', livereload.changed);

});

