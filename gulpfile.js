var gulp=require('gulp');
var less=require('gulp-less');
var htmlmin=require('gulp-htmlmin');
var css=require('gulp-minify-css');
var uglify=require('gulp-uglify');
var browserSync=require('browser-sync').create();

gulp.task('html',function(){
  gulp.src('index.html')
  .pipe(htmlmin({
    collapseWhitespace:true,
    removeContents:true
  }))
  .pipe(gulp.dest('dist/'))
  .pipe(browserSync.stream());
  gulp.src('page/**/*.html')
  .pipe(htmlmin({
    collapseWhitespace:true,
    removeContents:true
  }))
  .pipe(gulp.dest('dist/page/'))
  .pipe(browserSync.stream());
})
gulp.task('less',function(){
  gulp.src('less/**/*.less')
  .pipe(less())
  .pipe(css())
  .pipe(gulp.dest('dist/css/'))
  .pipe(browserSync.stream());
})
gulp.task('js',function(){
  gulp.src('js/**/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('dist/js/'))
  .pipe(browserSync.stream());
})
gulp.task('img',function () {
  gulp.src('images/**/*.*')
  .pipe(gulp.dest('dist/images/'))
  .pipe(browserSync.stream());

  gulp.src('images/java/*.*')
  .pipe(gulp.dest('dist/images/java/'))
  .pipe(browserSync.stream());

  gulp.src('images/python/*.*')
  .pipe(gulp.dest('dist/images/python/'))
  .pipe(browserSync.stream());
})
gulp.task('watch',function(){
  gulp.watch(['index.html','page/**/*.html'],['html']);
  gulp.watch('js/**/*.js',['js']);
  gulp.watch('less/**/*.less',['less']);
  gulp.watch('images/**/*.*',['img']);
})
gulp.task('lib',function(){
  gulp.src('node_modules/jquery/dist/**/*.*')
  .pipe(gulp.dest('dist/lib/jquery/'));
  gulp.src('node_modules/bootstrap/dist/**/*.*')
  .pipe(gulp.dest('dist/lib/bootstrap/'))
})
gulp.task('browser',function(){
  browserSync.init({
    port:8888,
    server:{
      baseDir:'dist/'
    }
  });
})

gulp.task('default',['html','less','js','img','watch','lib','browser'])
