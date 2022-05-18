//**************************************
//ヘッダー
//**************************************
function header(){
    $.ajax({
        url: '../../html/common/header.html',
        cache: false,
        async: false,
        dataType: 'html',
        success: function(html){
            document.write(html);
        }
    });
}
// // //**************************************
// // //フッター
// // //**************************************
// function footer(){
//     $.ajax({
//         url: '../../html/common/footer.html',
//         cache: false,
//         async: false,
//         dataType: 'html',
//         success: function(html){
//             document.write(html);
//         }
//     });
// }


// $(function() {
//     $.ajax({
//       url: './header.html', // includeしたいファイルのパスを指定
//       dataType: 'html', // htmlのまま
//       // 読み込み成功時の処理
//       success: function (data) {
//         $('body').prepend(data);
//       },
//       // 読み込み失敗時の処理
//       error: function () {
//         alert('header error!');
//       },
//     });
//   });

  
//   $(function(){
//     $("#box").load("./header.html");
// });