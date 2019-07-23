const plugin = require('../plugin');
const config = require('../config').browser_sync;

plugin.gulp.task('browser-sync', function() {
  plugin.browserSync.init({
    // サーバとなるrootディレクトリ
    baseDir: config.root,
    // phpを立ち上げたサーバ
    // proxy: '127.0.0.1:3000/',
    proxy: config.proxy,
    // ポート
    port: config.port,
    // IPアドレス表示
    open: config.open,
    // 監視対象
    files: config.monitoring
  });
});