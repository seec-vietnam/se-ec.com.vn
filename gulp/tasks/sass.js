const plugin = require('../plugin');
const config = require('../config').sass;

plugin.gulp.task('sass-compile', function() {
  return plugin.gulp.src(config.file)
    .pipe(plugin.cache('sass'))
    .pipe(plugin.plumber({ errorHandler: plugin.notify.onError("Error: <%= error.message %>") }))
    // エラーが合っても止めないようにする
    .pipe(plugin.sass.sync().on('error', plugin.sass.logError))
    .pipe(plugin.sourcemaps.init())
    // ベンダープレフィックスの付加
    .pipe(plugin.autoprefixer({
      browsers: ['last 2 version', 'iOS >= 8.1', 'Android >= 4.0'],
      cascade: false
    }))
    // 出力するcssの形式設定 expanded：非圧縮 compressed：圧縮
    .pipe(plugin.sass({outputStyle: 'compressed'}))
    .pipe(plugin.convertEncoding({to: "utf-8"}))
    // charset "UTF-8"の追加
    .pipe(plugin.replace(/@charset "UTF-8";/g, ''))
    .pipe(plugin.header('@charset "UTF-8";\n\n'))
    .pipe(plugin.rename(function(path) { path.dirname = path.dirname.replace('sass','css'); }))
    .pipe(plugin.sourcemaps.write())
    .pipe(plugin.gulp.dest(config.dest))
});

// scssのコードが設定に違反していないか確認
plugin.gulp.task('scss-lint', function() {
  return plugin.gulp.src(config.file)
    .pipe(plugin.cache('sassLint'))
    .pipe(plugin.scss_lint());
});