const plugin = require('../plugin');
const config = require('../config').image;

plugin.gulp.task('images', function() {
  return plugin.gulp.src(config.file)
    .pipe(plugin.changed(config.dest)) // 出力先にて差分があるか
    .pipe(plugin.plumber({ errorHandler: plugin.notify.onError("imageError: <%= error.message %>") }))
    // 画像が荒いとのことなので、高圧縮しない。
    // 若干圧縮される デザインの目で見ても特に問題なしだった
    .pipe(plugin.imagemin({
      optimizationLevel: 7 //7が最高値らしい
    }))
    .pipe(plugin.gulp.dest(config.dest))
});

// 画像追加しても監視するように
plugin.gulp.task('image-watch', function() {
  return plugin.watch([config.file], function() {
    return plugin.gulp.start(['images']);
  });
});