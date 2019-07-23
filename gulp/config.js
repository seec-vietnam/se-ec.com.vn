// ディレクトリ名
const base = {
  // 吐き出されるディレクトリ
  rootDir: "public",
  // ビルド対象のディレクトリ
  srcDir: "src",
  // タスクのディレクトリ
  task: "tasks"
};

module.exports = {
  patch: base,
  pug: {
    // ビルド後の拡張子（index、formなどのファイル）
    extension: "php",
    // ビルドされたファイルが吐き出されるディレクトリ
    dest: base.rootDir,
    // pugファイル
    file: base.srcDir + "/**/*.pug",
    // ビルドしないpugファイル
    reject: base.srcDir + "/**/_*.pug"
  },
  sass: {
    // ビルドされたファイルが吐き出されるディレクトリ
    dest: base.rootDir,
    // sassファイル
    file: base.srcDir + "/**/*.scss"
  },
  js: {
    // ビルドされたファイルが吐き出されるディレクトリ
    dest: base.rootDir,
    // jsファイル
    file: base.srcDir + "/**/*.js",
    // 除外する（minifyしない）ファイル
    reject: base.srcDir + "/**/*.min.js"
  },
  image: {
    // ビルドされたファイルが吐き出されるディレクトリ
    dest: base.rootDir,
    file: base.srcDir + "/**/*.+(png|jpg|gif)"
  },
  php: {
    root: base.rootDir,
    port: 3000,
    php_bin_path: "C:/xampp/php/php.exe",
    php_ini_path: "C:/xampp/php/php.ini"
  },
  browser_sync: {
    root: base.rootDir,
    proxy: "localhost:3000/",
    port: 3000,
    open: "external",
    monitoring: base.rootDir + "/**/*.+(html|php|css|js)"
  }
};
