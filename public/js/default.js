window.onload = function() {
  var vue = new Vue({
    el: "#page",
    data: {
      datalanguage: "English",
      langshow: false,
      language: language.en
    },
    methods: {
      showlanguage() {
        this.langshow ? (this.langshow = false) : (this.langshow = true);
      },
      languagecountry(lan) {
        this.showlanguage();
        if (lan == "en") {
          this.language = language.en;
          this.datalanguage = this.language.LangEnglish;
        } else if (lan == "ja") {
          this.language = language.ja;
          this.datalanguage = this.language.LangJapanese;
        } else if (lan == "vi") {
          this.language = language.vi;
          this.datalanguage = this.language.LangVietnamese;
        }
      }
    },
    mounted() {
      // wow animation
      new WOW().init({
        mobile: false
      });

      // fixed menu
      $(window).scroll(function() {
        if ($(this).scrollTop() > 80) {
          $("#header").addClass("header-fixed");
        } else {
          $("#header").removeClass("header-fixed");
        }
      });

      // remove loading
      setTimeout(function() {
        $(".loading").fadeOut(400);
      }, 800);

      $('a[href^="#"]').on("click", function() {
        $(".nav-menu li a").removeClass("active");
        $(this).addClass("active");
        var e = $(this).attr("href"),
          a = $("#top" === e || "#" === e || "" === e ? "html" : e),
          t = $("#header").outerHeight(),
          i = a.offset().top - t;
        if (e == "#contact") {
          i = i + 110;
        }
        return (
          $("body html").is(":animated") ||
            $("body,html")
              .stop()
              .animate({ scrollTop: i }, 800, "swing"),
          !1
        );
      });

      //menu
      $("#mobile-nav-toggle").click(function() {
        $(this).toggleClass("active");
        $("#nav-mobile").toggleClass("active");
      });
      $("#nav-mobile .menu-has-children > a").click(function() {
        $(this)
          .siblings("ul")
          .slideToggle();
      });

      //   slider team
      $(".team-slider").slick({
        slidesToShow: 4,
        arrows: !1,
        swipeToSlide: !0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2
            }
          }
        ]
      });

      // particles
      particlesJS("particles", {
        particles: {
          number: { value: 80, density: { enable: !0, value_area: 800 } },
          color: { value: "#ffffff" },
          shape: {
            type: "circle",
            stroke: { width: 0, color: "#000000" },
            polygon: { nb_sides: 5 },
            image: { src: "img/github.svg", width: 100, height: 100 }
          },
          opacity: {
            value: 0.5,
            random: !1,
            anim: { enable: !1, speed: 1, opacity_min: 0.1, sync: !1 }
          },
          size: {
            value: 2,
            random: !0,
            anim: { enable: !1, speed: 30, size_min: 0.1, sync: !1 }
          },
          line_linked: {
            enable: !0,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: !0,
            speed: 2,
            direction: "none",
            random: !1,
            straight: !1,
            out_mode: "out",
            bounce: !1,
            attract: { enable: !1, rotateX: 600, rotateY: 1200 }
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: !0, mode: "grab" },
            onclick: { enable: !0, mode: "push" },
            resize: !0
          },
          modes: {
            grab: { distance: 140, line_linked: { opacity: 1 } },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3
            },
            repulse: { distance: 200, duration: 0.4 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 }
          }
        },
        retina_detect: !0
      });
    }
  });
};
