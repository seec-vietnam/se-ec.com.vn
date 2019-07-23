<?php
// スマホ
$ua = $_SERVER['HTTP_USER_AGENT'];

if ( !(strpos( $ua , 'iPhone' ) !== false) && !(strpos( $ua , 'Android' ) !== false) ) {
  $url = (empty($_SERVER["HTTPS"]) ? "http://" : "https://") . $_SERVER["HTTP_HOST"] . $_SERVER["REQUEST_URI"];
  $arrayUrl = parse_url($url);
  $arrayUrl['path'] =  str_replace('/sp/', '', $arrayUrl['path']);
  $url = $arrayUrl['path'] . '/';
  if (!empty($_GET)) {
    foreach ($_GET as $k => $v) {
      $param[] = "$k=$v";
    }
    $url .= '?' . implode('&' , $param);
  }
  header("Location:$url");
  exit;
}
?>
<?php
// canonicalタグ
define('CANONICAL',str_replace('//dev.', '//', (empty($_SERVER["HTTPS"]) ? "http://" : "https://") . $_SERVER["HTTP_HOST"] . $_SERVER["REQUEST_URI"]));

$tag1 = $tag2 = $tag3 = null;
$url=$_SERVER[HTTP_HOST];
$contents = file_get_contents("https://sfa.se-ec.co.jp/datagets/tag.php?url=$url");
$pattern = "/<tag>([.\s\S]*?)<\/tag>/";
$match_num = preg_match_all($pattern, $contents, $matches);
if( $match_num ) {
    list($tag1,$tag2,$tag3) = $matches[1];
}
?><!DOCTYPE html>
<html lang="ja" id="index">
  <head>
    <title>タイトル</title>
    <meta charset="utf-8">
    <meta name="description" content="デスクリプション">
    <meta name="keywords" content="キーワード">
    <meta name="SKYPE_TOOLBAR" content="SKYPE_TOOLBAR_PARSER_COMPATIBLE">
    <meta name="format-detection" content="telephone=no">
    <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1,user-scalable=no">
    <link rel="canonical" href="<?php echo CANONICAL ?>">
    <link href="css/reset.css" rel="stylesheet">
    <link href="css/layout.css" rel="stylesheet"><?php echo $tag1 ?>
  </head>
  <body><?php echo $tag2 ?>
    <p>spヘッダー</p>
    <section id="fv">
      <h1>sp-fv</h1>
    </section>
    <section></section>
    <p>spフッター</p>
    <script src="js/jquery-2.2.4.min.js"></script>
    <script src="js/default.js"></script><?php echo $tag3 ?>
  </body>
</html>