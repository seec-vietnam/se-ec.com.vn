$(function(){$("#chk").submit(function(){$("p.error").remove();var r=$(".require"),e=($("#agree"),!0),t=!0,s=!0,i=!0,h="pink",p="td";return $.each(r,function(){if("radio"==$(this).attr("type"))if($(this).is(":checked")){$(this).filter(":checked").val();$(this).parents(p).children(".error").length&&(t=!0,$(this).parents(p).children(".error").remove())}else $(this).parent().children(".error").length||$(this).prevAll("input[type=radio]").is(":checked")||(t=!1,$(this).parents(p).prepend("<p class='error'>※必須項目です</p>"));else if("checkbox"==$(this).attr("type"))0<$("input[group='group1']:checked").length?$(this).parents(p).children(".error").length&&(s=!0,$(this).parents(p).children(".error").remove()):$(this).parents(p).children(".error").length||$(this).prevAll("input[type=radio]").is(":checked")||(s=!1,$(this).parents(p).prepend("<p class='error'>※必須項目です</p>"));else{$(this).val()?$(this).css("background-color","white"):($(this).css("background-color",h),e=!1,$(this).parents(p).children(".error").length||$(this).parents(p).prepend("<p class='error'>※必須項目です</p>"))}$(this).attr("name"),$(this).attr("type");"tel"==$(this).attr("id")&&$(this).val()&&!$(this).val().match(/^[0-9-]{7,13}$/)&&($(this).css("background-color",h),e=!1,$(this).parents(p).prepend("<p class='error'>※正しい電話番号を入力してください</p>")),"mail"==$(this).attr("id")&&$(this).val()&&!$(this).val().match(/.+@.+\..+/g)&&($(this).css("background-color",h),e=!1,$(this).parents(p).prepend("<p class='error'>※正しいメールアドレスを入力してください</p>")),"confirm-mail"==$(this).attr("id")&&$(this).val()!=$("#mail").val()&&($(this).css("background-color",h),e=!1,$(this).parents(p).prepend("<p class='error'>※同じメールアドレスを入力してください</p>"))}),$("#agree").prop("checked")?i=!0:($("#agree").before("<p class='error'>※必須項目です</p>"),i=!1),!1!==e&&!1!==t&&!1!==s&&!1!==i||($("body,html").animate({scrollTop:$(".error:first").offset().top-90},800,"swing"),!1)})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzL3ZhbGlkYXRpb24uanMiXSwibmFtZXMiOlsiJCIsInN1Ym1pdCIsInJlbW92ZSIsIm9iaiIsInJldCIsInJldF9yYWRpbyIsInJldF9jaGtib3giLCJyZXRfYWdyZWUiLCJiZ0NvbG9yIiwicGFyZW50c05hbWUiLCJlYWNoIiwidGhpcyIsImF0dHIiLCJpcyIsImZpbHRlciIsInZhbCIsInBhcmVudHMiLCJjaGlsZHJlbiIsImxlbmd0aCIsInBhcmVudCIsInByZXZBbGwiLCJwcmVwZW5kIiwiY3NzIiwibWF0Y2giLCJwcm9wIiwiYmVmb3JlIiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsIm9mZnNldCIsInRvcCJdLCJtYXBwaW5ncyI6IkFBQUFBLEVBQUUsV0FHQ0EsRUFBRSxRQUFRQyxPQUFPLFdBRWRELEVBQUUsV0FBV0UsU0FHYixJQUFJQyxFQUFXSCxFQUFFLFlBR2JJLEdBRFVKLEVBQUUsV0FDRixHQUNWSyxHQUFZLEVBQ1pDLEdBQWEsRUFDYkMsR0FBWSxFQUNaQyxFQUFVLE9BQ1ZDLEVBQWMsS0FtRmxCLE9BakZBVCxFQUFFVSxLQUFLUCxFQUFLLFdBQ1QsR0FBMkIsU0FBeEJILEVBQUVXLE1BQU1DLEtBQUssUUFDYixHQUFHWixFQUFFVyxNQUFNRSxHQUFHLFlBQVksQ0FDYmIsRUFBRVcsTUFBTUcsT0FBTyxZQUFZQyxNQUNsQ2YsRUFBRVcsTUFBTUssUUFBUVAsR0FBYVEsU0FBUyxVQUFVQyxTQUNoRGIsR0FBWSxFQUNaTCxFQUFFVyxNQUFNSyxRQUFRUCxHQUFhUSxTQUFTLFVBQVVmLGVBRy9DRixFQUFFVyxNQUFNUSxTQUFTRixTQUFTLFVBQVVDLFFBQ2pDbEIsRUFBRVcsTUFBTVMsUUFBUSxxQkFBcUJQLEdBQUcsY0FDekNSLEdBQVksRUFDWkwsRUFBRVcsTUFBTUssUUFBUVAsR0FBYVksUUFBUSxzQ0FJM0MsR0FBMkIsWUFBeEJyQixFQUFFVyxNQUFNQyxLQUFLLFFBQzRCLEVBQTVDWixFQUFFLGlDQUFpQ2tCLE9BQ2hDbEIsRUFBRVcsTUFBTUssUUFBUVAsR0FBYVEsU0FBUyxVQUFVQyxTQUNoRFosR0FBYSxFQUNiTixFQUFFVyxNQUFNSyxRQUFRUCxHQUFhUSxTQUFTLFVBQVVmLFVBRy9DRixFQUFFVyxNQUFNSyxRQUFRUCxHQUFhUSxTQUFTLFVBQVVDLFFBQzdDbEIsRUFBRVcsTUFBTVMsUUFBUSxxQkFBcUJQLEdBQUcsY0FDekNQLEdBQWEsRUFDYk4sRUFBRVcsTUFBTUssUUFBUVAsR0FBYVksUUFBUSxxQ0FJNUMsQ0FDUXJCLEVBQUVXLE1BQU1JLE1BU2ZmLEVBQUVXLE1BQU1XLElBQUksbUJBQW9CLFVBUGhDdEIsRUFBRVcsTUFBTVcsSUFBSSxtQkFBb0JkLEdBQ2hDSixHQUFNLEVBQ0ZKLEVBQUVXLE1BQU1LLFFBQVFQLEdBQWFRLFNBQVMsVUFBVUMsUUFDakRsQixFQUFFVyxNQUFNSyxRQUFRUCxHQUFhWSxRQUFRLGlDQVFqQ3JCLEVBQUVXLE1BQU1DLEtBQUssUUFDYlosRUFBRVcsTUFBTUMsS0FBSyxRQUVELE9BQXRCWixFQUFFVyxNQUFNQyxLQUFLLE9BQ1RaLEVBQUVXLE1BQU1JLFFBQVVmLEVBQUVXLE1BQU1JLE1BQU1RLE1BQU0sb0JBQ3JDdkIsRUFBRVcsTUFBTVcsSUFBSSxtQkFBb0JkLEdBQ2hDSixHQUFNLEVBQ05KLEVBQUVXLE1BQU1LLFFBQVFQLEdBQWFZLFFBQVEsMkNBSXBCLFFBQXRCckIsRUFBRVcsTUFBTUMsS0FBSyxPQUNWWixFQUFFVyxNQUFNSSxRQUFVZixFQUFFVyxNQUFNSSxNQUFNUSxNQUFNLGdCQUN0Q3ZCLEVBQUVXLE1BQU1XLElBQUksbUJBQW9CZCxHQUNoQ0osR0FBTSxFQUNOSixFQUFFVyxNQUFNSyxRQUFRUCxHQUFhWSxRQUFRLDhDQUtsQixnQkFBdEJyQixFQUFFVyxNQUFNQyxLQUFLLE9BQ1ZaLEVBQUVXLE1BQU1JLE9BQVNmLEVBQUUsU0FBU2UsUUFDNUJmLEVBQUVXLE1BQU1XLElBQUksbUJBQW9CZCxHQUNoQ0osR0FBTSxFQUNOSixFQUFFVyxNQUFNSyxRQUFRUCxHQUFhWSxRQUFRLCtDQU0xQ3JCLEVBQUUsVUFBVXdCLEtBQUssV0FJbkJqQixHQUFZLEdBSFpQLEVBQUUsVUFBVXlCLE9BQU8sZ0NBQ25CbEIsR0FBWSxJQUtGLElBQVJILElBQStCLElBQWRDLElBQXNDLElBQWZDLElBQXNDLElBQWRDLElBQ2pFUCxFQUFFLGFBQWEwQixRQUFRLENBQUNDLFVBQVczQixFQUFFLGdCQUFnQjRCLFNBQVNDLElBQU0sSUFBTSxJQUFLLFVBQ3hFIiwiZmlsZSI6ImpzL3ZhbGlkYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKGZ1bmN0aW9uKCl7XG5cbiAgIC8vIOODleOCqeODvOODoOODkOODquODh+ODvOOCt+ODp+ODs+ODgeOCp+ODg+OCr1xuICAgJChcIiNjaGtcIikuc3VibWl0KGZ1bmN0aW9uKCl7XG4gICAgICAvLyDliJ3mnJ/ljJZcbiAgICAgICQoXCJwLmVycm9yXCIpLnJlbW92ZSgpO1xuXG4gICAgICAvLyBWYWxpZGF0aW9u5a++6LGh44Gu44Kv44Op44K55ZCNXG4gICAgICB2YXIgb2JqICAgICAgPSAkKFwiLnJlcXVpcmVcIik7XG4gICAgICAvLyDliKnnlKjopo/ntITjgavlkIzmhI9cbiAgICAgIHZhciBhZ3JlZSAgID0gJChcIiNhZ3JlZVwiKTtcbiAgICAgIHZhciByZXQgICAgID0gdHJ1ZTtcbiAgICAgIHZhciByZXRfcmFkaW8gPSB0cnVlO1xuICAgICAgdmFyIHJldF9jaGtib3ggPSB0cnVlO1xuICAgICAgdmFyIHJldF9hZ3JlZSA9IHRydWU7XG4gICAgICB2YXIgYmdDb2xvciA9IFwicGlua1wiO1xuICAgICAgdmFyIHBhcmVudHNOYW1lID0gXCJ0ZFwiO1xuXG4gICAgICAkLmVhY2gob2JqLCBmdW5jdGlvbigpIHtcbiAgICAgICAgIGlmKCQodGhpcykuYXR0cihcInR5cGVcIikgPT0gXCJyYWRpb1wiKXtcbiAgICAgICAgICAgIGlmKCQodGhpcykuaXMoXCI6Y2hlY2tlZFwiKSl7XG4gICAgICAgICAgICAgICB2YXIgdmFsID0gJCh0aGlzKS5maWx0ZXIoXCI6Y2hlY2tlZFwiKS52YWwoKTtcbiAgICAgICAgICAgICAgIGlmKCQodGhpcykucGFyZW50cyhwYXJlbnRzTmFtZSkuY2hpbGRyZW4oJy5lcnJvcicpLmxlbmd0aCl7XG4gICAgICAgICAgICAgICAgICByZXRfcmFkaW8gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnRzKHBhcmVudHNOYW1lKS5jaGlsZHJlbignLmVycm9yJykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgIGlmKCEkKHRoaXMpLnBhcmVudCgpLmNoaWxkcmVuKCcuZXJyb3InKS5sZW5ndGgpe1xuICAgICAgICAgICAgICAgICAgaWYoISQodGhpcykucHJldkFsbCgnaW5wdXRbdHlwZT1yYWRpb10nKS5pcyhcIjpjaGVja2VkXCIpKXtcbiAgICAgICAgICAgICAgICAgICAgIHJldF9yYWRpbyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnRzKHBhcmVudHNOYW1lKS5wcmVwZW5kKFwiPHAgY2xhc3M9J2Vycm9yJz7igLvlv4XpoIjpoIXnm67jgafjgZk8L3A+XCIpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgfWVsc2UgaWYoJCh0aGlzKS5hdHRyKFwidHlwZVwiKSA9PSBcImNoZWNrYm94XCIpe1xuICAgICAgICAgICAgaWYoJChcImlucHV0W2dyb3VwPSdncm91cDEnXTpjaGVja2VkXCIpLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgICAgaWYoJCh0aGlzKS5wYXJlbnRzKHBhcmVudHNOYW1lKS5jaGlsZHJlbignLmVycm9yJykubGVuZ3RoKXtcbiAgICAgICAgICAgICAgICAgIHJldF9jaGtib3ggPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnRzKHBhcmVudHNOYW1lKS5jaGlsZHJlbignLmVycm9yJykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgIGlmKCEkKHRoaXMpLnBhcmVudHMocGFyZW50c05hbWUpLmNoaWxkcmVuKCcuZXJyb3InKS5sZW5ndGgpe1xuICAgICAgICAgICAgICAgICAgaWYoISQodGhpcykucHJldkFsbCgnaW5wdXRbdHlwZT1yYWRpb10nKS5pcyhcIjpjaGVja2VkXCIpKXtcbiAgICAgICAgICAgICAgICAgICAgIHJldF9jaGtib3ggPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50cyhwYXJlbnRzTmFtZSkucHJlcGVuZChcIjxwIGNsYXNzPSdlcnJvcic+4oC75b+F6aCI6aCF55uu44Gn44GZPC9wPlwiKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdmFyIHZhbCA9ICQodGhpcykudmFsKCk7XG4gICAgICAgICAgICBpZiggIXZhbCApIHtcbiAgICAgICAgICAgICAgICQodGhpcykuY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJywgYmdDb2xvcik7XG4gICAgICAgICAgICAgICByZXQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgIGlmKCEkKHRoaXMpLnBhcmVudHMocGFyZW50c05hbWUpLmNoaWxkcmVuKCcuZXJyb3InKS5sZW5ndGgpe1xuICAgICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnRzKHBhcmVudHNOYW1lKS5wcmVwZW5kKFwiPHAgY2xhc3M9J2Vycm9yJz7igLvlv4XpoIjpoIXnm67jgafjgZk8L3A+XCIpO1xuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgLy9taXNzID0gXCLmnKrlhaXlipvjga7poIXnm67jgYzjgYLjgorjgb7jgZnjgIJcIlxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICQodGhpcykuY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJywgJ3doaXRlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICB9XG5cbiAgICAgICAgIHZhciBuYW1lICAgPSAkKHRoaXMpLmF0dHIoXCJuYW1lXCIpO1xuICAgICAgICAgdmFyIHR5cGUgICA9ICQodGhpcykuYXR0cihcInR5cGVcIik7XG5cbiAgICAgICAgIGlmKCQodGhpcykuYXR0cihcImlkXCIpID09IFwidGVsXCIpIHtcbiAgICAgICAgICAgICBpZigkKHRoaXMpLnZhbCgpICYmICEkKHRoaXMpLnZhbCgpLm1hdGNoKC9eWzAtOS1dezcsMTN9JC8pKXtcbiAgICAgICAgICAgICAgICAgJCh0aGlzKS5jc3MoJ2JhY2tncm91bmQtY29sb3InLCBiZ0NvbG9yKTtcbiAgICAgICAgICAgICAgICAgcmV0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50cyhwYXJlbnRzTmFtZSkucHJlcGVuZChcIjxwIGNsYXNzPSdlcnJvcic+4oC75q2j44GX44GE6Zu76Kmx55Wq5Y+344KS5YWl5Yqb44GX44Gm44GP44Gg44GV44GEPC9wPlwiKTtcbiAgICAgICAgICAgICB9XG4gICAgICAgICB9XG5cbiAgICAgICAgIGlmKCQodGhpcykuYXR0cihcImlkXCIpID09IFwibWFpbFwiKSB7XG4gICAgICAgICAgICBpZigkKHRoaXMpLnZhbCgpICYmICEkKHRoaXMpLnZhbCgpLm1hdGNoKC8uK0AuK1xcLi4rL2cpKXtcbiAgICAgICAgICAgICAgICQodGhpcykuY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJywgYmdDb2xvcik7XG4gICAgICAgICAgICAgICByZXQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICQodGhpcykucGFyZW50cyhwYXJlbnRzTmFtZSkucHJlcGVuZChcIjxwIGNsYXNzPSdlcnJvcic+4oC75q2j44GX44GE44Oh44O844Or44Ki44OJ44Os44K544KS5YWl5Yqb44GX44Gm44GP44Gg44GV44GEPC9wPlwiKTtcbiAgICAgICAgICAgICAgIC8vbWlzcyA9IFwi5q2j44GX44GE44Oh44O844Or44Ki44OJ44Os44K544KS5YWl5Yqb44GX44Gm44GP44Gg44GV44GE44CCXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgIH1cblxuICAgICAgICAgaWYoJCh0aGlzKS5hdHRyKFwiaWRcIikgPT0gXCJjb25maXJtLW1haWxcIikge1xuICAgICAgICAgICAgaWYoJCh0aGlzKS52YWwoKSAhPSAkKCcjbWFpbCcpLnZhbCgpKXtcbiAgICAgICAgICAgICAgICQodGhpcykuY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJywgYmdDb2xvcik7XG4gICAgICAgICAgICAgICByZXQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICQodGhpcykucGFyZW50cyhwYXJlbnRzTmFtZSkucHJlcGVuZChcIjxwIGNsYXNzPSdlcnJvcic+4oC75ZCM44GY44Oh44O844Or44Ki44OJ44Os44K544KS5YWl5Yqb44GX44Gm44GP44Gg44GV44GEPC9wPlwiKTtcbiAgICAgICAgICAgICAgIC8vbWlzcyA9IFwi5ZCM44GY44Oh44O844Or44Ki44OJ44Os44K544KS5YWl5Yqb44GX44Gm44GP44Gg44GV44GE44CCXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZighJChcIiNhZ3JlZVwiKS5wcm9wKCdjaGVja2VkJykpIHtcbiAgICAgICAgJChcIiNhZ3JlZVwiKS5iZWZvcmUoXCI8cCBjbGFzcz0nZXJyb3InPuKAu+W/hemgiOmgheebruOBp+OBmTwvcD5cIik7XG4gICAgICAgIHJldF9hZ3JlZSA9IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0X2FncmVlID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYoIHJldCA9PT0gZmFsc2UgfHwgcmV0X3JhZGlvID09PSBmYWxzZSB8fCByZXRfY2hrYm94ID09PSBmYWxzZSB8fCByZXRfYWdyZWUgPT09IGZhbHNlICkge1xuICAgICAgICAgJCgnYm9keSxodG1sJykuYW5pbWF0ZSh7c2Nyb2xsVG9wOigkKCcuZXJyb3I6Zmlyc3QnKS5vZmZzZXQoKS50b3AgLSA5MCl9LCA4MDAsICdzd2luZycpO1xuICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgfSk7XG59KTtcbiJdfQ==
