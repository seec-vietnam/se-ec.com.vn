<?php
session_start();

if ($_SESSION['ticket'] == $_POST['ticket'] && !empty($_POST['ticket'])) {
  session_destroy();
  mail_send($_POST);
} else {
  header("Location:./");
  exit;
}

function mail_send($postdata){

  mb_language("japanese");
  mb_internal_encoding("UTF-8");

  $subject    = "お問い合わせありがとうございます。";
  $to_enduser = $postdata['mail'];

  $from_email = "info@".$_SERVER["SERVER_NAME"];   //info@ドメイン名
  $from_name  = ""; //クライアント名
  $bcc_email_client   = "mail@se-ec.co.jp"; //クライアントメールアドレスBCC
  $from    = sprintf("From:%s<%s>\n", mb_encode_mimeheader($from_name, 'ISO-2022-JP'), $from_email);
  $from   .= sprintf("Bcc:%s",  $bcc_email_client);
  $body    = <<< EOD

%s様
花葬儀のお問い合わせ、ありがとうございます。

===============================================
お問い合わせ内容は下記の通りです。
===============================================

【スタイルについて】
%s

【お名前】
%s

【電話番号】
%s

【メールアドレス】
%s


※このメールアドレスは送信専用アドレスとなるためご返信いただいても対応することができません

EOD;

  $body = sprintf(
    $body,
    $postdata['name'],
    $postdata['style'],
    $postdata['name'],
    $postdata['tel'],
    $postdata['mail']
  );

  $params = '-f' . $from_email;
  @mb_send_mail($to_enduser, $subject, $body, $from, $params);

  // email2log API用のパラメータ
  $e2l_query = array(
    'email_to' => $to_enduser, // ユーザーのメールアドレス
    'email_from' => $bcc_email_client, // クライアントのメールアドレス
    'domain' => $_SERVER['SERVER_NAME'],
    'url' => $_SERVER["HTTP_HOST"] . $_SERVER["REQUEST_URI"],
    'ip' => $_SERVER["REMOTE_ADDR"],
    'ua' => $_SERVER['HTTP_USER_AGENT']
  );
  // パラメータを形成
  $e2l_query = http_build_query($e2l_query);
  // パラメータを付与
  $e2l_get_url = 'https://sfa.se-ec.co.jp/datagets/mail.php?' . $e2l_query;
  // ヘッダーの設定
  $e2l_headers = array(
    'User-Agent: PHP/' . PHP_VERSION,
  );
  // file_get_contentsのオプション設定
  $e2l_opts = array(
    'http' => array(
      'header' => implode("\r\n", $e2l_headers) . "\r\n",
      'content' => $e2l_query,
      'method' => 'GET',
    )
  );
  // file_get_contentsでapiを叩く
  $e2l_send = file_get_contents($e2l_get_url, false, stream_context_create($e2l_opts));
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
<html class="thanks" lang="ja" id="form">
  <head>
    <title>タイトル</title>
    <meta charset="utf-8">
    <meta name="description" content="デスクリプション">
    <meta name="keywords" content="キーワード">
    <meta name="SKYPE_TOOLBAR" content="SKYPE_TOOLBAR_PARSER_COMPATIBLE">
    <meta name="format-detection" content="telephone=no">
    <meta name="viewport" content="width=1040">
    <link rel="canonical" href="<?php echo CANONICAL ?>">
    <link href="css/reset.css" rel="stylesheet">
    <link href="css/layout.css" rel="stylesheet"><?php echo $tag1 ?>
  </head>
  <body><?php echo $tag2 ?>
    <p>ヘッダー</p>
    <section id="formFrame">
      <h2 class="center">資料請求・お見積り依頼</h2>
      <h3 class="center">花葬儀のお問い合わせ、ありがとうございます。</h3>
      <div class="thanksText center">
        <p class="text">フォームに入力された内容は問題なく送信完了されました。</p>
      </div>
      <p class="center" id="goTop"><a href="./"><img class="hover" src="./img/form_gotoTop.png" alt="サイトトップへ"></a></p>
    </section>
    <p>フッター</p>
    <script src="js/jquery-2.2.4.min.js"></script>
    <script src="js/default.js"></script><?php echo $tag3 ?>
  </body>
</html>