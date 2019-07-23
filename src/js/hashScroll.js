/****************************************************
  ハッシュ付きアクセス時の位置調整
  varsion 1.02
*****************************************************/
window.addEventListener('DOMContentLoaded', function() {
  // ハッシュ全取得
  var hash = location.hash;
  var hashFlg = false;
  // ハッシュを?で区切る（#id名のみを取るため）
  var hashArr = hash.split(/[\?]/);
  if(hashArr.length) {
    for(var i = 0; i < hashArr.length; i++) {
      if( hashArr[i].match(/#/) ) {
        // #が付いていたら入る #を削除し、id名のみにする
        hash = hashArr[i].replace('#', '');
        hashFlg = true;
      }
    }
  }
  var target = '';
  var header = '';
  if(hashFlg) {
    // ハッシュの要素を探す
    target = document.getElementById(hash);
    // その要素の位置
    var targetPos = target.getBoundingClientRect().top + window.pageYOffset;
    // id名がheaderの要素を取得
    header = document.getElementById('header');
    // id名headerの高さ
    var headerHeight = 0;
    // id名headerがあるなら高さ取得
    if(header) headerHeight = header.clientHeight;
    // ロード時の位置調整
    var scrollPos = targetPos - headerHeight;
    // 移動
    scrollTo(0, scrollPos);
  }
  window.onload = function() {
    if(hash) {
      var targetPos = target.getBoundingClientRect().top + window.pageYOffset;
      var headerHeight = 0;
      if(header) headerHeight = header.clientHeight;
      var scrollPos = targetPos - headerHeight;
      scrollTo(0, scrollPos);
    }
  }
});
