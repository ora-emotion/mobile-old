// // 动态更换头图图片
// var changePrefaceImg = $(function (){
//
//     var prefaceImg = $(".preface .banner-img img");
//     prefaceImg.attr("src", "images/about/preface.png");
//
// }());
//
// // 初始化模块标题
// var insertModuleTitle = (function (){
//     // 请求模块标题模板
//     $(function () {
//         $.ajax({
//             type: "get",
//             url: "components/module-title/module-title.html",
//             success: function (dataHTML) {
//                 // 插入模板到页面
//                 $(".module").prepend(dataHTML);
//             },
//             error: function (error) {
//                 alert("request error");
//             }
//         });
//     }());
//     // 请求模块模块标题数据
//     $(function () {
//         $.ajax({
//             type: "get",
//             url: "data/module-title.json",
//             success: function (data) {
//                 insertModuleTitle(data);
//             },
//             error: function (error) {
//                 alert("requests error");
//             }
//         });
//     }());
//     // 插入模块标题
//     function insertModuleTitle(data) {
//         // 动态渲染模板标题
//         var moduleTitle = $(".module .title .module-title");
//         var i = 0;
//         for (var title in data.page["about"]) {
//             $($(".module")[i]).find(".title .module-title").html(data.page["about"][title]);
//             i++;
//         }
//     }
// }());

// // 请求外部样式表
// var requestStylesheet = (function () {
//     $.ajax({
//         url: "css/about.css",
//         success: function (data) {
//             var cssLink = $("link.dynamic");
//             cssLink.attr("href", "css/about.css");
//         },
//         error: function (error) {
//             console.log("请求外部 css 样式表失败！");
//         }
//     });
// }());
//
// // 模块七
// var about = (function () {
//
//     var configMap = {
//         module_html : {
//             module_one_main : String()
//         }
//     };
//
// }());