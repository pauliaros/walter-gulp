var gulp = require('gulp'),
	concat =require('gulp-concat'),
	uglify=require('gulp-uglify');

gulp.task('walter', function(){
	gulp.src('assets/js/*.js') //*para que tome todos los archivos js
	.pipe(concat('todo.js')) //todo.js se creara cuando corra la tarea
	.pipe(uglify())
	.pipe(gulp.dest('js/build'))
});	
