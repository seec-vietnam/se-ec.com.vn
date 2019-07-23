const plugin = require('./gulp/plugin');
const config = require('./gulp/config').patch;

// タスクファイル読む
plugin.requireDir(config.task, {recurse: true});

plugin.gulp.task('build-watch', function() {
  // index.pugやform.pugに変更があった時
  plugin.gulp.watch([config.srcDir + '/**/*.pug', '!' + config.srcDir + '/**/_*.pug'], ['pug']);
  // includeされるpugファイルに変更があったらindex.pug、form.pugなど全てビルドする
  plugin.gulp.watch([config.srcDir + '/**/_*.pug'], ['includePugs']);
  // sassファイル
  plugin.gulp.watch([config.srcDir + '/**/*.scss'], ['scss-lint', 'sass-compile']);
  // js
  plugin.gulp.watch([config.srcDir + '/**/*.js'], ['js']);
});


plugin.gulp.task('default', ['php', 'browser-sync', 'build-watch', 'image-watch', 'add-js']);
