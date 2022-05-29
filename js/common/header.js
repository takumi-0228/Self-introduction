

// ハンバーガーメニューへの切り替え

// $(function () {
//     $('.menuButton').click(function () {　//クリック処理
//         //toggleClassメソッドは 指定したクラス名の CSS がある場合は削除を行い、なければ追加する というメソッド
//         $(this).toggleClass('active');
//         //対象のHTML要素にそのクラスがあるかを確認できます
//         if ($(this).hasClass('active')) {
//             $('.spStyle').addClass('active');
//         } else {
//             $('.spStyle').removeClass('active');
//         }
//     });
// });





//---------------- モーダル-----------

$(function () {

    var nowModalSyncer = null;		//現在開かれているモーダルコンテンツ
    var modalClassSyncer = "modal-syncer";		//モーダルを開くリンクに付けるクラス名

    //モーダルのリンクを取得する
    var modals = document.getElementsByClassName(modalClassSyncer);

    //モーダルウィンドウを出現させるクリックイベント
    for (var i = 0, l = modals.length; l > i; i++) {

        //全てのリンクにタッチイベントを設定する
        modals[i].onclick = function () {

            //ボタンからキーボードフォーカスを外す
            this.blur();

            //ターゲットとなるコンテンツ
            var target = this.getAttribute("data-target");

            //ターゲットが存在しなければ終了
            if (typeof (target) == "undefined" || !target || target == null) {
                return false;
            }

            //コンテンツとなる要素を取得
            nowModalSyncer = document.getElementById(target);

            //ターゲットが存在しなければ終了
            if (nowModalSyncer == null) {
                return false;
            }

            //キーボード操作などにより、オーバーレイが多重起動するのを防止する
            //新しくモーダルウィンドウを起動しない
            if ($("#modal-overlay")[0]) return false;		

            //オーバーレイを出現させる
            $("body").append('<div id="modal-overlay"></div>');
            $("#modal-overlay").fadeIn( "slow");

            //コンテンツをセンタリングする
            centeringModalSyncer();

            //コンテンツをフェードインする
            $(nowModalSyncer).fadeIn("slow");

            //[#modal-overlay]、または[#modal-close]をクリックしたら…
            $("#modal-overlay,#modal-close").unbind().click(function () {

                //[#modal-content]と[#modal-overlay]をフェードアウトした後に…
                $("#" + target + ",#modal-overlay").fadeOut("fast", function () {

                    //[#modal-overlay]を削除する
                    $('#modal-overlay').remove();

                });

                //現在のコンテンツ情報を削除
                nowModalSyncer = null;

            });

        }

    }

    //リサイズされたら、センタリングをする関数[centeringModalSyncer()]を実行する
    $(window).resize(centeringModalSyncer);

    //センタリングを実行する関数
    function centeringModalSyncer() {

        //モーダルウィンドウが開いてなければ終了
        if (nowModalSyncer == null) return false;

        //画面(ウィンドウ)の幅、高さを取得
        var w = $(window).width();
        var h = $(window).height();

        var cw = $(nowModalSyncer).outerWidth();
        var ch = $(nowModalSyncer).outerHeight();

        //センタリングを実行する
        $(nowModalSyncer).css({ "left": ((w - cw) / 2) + "px", "top": ((h - ch) / 2) + "px" });

    }

});

//ヘッダーの読み込み時の処理
window.onload = function () {
    
    //ロードアニメーションをこのサイトに一回目訪れたときのみロードアニメーションを動かす
    if (sessionStorage.getItem('loadingAnimation')) {
            //ロードアニメーションを行わない
            $('#loading_wrapper').css('display', 'none');
    }else{
        setTimeout(function () {
            //ロードアニメーション後　ロードアニメーション画面を消す。

        }, 3000);
        
        console.log("loadinganimation--------");
    }
    
    sessionStorage.setItem('loadingAnimation', "true");
// -----言語切り替え-----
    // 他の画面での言語
    if (sessionStorage.getItem('language')) {
        if (sessionStorage.getItem('language') == "japanese") {
            japanese();
        } else if (sessionStorage.getItem('language') == "english") {
            english();
        }
    } else {//初めて開いた場合は日本語
        sessionStorage.setItem('language', "japanese");
        $('.english').css('display', 'none');
    }
    // 日本語英語切り替えデザイン
    $(".toggle").on("click", function () {
        if (sessionStorage.getItem('language') == "japanese"){
            english();
        } else if (sessionStorage.getItem('language') == "english") {
            japanese();
        }
    });
}
//日本語に切り替える処理
function japanese() {
    $(".toggle").removeClass("checked");
    //日本語の要素を表示する
    $('.japanese').css('display', 'block');
    //英語の要素を非表示にする
    $('.english').css('display', 'none');
    //日本語で表示していることをsessionStorageに保存する。
    sessionStorage.setItem('language', "japanese");
}
function english() {
    $(".toggle").toggleClass("checked");
    //日本語の要素を非表示する
    $('.japanese').css('display', 'none');
    //英語の要素を表示にする
    $('.english').css('display', 'block');
    //英語で表示していることをsessionStorageに保存する。
    sessionStorage.setItem('language', "english");
}