const plugin = require('../plugin');
const config = require('../config').php;

plugin.gulp.task('php', function() {
  plugin.php.server({
      port: config.port,
      base: config.root
      // bin: config.php_bin_path, // MAMP:XAMPPのphpを利用する際はこちらを有効にしてください
      // ini: config.php_ini_path　// MAMP:XAMPPのphpを利用する際はこちらを有効にしてください
  });
});