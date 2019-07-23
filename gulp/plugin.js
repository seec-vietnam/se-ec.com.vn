module.exports = {
  gulp : require('gulp'),
  browserSync : require('browser-sync').create(),
  sass : require('gulp-sass'),
  scss_lint : require('gulp-scss-lint'),
  autoprefixer : require('gulp-autoprefixer'),
  php : require('gulp-connect-php'),
  header : require('gulp-header'),
  replace : require('gulp-replace'),
  convertEncoding : require('gulp-convert-encoding'),
  rename : require( 'gulp-rename' ),
  plumber : require('gulp-plumber'),
  notify : require("gulp-notify"),
  pug : require('gulp-pug'),
  changed : require('gulp-changed'),
  cache : require('gulp-cached'),
  imagemin : require('gulp-imagemin'),
  watch : require('gulp-watch'),
  debug : require('gulp-debug'),
  uglify : require('gulp-uglify'),
  requireDir : require('require-dir'),
  sourcemaps : require('gulp-sourcemaps')
};
