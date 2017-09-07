/**
 * Created by smpower on 2017/8/30 0030.
 */


// 获取路径参数
function getUrlParams(){

    var params={};											// 声明参数对象 - 空对象(params)

    var url=window.location.href;							// 获取路径参数

    var arr=url.split("?");

    if(arr.length === 2){
        var p=arr[1];
    }else{
        console.log(params);
        return params;
    }

    // p="a=1&b=2&c=3"
    var parr=p.split("&"); // index.html#detail?id=12345


    // parr - a=1, b=2, c=3
    for(var i=0;i<parr.length;i++){

        var kv=parr[i].split("=");  // kv - a 1, b 2, c 3

        params[kv[0]]=kv[1];  // params {a: 1, b: 2, c: 3}

    }

    return params;

    // {a:1,b:2,c:3}

}

// getUrlParams();

// 获取模块名;
function getModule(){

    var url=window.location.href;

    var arr=url.split("#");

    if(arr.length !== 2){
        return false;
    }

    var p=arr[1];

    p=p.split("?");

    return p[0];

}

// 加载模块函数
function router(module,container){

    container=container||$("#container");

    // 请求模块结构
    $.ajax({
        url:"views/" + module + ".html",
        success: function(data){
            container.html(data);

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
        url:"js/" + module + ".js",
        // success: function (data) {
        //     var dynamicJs = $("script.dynamic");
        //     dynamicJs.attr("src", "js/" + module + ".js");
        // },
        // error: function (error) {
        //     console.log("request failed");
        // }
    });
}

// 动态加载外部 css 文件
function loadCss(module) {
    $.ajax({
        url: "css/" + module + ".css",
        success: function (data) {
            var cssLink = $("link.dynamic");
            cssLink.attr("href", "css/" + module + ".css");
        },
        error: function (error) {
            console.log("请求外部 css 样式表失败！");
        }
    });
}

// 导航滑块
var bar = (function () {

    // 声明常量、变量
    var configMap = {
            // position: fixed; left: 0;
            extended_left : 0,
            // position: fixed; left: -435px;
            retracted_left : -455,
            hidden_retracted_btn_position : -25,
            show_retracted_btn_position : 52
        },
        $sliderBar, $sliderBarBtnExtended, $sliderBarBtnRetracted,
        listItem, sliderExtended, sliderRetracted, onClickSlider, initModule;

    // 展开导航滑块
    sliderExtended = function () {
        var bar_left = $('#bar').position().left;
        // 收缩状态时
        if ( bar_left === configMap.extended_left ) {
            $sliderBar.animate({ left : configMap.retracted_left });
            $sliderBarBtnExtended.animate({
                right : 0,
                width : 59
            });
            $sliderBarBtnRetracted.find('.icon').animate({
                right : configMap.hidden_retracted_btn_position,
                opacity : 0
            });
        }
        else if ( bar_left === configMap.retracted_left ) {
            $sliderBar.animate({ left : configMap.extended_left });
            $sliderBarBtnExtended.animate({
                right : 59,
                width : 0
            });
            $sliderBarBtnRetracted.find('.icon').animate({
                right : configMap.show_retracted_btn_position,
                opacity : 1
            });
        }
        return false;
    };

    // 收缩导航滑块
    sliderRetracted = function () {
        var bar_left = $('#bar').position().left;
        // 展开状态时
        if ( bar_left === configMap.extended_left ) {
            $sliderBar.animate({ left : configMap.retracted_left });
            $sliderBarBtnExtended.animate({
                right : 0,
                width : 59
            });
            $sliderBarBtnRetracted.find('.icon').animate({
                right : configMap.hidden_retracted_btn_position,
                opacity : 0
            });
        }
        else if ( bar_left === configMap.retracted_left ) {
            $sliderBar.animate({ left : configMap.extended_left });
            $sliderBarBtnExtended.animate({
                right : 59,
                width : 0
            });
            $sliderBarBtnRetracted.find('.icon').animate({
                right : configMap.show_retracted_btn_position,
                opacity : 0
            });
        }
        return false;
    };

    // initialize slider bar - 初始化滑块
    var initSlider = function () {
        $sliderBar.animate({
            'left' : configMap.retracted_left
        });
        $sliderBarBtnExtended.animate({
            right : 0,
            width : 59
        });
        $sliderBarBtnRetracted.find('.icon').animate({
            right : configMap.hidden_retracted_btn_position,
            opacity : 0
        });

        return false;
    };

    onClickListItem = function ( event ) {
        var listItem = $('#bar').find('.list-item');
        listItem.click(function (event) {

            $(this)
                .addClass('active')
                .siblings().removeClass('active');

            initSlider();

            return false;
        });
    };

    // initialize module
    initModule = function ( $container ) {
        $sliderBar = $('#bar');
        $sliderBarBtnExtended = $container.find('.btn-wrap');           // extended button
        $sliderBarBtnRetracted = $container.find('.btn-retracted');     // retracted button
        $sliderBarBtnExtended.click( sliderExtended );
        $sliderBarBtnRetracted.click( sliderRetracted );
        $('body, html').click( function ( event ) {
            initSlider();
            event.stopPropagation();
            return false;
        });
        onClickListItem();

        return true;
    };

    return { initModule : initModule };
}());

// 左侧导航滑块 - slider bar
$(function () {
    var sliderItem = $('#bar').find('.list-item');

    // 返回首页
    $(sliderItem[0]).click(function () {
        window.location.href = './';
        $('head title').text('橘子情感 - 首页');
    });

    // 挽回爱情
    $(sliderItem[1]).click(function () {
        router('save-love', $('#container'));
        $('head title').text('橘子情感 - 挽回爱情');
    });

    // 挽救婚姻
    $(sliderItem[2]).click(function () {
        router('save-marriage', $('#container'));
        $('head title').text('橘子情感 - 挽救婚姻');
    });

    // 分离小三
    $(sliderItem[3]).click(function () {
        router('separate-mistress', $('#container'));
        $('head title').text('橘子情感 - 分离小三');
    });

    // 定制爱情
    $(sliderItem[4]).click(function () {
        router('custom-love', $('#container'));
        $('head title').text('橘子情感 - 定制爱情');
    });

    // 情感论坛
    $(sliderItem[5]).click(function () {
        router('emotion-forum', $('#container'));
        $('head title').text('橘子情感 - 情感论坛');
    });

    // 权威专家
    $(sliderItem[6]).click(function () {
        router('team', $('#container'));
        $('head title').text('橘子情感 - 权威专家');
    });

    // 服务介绍
    $(sliderItem[7]).click(function () {
        router('service', $('#container'));
        $('head title').text('橘子情感 - 服务介绍');
    });

    // 关于我们
    $(sliderItem[8]).click(function () {
        router('about', $('#container'));
        $('head title').text('橘子情感 - 关于我们');
    });

});

// 加载二级页面
$(function(){

    // 挽回爱情
    $(".icon-txt-group:first-child .item:nth-child(1)").click(function(){
        router("save-love",$("#container"));
        $('head title').text('橘子情感 - 挽回爱情');
    });

    // 挽救婚姻
    $(".icon-txt-group:first-child .item:nth-child(2)").click(function(){
        router("save-marriage",$("#container"));
        $('head title').text('橘子情感 - 挽救婚姻');
    });

    // 分离小三
    $(".icon-txt-group:first-child .item:nth-child(3)").click(function(){
        router("separate-mistress",$("#container"));
        $('head title').text('橘子情感 - 分离小三');
    });

    // 定制爱情
    $(".icon-txt-group:first-child .item:nth-child(4)").click(function(){
        router("custom-love",$("#container"));
        $('head title').text('橘子情感 - 定制爱情');
    });

    // 情感课堂
    $(".icon-txt-group:last-child .item:nth-child(1)").click(function(){
        router("emotion-forum",$("#container"));
        $('head title').text('橘子情感 - 情感课堂');
    });

    // 权威专家
    $(".icon-txt-group:last-child .item:nth-child(2)").click(function(){
        router("team",$("#container"));
        $('head title').text('橘子情感 - 权威专家');
    });

    // 服务介绍
    $(".icon-txt-group:last-child .item:nth-child(3)").click(function(){
        router("service",$("#container"));
        $('head title').text('橘子情感 - 服务介绍');
    });

    // 关于我们
    $(".icon-txt-group:last-child .item:nth-child(4)").click(function(){
        router("about",$("#container"));
        $('head title').text('橘子情感 - 关于我们');
    });


    // index - 首页中的链接
    //--> 挽回爱情页面
    $(".module-02 .main .row:first-child img:first-child").click(function () {
        router("save-love", $("#container"));
        $('head title').text('橘子情感 - 挽回爱情');
    });
    //--> 挽救婚姻页面
    $(".module-02 .main .row:first-child img:last-child").click(function () {
        router("save-marriage", $("#container"));
        $('head title').text('橘子情感 - 挽救婚姻');
    });
    //--> 分离小三页面
    $(".module-02 .main .row:last-child img:first-child").click(function () {
        router("separate-mistress", $("#container"));
        $('head title').text('橘子情感 - 分离小三')
    });
    //--> 定制爱情页面
    $(".module-02 .main .row:last-child img:last-child").click(function () {
        router("custom-love", $("#container"));
        $('head title').text('橘子情感 - 定制爱情');
    });

});

// 加载页面公共部分
$(document).ready(function () {

    // 加载字体自适应大小函数
    var changeFontSize = (function () {
        // 获取 html 元素
        var rootEle = document.documentElement;
        // 获取设备宽度
        var deviceWidth = rootEle.clientWidth;
        // 改变 html 字体大小 - 以 iPhone6 为准
        rootEle.style.fontSize = deviceWidth / 7.5 + "px";

        window.onresize = function () {
            var rootEle = document.documentElement;
            var deviceWidth = rootEle.clientWidth;
            rootEle.style.fontSize = deviceWidth / 7.5 + "px";
        };
    }());

    // 加载左侧导航滑块
    bar.initModule( $('#bar') );

    // 请求 footer 数据
    $(function () {

        $.ajax({
            type: "get",
            url: "data/footer.json",
            success: function (data) {

                // 调用加载 footer 区域的函数
                loadFooter(data);

            },
            error: function (error) {
                alert("footer.json requests false!");
            }
        });

    }());

    // 加载 footer 区域
    function loadFooter(data) {

        // 公司名称
        $("footer .ora-name .ora-name-txt").html(data["ora-name"]);

        // 公司电话
        $("footer .ora-phone .ora-phone-txt").html(data["ora-phone"][0]);
        $("footer .ora-phone .ora-phone-num").html(data["ora-phone"][1]);

        // 公司微信公众平台
        $("footer .ora-wechat .ora-wechat-txt").html(data["ora-wechat"][0]);
        $("footer .ora-wechat .ora-wechat-num").html(data["ora-wechat"][1]);

        // 公司地址
        $("footer .ora-address .ora-address-txt").html(data["ora-address"][0]);
        $("footer .ora-address .ora-address-num").html(data["ora-address"][1]);

        // 公司备案号
        $("footer .ora-record .ora-record-txt").html(data["ora-record"][0]);
        $("footer .ora-record .ora-record-num").html(data["ora-record"][1]);

    }

});



