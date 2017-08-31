// 插入第三方 js 库 - swiper.js
var insertSwiper = $(function (){

    var scriptDynamic = $("script.dynamic");

    var swiperScript = document.createElement("script");
    $(swiperScript).attr({ "type" : "text/javascript", "src" : "js/swiper/swiper.js" });

    $(swiperScript).insertAfter($(scriptDynamic));

}());


$(document).ready(function () {

    // module 04 - 橘子动态轮播图
    var initBanner = $(function () {

        var mySwiper = new Swiper('.swiper-container',{
            initialSlide :2,
            pagination : '.swiper-pagination',
        })

    }());

    // 加载模块函数 - 三级页面
    function routerThird(module,container){

        container=container||$("#container");

        // 请求模块结构
        $.ajax({
            url:"views/three-level-page/" + module + ".html",
            success: function(data){
                container.html(data);
                console.log(data);
            }
        });

        // 请求外部 js 文件
        loadJs(module);

        // 请求外部 css 文件
        loadCss(module);

    }

    // 加载外部 js 文件
    function loadJs(module){
        $.ajax({
            type: "get",
            url:"js/three-level-page/" + module + ".js"
        });
    }

    // 动态加载外部 css 文件
    function loadCss(module) {
        $.ajax({
            type: "get",
            url: "css/three-level-page/" + module + ".css",
            success: function (data) {
                var cssLink = $("link.dynamic");
                cssLink.attr("href", "css/" + module + ".css");
            },
            error: function (error) {
                console.log("请求外部 css 样式表失败！");
            }
        });
    }

    // 加载三级页面
    $(function () {

        $(".index-module04-more01").click(function() {

            routerThird("index-module04-more01", $("#container"));

        });

        $(".index-module04-more02").click(function() {

            routerThird("index-module04-more02", $("#container"));

        });

        $(".index-module04-more03").click(function() {

            routerThird("index-module04-more03", $("#container"));

        });

        $(".index-module04-more04").click(function() {

            routerThird("index-module04-more04", $("#container"));

        });

        $(".index-module04-more05").click(function() {

            routerThird("index-module04-more05", $("#container"));

        });

        $(".index-module04-more06").click(function() {

            routerThird("index-module04-more06", $("#container"));

        });

    }());

});
