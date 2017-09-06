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
        for (var title in data.page["save-love"]) {
            $($(".module")[i]).find(".title .module-title").html(data.page["save-love"][title]);
            i++;
        }
    }

}());

// 动态更换头图图片
var changePrefaceImg = $(function (){

    var prefaceImg = $(".preface .banner-img img");
    prefaceImg.attr("src", "images/save-love/preface.png");

}());

// module 01 area - banner
var moduleOneBanner = $(function (){

    var tabContentItem = $(".module-01 .main .swiper-container .swiper-wrapper .swiper-slide");

    var moduleOneSwiper = new Swiper('.module-01 .main #tabs-container',{
        onSlideChangeStart: function(){
            $(".tabs .active").removeClass('active');
            $(".tabs p").eq(moduleOneSwiper.activeIndex).addClass('active');
        }
    });

    $(".tabs p").on('touchstart mousedown',function(e){
        e.preventDefault();
        $(".tabs .active").removeClass('active');
        $(this).addClass('active');
        moduleOneSwiper.slideTo( $(this).index() );
    });

    $(".tabs p").click(function(e){
        e.preventDefault();
    });

}());

// module 02 area - banner
var moduleTwoBanner = $(function (){

    var moduleTwoSwiper = new Swiper('.module-02 .main .swiper-container', {
        autoplay: 10000,                     // 禁止自动播放
        pagination : '.swiper-pagination',   // 显示分页器
        paginationClickable :true,           // 分页器可点击
    });

});