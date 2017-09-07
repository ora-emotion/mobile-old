/*
 *
 * 定制爱情 - js
 *
 **/

// 请求外部依赖文件
// var requestFile = $(function () {
//     $.ajax({
//         url: 'js/jq/jquery-3.2.1.js'
//     });
//     $.ajax({
//         url: 'js/swiper/swiper.js'
//     });
// }());

// 初始化模块标题
var insertModuleTitle = $(function (){

    // 请求模块标题模板
    $(function () {

        $.ajax({
            type: "get",
            url: "components/module-title/module-title.html",
            success: function (dataHTML) {
                // 插入模板到页面
                $(".module").prepend(dataHTML);
            },
            error: function (error) {
                alert("request error");
            }
        });

    }());

    // 请求模块模块标题数据
    $(function () {

        $.ajax({
            type: "get",
            url: "data/module-title.json",
            success: function (data) {
                insertModuleTitle(data);
            },
            error: function (error) {
                alert("requests error");
            }
        });

    }());

    // 插入模块标题
    function insertModuleTitle(data) {

        // 动态渲染模板标题
        var moduleTitle = $(".module .title .module-title");
        var i = 0;
        for (var title in data.page["custom-love"]) {
            $($(".module")[i]).find(".title .module-title").html(data.page["custom-love"][title]);
            i++;
        }
    }

}());

// 动态更换头图图片
var changePrefaceImg = $(function (){

    var prefaceImg = $(".preface .banner-img img");
    prefaceImg.attr("src", "images/custom-love/preface.png");

}());

// 轮播图：模块五 - 橘子优势
var moduleFiveBanner = $(function () {
    var tabContentItem = $(".module-05 .main .swiper-container .swiper-wrapper .swiper-slide");

    var moduleOneSwiper = new Swiper('.module-05 .main #tabs-container',{
        autoHeight: true,
        onSlideChangeStart: function(){
            $(".module-05 .tabs .active").removeClass('active');
            $(".module-05 .tabs span").eq(moduleOneSwiper.activeIndex).addClass('active');
        }
    });

    $(".module-05 .tabs span").on('touchstart mousedown',function(e){
        e.preventDefault();
        $(".module-05 .tabs .active").removeClass('active');
        $(this).addClass('active');
        moduleOneSwiper.slideTo( $(this).index() );
    });

    $(".module-05 .tabs span").click(function(e){
        e.preventDefault();
    });
});