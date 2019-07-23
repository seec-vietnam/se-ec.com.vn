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
<html lang="ja" id="form">
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
    <section id="formFrame">
      <h2 class="center">資料請求・お見積り依頼</h2>
      <p class="subTitle center">以下のフォームに必要事項のご記入をお願いします。</p>
      <div class="inner" id="mainFrame">
        <form name="form" action="confirm.php" method="POST" id="chk">
          <table class="formTable">
            <tr class="style top">
              <th>
                <label for="style">スタイルについて</label>
              </th>
              <td>
                <input type="checkbox" name="style[]" id="style0" value="わからない">
                <label for="style0">わからない</label>
                <hr>
                <input type="checkbox" name="style[]" id="style1" value="家族葬（近親者で行うご葬儀）">
                <label for="style1">家族葬（近親者で行うご葬儀）</label>
                <hr>
                <input type="checkbox" name="style[]" id="style2" value="火葬式（火葬のみで式を行わないご葬儀） ">
                <label for="style2">火葬式（火葬のみで式を行わないご葬儀） </label>
                <hr>
                <input type="checkbox" name="style[]" id="style3" value="一般葬（ご家族以外もお呼びするご葬儀）">
                <label for="style3">一般葬（ご家族以外もお呼びするご葬儀）</label>
                <hr>
                <input type="checkbox" name="style[]" id="style4" value="１日葬（お通夜なしの１日だけのご葬儀）">
                <label for="style4">１日葬（お通夜なしの１日だけのご葬儀）</label>
                <hr>
                <input type="checkbox" name="style[]" id="style5" value="社葬・お別れ会・ホテル葬（大規模なご葬儀）">
                <label for="style5">社葬・お別れ会・ホテル葬（大規模なご葬儀）</label>
              </td>
            </tr>
            <tr class="name req">
              <th>
                <label for="name">お名前</label>
              </th>
              <td>
                <input class="require" type="text" name="check[name]" id="name">
              </td>
            </tr>
            <tr class="tel req">
              <th>
                <label for="tel">電話番号</label>
              </th>
              <td>
                <input class="require" type="text" name="check[tel]" id="tel">
              </td>
            </tr>
            <tr class="mail req">
              <th>
                <label for="mail">メールアドレス</label>
              </th>
              <td>
                <input class="require" type="text" name="check[mail]" id="mail">
              </td>
            </tr>
          </table>
          <p class="center" id="nextBtn">
            <input class="hover" type="image" name="form" value="form" src="./img/form_nextBtn.png" alt="確認画面へ">
          </p>
        </form>
      </div>
    </section>
    <p>spフッター</p>
    <script src="js/jquery-2.2.4.min.js"></script>
    <script src="js/default.js"></script>
    <script src="js/validation.js"></script><?php echo $tag3 ?>
  </body>
</html>