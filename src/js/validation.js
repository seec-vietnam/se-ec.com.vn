$(function(){

   // フォームバリデーションチェック
   $("#chk").submit(function(){
      // 初期化
      $("p.error").remove();

      // Validation対象のクラス名
      var obj      = $(".require");
      // 利用規約に同意
      var agree   = $("#agree");
      var ret     = true;
      var ret_radio = true;
      var ret_chkbox = true;
      var ret_agree = true;
      var bgColor = "pink";
      var parentsName = "td";

      $.each(obj, function() {
         if($(this).attr("type") == "radio"){
            if($(this).is(":checked")){
               var val = $(this).filter(":checked").val();
               if($(this).parents(parentsName).children('.error').length){
                  ret_radio = true;
                  $(this).parents(parentsName).children('.error').remove();
               }
            }else{
               if(!$(this).parent().children('.error').length){
                  if(!$(this).prevAll('input[type=radio]').is(":checked")){
                     ret_radio = false;
                     $(this).parents(parentsName).prepend("<p class='error'>※必須項目です</p>");
                  }
               }
            }
         }else if($(this).attr("type") == "checkbox"){
            if($("input[group='group1']:checked").length > 0){
               if($(this).parents(parentsName).children('.error').length){
                  ret_chkbox = true;
                  $(this).parents(parentsName).children('.error').remove();
               }
            }else{
               if(!$(this).parents(parentsName).children('.error').length){
                  if(!$(this).prevAll('input[type=radio]').is(":checked")){
                     ret_chkbox = false;
                     $(this).parents(parentsName).prepend("<p class='error'>※必須項目です</p>");
                  }
               }
            }
         }else{
            var val = $(this).val();
            if( !val ) {
               $(this).css('background-color', bgColor);
               ret = false;
               if(!$(this).parents(parentsName).children('.error').length){
                  $(this).parents(parentsName).prepend("<p class='error'>※必須項目です</p>");
               }
               //miss = "未入力の項目があります。"
            } else {
               $(this).css('background-color', 'white');
            }
         }

         var name   = $(this).attr("name");
         var type   = $(this).attr("type");

         if($(this).attr("id") == "tel") {
             if($(this).val() && !$(this).val().match(/^[0-9-]{7,13}$/)){
                 $(this).css('background-color', bgColor);
                 ret = false;
                 $(this).parents(parentsName).prepend("<p class='error'>※正しい電話番号を入力してください</p>");
             }
         }

         if($(this).attr("id") == "mail") {
            if($(this).val() && !$(this).val().match(/.+@.+\..+/g)){
               $(this).css('background-color', bgColor);
               ret = false;
               $(this).parents(parentsName).prepend("<p class='error'>※正しいメールアドレスを入力してください</p>");
               //miss = "正しいメールアドレスを入力してください。"
            }
         }

         if($(this).attr("id") == "confirm-mail") {
            if($(this).val() != $('#mail').val()){
               $(this).css('background-color', bgColor);
               ret = false;
               $(this).parents(parentsName).prepend("<p class='error'>※同じメールアドレスを入力してください</p>");
               //miss = "同じメールアドレスを入力してください。"
            }
         }
      });

      if(!$("#agree").prop('checked')) {
        $("#agree").before("<p class='error'>※必須項目です</p>");
        ret_agree = false;
      } else {
        ret_agree = true;
      }

      if( ret === false || ret_radio === false || ret_chkbox === false || ret_agree === false ) {
         $('body,html').animate({scrollTop:($('.error:first').offset().top - 90)}, 800, 'swing');
         return false;
      } else {
         return true;
      }
   });
});
