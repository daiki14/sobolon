$(function() {
  $( '.drawer' ).drawer()

  //スムすスクロール
  // #から始まるURLがクリックされた時
  $('a[href^="#"]').click(function() {
    // 移動速度を指定（ミリ秒）
    let speed = 300;
    // hrefで指定されたidを取得
    let id = $(this).attr("href");
    // idの値が#のみだったらターゲットをhtmlタグにしてトップへ戻るようにする
    let target = $("#" == id ? "html" : id);
    // ページのトップを基準にターゲットの位置を取得
    let position = $(target).offset().top;
    // ターゲットの位置までspeedの速度で移動
    $("html, body").animate(
      {
        scrollTop: position - $('#js-header').outerHeight()
    },
      speed
    );
    return false;
  });

  //wow.js
  new WOW().init()

  //googleform
  let $form = $( '#js-form' )
  $form.submit(function(e) { 
    $.ajax({ 
     url: $form.attr('action'), 
     data: $form.serialize(), 
     type: "POST", 
     dataType: "xml", 
     statusCode: { 
        0: function() { 
          //送信に成功したときの処理 
          $form.slideUp()
          $( '#js-success' ).slideDown()
        }, 
        200: function() { 
          //送信に失敗したときの処理 
          $form.slideUp()
          $( '#js-error' ).slideDown()
        }
      } 
    });
    return false; 
  }); 

  //formの入力情報
  let $submit = $( '#js-submit' )
  $( '#js-form input, #js-from textarea' ).on('change', function() {
    if(
      $('#js-from input[type="text"]').val() !==""&&
      $('#js-from input[type="email"]').val() !==""&&
      $('#js-from input[type="entry.472270186"]').prop('checked') ===true
    ) {
      $submit.addClass( '-active' )
    } else {
      $submit.removeClass( '-active' )
    }
  })
})