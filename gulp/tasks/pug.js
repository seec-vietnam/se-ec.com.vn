const plugin = require('../plugin');
const config = require('../config').pug;

plugin.gulp.task('pug', function() {
  return plugin.gulp.src([config.file, '!'+config.reject])
    // 変更のあったファイルのみビルドする
    .pipe(plugin.cache('pug'))
    .pipe(plugin.plumber({ errorHandler: plugin.notify.onError("pugError: <%= error.message %>") }))
    .pipe(plugin.pug({pretty: true}))
    .pipe(plugin.replace(/^\n/, ''))
    .pipe(plugin.rename({extname: '.'+config.extension}))
    .pipe(plugin.gulp.dest(config.dest))
});

plugin.gulp.task('includePugs', function() {
  // rejectに変更があったらreject以外のpugファイル全てビルド
  return plugin.gulp.src([config.file, '!'+config.reject])
    .pipe(plugin.plumber({ errorHandler: plugin.notify.onError("pugError: <%= error.message %>") }))
    .pipe(plugin.pug({pretty: true}))
    .pipe(plugin.replace(/^\n/, ''))
    .pipe(plugin.rename({extname: '.'+config.extension}))
    .pipe(plugin.gulp.dest(config.dest))
});