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

$(document).ready(function () {

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

    // module 03 area
    var moduleThree = $(function (){

        var data = {
            "item" : [
                {
                    "img" : "images/save-love/module03-pic01.png",
                    "title" : "双方地位不平衡，迷失自我",
                    "des" : "付出的越来越多，但是对方却总是无动于衷，难道爱一个人对TA好也是错吗？为什么TA根本不能感受到我的爱意，不能理解我呢？不能认可我重新在一起呢？"
                },
                {
                    "img" : "images/save-love/module03-pic02.png",
                    "title" : "干扰对方生活，降低对方生活质量，造成压力",
                    "des" : "分手之后想要当面说清楚分手的原因，问明白到底是谁错了，所以就去对方家里、公司、或者是其他可能出现的地点，但是对方却并不买账，直接与你断绝联系。"
                },
                {
                    "img" : "images/save-love/module03-pic03.png",
                    "title" : "情商低，沟通不到位，无效沟通",
                    "des" : "两个人的语言根本不能正常沟通，废话、气话都很多，真正的心意都被掩藏起来，根本不能互相理解和沟通，不能静下心来冷静聊天。"
                },
                {
                    "img" : "images/save-love/module03-pic04.png",
                    "title" : "以自我为中心，一味的触及对方底线",
                    "des" : "每个人都有自己的底线，但是就是会不经意或者是故意挑战对方的底线，你以为的不在意和可以被原谅，在对方看来你就是不在意他，是最差的伴侣。"
                }
            ],
            "template" : ""
        }



    }());

});
