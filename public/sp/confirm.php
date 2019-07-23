<?php
session_start();

$_SESSION['ticket'] = md5(uniqid() . mt_rand());
if (!empty($_POST)) {
  foreach ($_POST['check'] as $checkKey => $check) {
    if (!empty($check)) {
      $_POST[$checkKey] = $check;
    } else {
      $ret = false;
    }
  }

  // スタイル
  if (isset($_POST['style']) && is_array($_POST['style'])) {
    $style = implode("\r\n", $_POST["style"]);
    $_POST['style'] = $style;
  } else {
    $_POST['style'] = "わからない";
  }

  unset ($_POST['check']);
  foreach ($_POST as $k => $v) {
    $postdata[$k] = htmlspecialchars($v);
    switch ($k) {
      case 'mail':
        if (!preg_match('/^[-+.\\w]+@[-a-z0-9]+(\\.[-a-z0-9]+)*\\.[a-z]{2,6}$/i', $v)) {
          $postdata[$k] = '正しいメールアドレスを入力してください。';
          $ret = false;
        }
      break;
      case 'tel':
        if (!preg_match('/^\d{2,4}(-)?\d{2,4}(-)?\d{3,4}$/', $v)) {
          $postdata[$k] = '正しい電話番号を入力してください。';
          $ret = false;
        }
      break;
    }
  }
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
<html class="confirm" lang="ja" id="form">
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
      <p class="subTitle center">※以下の内容でお間違いが無ければ「送信ボタン」を押してください。</p>
      <div class="inner" id="mainFrame">
        <form name="confirm" action="thanks.php" method="POST">
          <table class="formTable">
            <tr class="style top">
              <th>
                <label for="style">スタイルについて</label>
              </th>
              <td><?php echo nl2br($postdata['style']) ?></td>
            </tr>
            <tr class="name req">
              <th>
                <label for="name">お名前</label>
              </th>
              <td><?php echo $postdata['name'] ?></td>
            </tr>
            <tr class="tel req">
              <th>
                <label for="tel">電話番号</label>
              </th>
              <td><?php echo $postdata['tel'] ?></td>
            </tr>
            <tr class="mail req">
              <th>
                <label for="mail">メールアドレス</label>
              </th>
              <td><?php echo $postdata['mail'] ?></td>
            </tr>
          </table>
          <ul class="flexBetween" id="sentPrev">
            <li id="prevBtn"><img class="hover" src="./img/form_prevBtn.png" alt="内容を修正する" id="back-btn"></li>
            <li id="sendBtn">
              <?php
              if(!isset($differ)) {
                if (!empty($_POST) && !isset($ret) && !isset($flg)) {
                  echo '<input type="image" src="./img/form_sendBtn.png" alt="送信する" class="hover">';
                }
              }
              foreach($postdata as $postKey => $postValue) {
                echo '<input type="hidden" name="'.$postKey.'" value="'.$postValue.'">';
              }
              ?>
              <input type="hidden" name="ticket" value="<?php echo htmlspecialchars( $_SESSION['ticket'] ); ?>">
            </li>
          </ul>
        </form>
      </div>
    </section>
    <p>spフッター</p>
    <script src="js/jquery-2.2.4.min.js"></script>
    <script src="js/default.js"></script><?php echo $tag3 ?>
  </body>
</html>