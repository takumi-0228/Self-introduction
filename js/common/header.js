// $(window).on('load resize', function(){
//     var winW = $(window).width();
//     var devW = 767;//*「768px」がタブレットの最小幅だからです。 */
//     if (winW <= devW) {
//       //767px以下の時の処理
//       alert("dddd");
//     } else {
//       //768pxより大きい時の処理

//     }
//   });

// ハンバーガーメニューへの切り替え

  $(function() {//HTML要素を読み込んでからjQueryを実行する
    $('.menu-btn').click(function() {　//クリック処理
        $(this).toggleClass('active');//toggleClassメソッドは 指定したクラス名の CSS がある場合は削除を行い、なければ追加する というメソッド
 
        if ($(this).hasClass('active')) {//対象のHTML要素にそのクラスがあるかを確認できます
            $('.gnavi__sp-style').addClass('active');
        } else {
            $('.gnavi__sp-style').removeClass('active');
        }
    });

    popupImage();//移動
});

// 連絡先ポップアップ
function popupImage() {
    var popup = document.getElementById('js-popup');
    if(!popup) return;
  
    var blackBg = document.getElementById('js-black-bg');
    var closeBtn = document.getElementById('js-close-btn');
    var showBtn = document.getElementById('js-show-popup');
  
    closePopUp(blackBg);
    closePopUp(closeBtn);
    closePopUp(showBtn);
    function closePopUp(elem) {
      if(!elem) return;
      elem.addEventListener('click', function() {
        popup.classList.toggle('is-show');
      });
    }
  }
