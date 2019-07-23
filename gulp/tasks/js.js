const plugin = require('../plugin');
const config = require('../config').js;

plugin.gulp.task('js', function() {
  return plugin.gulp.src(config.file)
    .pipe(plugin.cache('js'))
    .pipe(plugin.plumber({ errorHandler: plugin.notify.onError("jsFileError: <%= error.message %>") }))
    .pipe(plugin.sourcemaps.init())
    .pipe(plugin.uglify())
    .pipe(plugin.sourcemaps.write())
    .pipe(plugin.gulp.dest(config.dest))
});
plugin.gulp.task('minjs', function() {
  return plugin.gulp.src(config.reject)
    .pipe(plugin.plumber({ errorHandler: plugin.notify.onError("minJsFileError: <%= error.message %>") }))
    .pipe(plugin.gulp.dest(config.dest))
});

plugin.gulp.task('add-js', function() {
  return plugin.watch([config.file], function() {
    return plugin.gulp.start(['js']);
  });
});