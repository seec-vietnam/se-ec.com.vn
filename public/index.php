<?php
ini_set('display_errors', 0);
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
<html lang="vi" id="index">
  <head>
    <title>SEEC Việt Nam</title>
    <meta charset="utf-8">
    <link rel="icon" type="image/png" href="img/favicon.png">
    <meta name="description" content="SEEC Việt Nam">
    <meta name="keywords" content="SEEC Việt Nam">
    <meta name="format-detection" content="telephone=no">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="canonical" href="<?php echo CANONICAL ?>">
    <link href="css/reset.css" rel="stylesheet">
    <link href="css/slick.css" rel="stylesheet">
    <link href="css/animate.css" rel="stylesheet">
    <link href="css/module.css" rel="stylesheet">
    <link href="css/layout.css" rel="stylesheet">
  </head>
  <body>
    <div class="loading"></div>
    <div id="page">
      <div id="mobile-nav-toggle"><span></span><span></span><span></span></div>
      <div id="nav-mobile">
        <ul class="nav-menu">
          <li><a href="/"><img src="img/logo-white.png" alt="" title=""></a></li>
          <li><a class="active" href="#seec">{{ language.home }}</a></li>
          <li><a href="#about">{{ language.about }}</a></li>
          <li><a href="#services">{{ language.services }}</a></li>
          <li><a href="#team">{{ language.team }}</a></li>
          <li><a href="#contact">{{ language.contact }}</a></li>
          <li class="menu-has-children"><a href="javascript:">{{datalanguage}}</a>
            <ul>
              <li @click="languagecountry('vi')"><a href="javascript:" v-text="language.LangVietnamese"></a></li>
              <li @click="languagecountry('ja')"><a href="javascript:" v-text="language.LangJapanese"></a></li>
              <li @click="languagecountry('en')"><a href="javascript:" v-text="language.LangEnglish"></a></li>
            </ul>
          </li>
        </ul>
      </div>
      <header id="header">
        <div class="container">
          <div class="pull-left" id="logo"><a href="/"><img src="img/logo-white.png" alt="" title=""></a></div>
          <nav id="nav-menu-container">
            <ul class="nav-menu">
              <li><a class="active" href="#seec">{{ language.home }}</a></li>
              <li><a href="#about">{{ language.about }}</a></li>
              <li><a href="#services">{{ language.services }}</a></li>
              <li><a href="#team">{{ language.team }}</a></li>
              <li><a href="#contact">{{ language.contact }}</a></li>
              <li class="menu-has-children"><a href="javascript:">{{datalanguage}}</a>
                <ul>
                  <li @click="languagecountry('vi')"><a href="javascript:" v-text="language.LangVietnamese"></a></li>
                  <li @click="languagecountry('ja')"><a href="javascript:" v-text="language.LangJapanese"></a></li>
                  <li @click="languagecountry('en')"><a href="javascript:" v-text="language.LangEnglish"></a></li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <section class="cheo" id="seec">
        <div class="seec-container">
          <div class="wow fadeInUp" data-wow-delay="1s">
            <h1>{{ language.seec_p1 }}</h1>
            <h2>{{ language.seec_p2 }}</h2>
          </div>
          <div class="wow fadeInUp" data-wow-delay="1s"><a class="btn-get-started" href="#about">{{ language.seec_p3 }}</a></div>
        </div>
      </section>
      <div class="clearfix"></div>
      <section class="cheo" id="about">
        <div class="container">
          <div class="title-main wow fadeInDown" data-wow-delay="0.2s">
            <h2 class="text-primary">{{ language.about }}</h2>
          </div>
          <div class="row">
            <div class="col-lg-7 wow fadeInLeft" data-wow-delay="0.6s">
              <div class="text-about">
                <p>{{ language.about_p1 }}</p>
                <p>{{ language.about_p2 }}</p>
                <p>{{ language.about_p3 }}</p>
                <p>{{ language.about_p4 }}</p>
                <p><a href="https://se-ec.co.jp/company/culture/">{{ language.readmore }}</a></p>
              </div>
            </div>
            <div class="col-lg-4 right wow fadeInRight" data-wow-delay="0.6s">
              <figure class="block-img-video-1 aos-init aos-animate" data-aos="fade"><a class="popup-vimeo" href="https://vimeo.com/45830194"><span class="icon"><span class="icon-play"></span></span><img class="img-fluid" src="img/about.png" alt="Image"></a></figure>
            </div>
          </div>
        </div>
      </section>
      <div class="clearfix"></div>
      <section class="cheo" id="services">
        <div class="container">
          <div class="title-main">
            <h2 class="wow fadeInDown" data-wow-delay="0.2s">{{ language.services }}</h2>
          </div>
          <div class="row">
            <div class="col-lg-4">
              <div class="item-services wow fadeInUp" data-wow-delay="0.2s"><a class="eff-shine" href="https://se-ec.co.jp/service/webadvertising/">
                  <figure class="services-image"><img src="https://se-ec.co.jp/assets/images/service01.jpg" alt="WEB &amp; ADVERTISING"></figure>
                  <h3 class="services-item-title">{{ language.services_p1 }}</h3></a></div>
            </div>
            <div class="col-lg-4">
              <div class="item-services wow fadeInUp" data-wow-delay="0.4s"><a class="eff-shine" href="https://se-ec.co.jp/service/travelmedia/">
                  <figure class="services-image"><img src="https://se-ec.co.jp/assets/images/service02.jpg" alt="TRAVEL &amp; MEDIA"></figure>
                  <h3 class="services-item-title">{{ language.services_p2 }}</h3></a></div>
            </div>
            <div class="col-lg-4">
              <div class="item-services wow fadeInUp" data-wow-delay="0.6s"><a class="eff-shine" href="https://se-ec.co.jp/service/appgame/">
                  <figure class="services-image"><img src="https://se-ec.co.jp/assets/images/service03.jpg" alt="APP &amp; GAME"></figure>
                  <h3 class="services-item-title">{{ language.services_p3 }}</h3></a></div>
            </div>
          </div>
        </div>
      </section>
      <div class="clearfix"></div>
      <section id="team">
        <div class="container">
          <div class="title-main">
            <h2 class="section-title wow fadeInDown" data-wow-delay="0.2s">{{ language.team }}</h2>
          </div>
          <div class="row">
            <div class="team-slider">
              <div class="col-lg-3">
                <div class="member wow zoomIn" data-wow-delay="0.2s">
                  <div class="pic"><img src="img/team-1.jpg" alt=""></div>
                  <h4>Walter White</h4><span>Chief Executive Officer</span>
                </div>
              </div>
              <div class="col-lg-3">
                <div class="member wow zoomIn" data-wow-delay="0.2s">
                  <div class="pic"><img src="img/team-1.jpg" alt=""></div>
                  <h4>Walter White</h4><span>Chief Executive Officer</span>
                </div>
              </div>
              <div class="col-lg-3">
                <div class="member wow zoomIn" data-wow-delay="0.2s">
                  <div class="pic"><img src="img/team-1.jpg" alt=""></div>
                  <h4>Sarah Jhinson</h4><span>Product Manager</span>
                </div>
              </div>
              <div class="col-lg-3">
                <div class="member wow zoomIn" data-wow-delay="0.2s">
                  <div class="pic"><img src="img/team-1.jpg" alt=""></div>
                  <h4>William Anderson</h4><span>CTO</span>
                </div>
              </div>
              <div class="col-lg-3">
                <div class="member wow zoomIn" data-wow-delay="0.2s">
                  <div class="pic"><img src="img/team-1.jpg" alt=""></div>
                  <h4>Amanda Jepson</h4><span>Accountant</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="cheo" id="contact">
        <div class="container">
          <div class="title-main">
            <h2 class="wow fadeInDown" data-wow-delay="0.2s">{{ language.contact }}</h2>
          </div>
          <div class="wp-contact">
            <div class="col-lg-7 p0 wow zoomIn" data-wow-delay="0.4s">
              <div class="form">
                <div id="errormessage"></div>
                <form class="contactForm" action="" method="post" role="form">
                  <div class="wp-form">
                    <div class="form-group">
                      <input class="form-control" id="name" type="text" name="name" v-bind:placeholder="language.contact_p1" required="required" data-msg="Please enter at least 4 chars">
                    </div>
                    <div class="form-group">
                      <input class="form-control" id="email" type="email" name="email" v-bind:placeholder="language.contact_p2" required="required" data-msg="Please enter a valid email">
                    </div>
                    <div class="form-group">
                      <input class="form-control" id="subject" type="text" name="subject" v-bind:placeholder="language.contact_p3" required="required" data-msg="Please enter at least 8 chars of subject">
                    </div>
                    <div class="form-group">
                      <textarea class="form-control" name="message" rows="5" required="required" data-msg="Please write something for us" v-bind:placeholder="language.contact_p4"></textarea>
                    </div>
                    <div class="text-center">
                      <button type="submit">{{ language.contact_p5 }}</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="col-lg-5 p0 wow zoomIn" data-wow-delay="0.4s">
              <div class="contact-info">
                <h2>{{ language.contact_p6 }}</h2>
                <ul>
                  <li class="company-name">SEEC Vietnam co., ltd</li>
                  <li>6th Floor, on 49 Hoang Van Thu, Ward 15, Phu Nhuan District, Ho Chi Minh City</li>
                  <li>028-3995-3895</li>
                  <li>info@se-ec.com.vn</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="map"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.1595389182044!2d106.67676931452948!3d10.799090261728537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528d7a8bff351%3A0xd38cf31099e4bc26!2zNDkgSG_DoG5nIFbEg24gVGjhu6UsIFBoxrDhu51uZyAxNSwgUGjDuiBOaHXhuq1uLCBI4buTIENow60gTWluaCwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1563507576587!5m2!1sen!2s" width="100%" height="410" frameborder="0" style="border:0" allowfullscreen></iframe></div>
      </section>
      <section id="footer">
        <div class="info-copany">
          <h1>SEEC VIETNAM COMPANY LIMITED</h1>
          <p>6th Floor, on 49 Hoang Van Thu, Ward 15, Phu Nhuan District, Ho Chi Minh City</p>
          <p>TEL：028-3995-3895 | FAX：028-3995-3896</p>
        </div>
        <div class="social"><a href=""><img src="img/facebook.png" alt=""></a><a href=""><img src="img/twitter.png" alt=""></a><a href=""><img src="img/linkedin.png" alt=""></a></div>
        <div class="copy">
          <p>© Copyright SEEC . All Rights Reserved</p>
          <p>Designed by SEEC Việt Nam</p>
        </div>
      </section>
      <section id="particles"></section>
    </div>
    <script src="js/jquery-3.4.1.min.js"></script>
    <script src="js/slick.min.js"></script>
    <script src="js/wow.min.js"></script>
    <script src="js/particles.min.js"></script>
    <script src="js/language.js"></script>
    <script src="js/vue.js"></script>
    <script src="js/default.js"></script>
  </body>
</html>