/**
 * Created by smpower on 2017/8/30 0030.
 */


// 加载模块函数
function router(module,container){

    container=container||$("#container");

    // 请求模块结构
    $.ajax({
        url:"views/" + module + ".html",
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
        url:"js/" + module + ".js"
    });
}

// 加载外部 css 文件
function loadCss(module) {
    $.ajax({
        type: "get",
        url: "css/" + module + ".css",
        success: function (data) {
            var link = document.createElement("link");
            $(link).attr("rel", "stylesheet");
            $(link).attr("href", "css/" + module + ".css");
            $(module).append(link);
        }
    });
}


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

    // 加载 footer 区域
    function loadFooter(data) {

        console.log(data);

        // 公司名称
        $("footer .txt-group .item .ora-name").html(data["ora-name"]);

        // 公司电话
        $("footer .txt-group .item .ora-phone-txt").html(data["ora-phone"][0]);
        $("footer .txt-group .item .ora-phone-num").html(data["ora-phone"][1]);

        // 公司微信公众平台
        $("footer .txt-group .item .ora-wechat-txt").html(data["ora-wechat"][0]);
        $("footer .txt-group .item .ora-wechat-num").html(data["ora-wechat"][1]);

        // 公司地址
        $("footer .txt-group .item .ora-address-txt").html(data["ora-address"][0]);
        $("footer .txt-group .item .ora-address-detail").html(data["ora-address"][1]);

        // 公司备案号
        $("footer .txt-group .item .ora-record-txt").html(data["ora-record"][0]);
        $("footer .txt-group .item .ora-record-num").html(data["ora-record"][1]);

    }

    // 插入模块标题
    function insertModuleTitle(data) {

        // 动态渲染模板标题
        console.log(data);
        var moduleTitle = $(".module .title .module-title");
        console.log(moduleTitle);
        var i = 0;
        for (var title in data.page["index"]) {
            $($(".module")[i]).find(".title .module-title").html(data.page["index"][title]);
            i++;
        }
    }

    // 返回顶部功能
    $(function (){
        $(".modal-header p").click(function () {
            $("html, body").animate({ "scrollTop" : 0 }, 300);
        });
    }());

});

// 加载二级页面
$(function(){

    // 挽回爱情
    $(".icon-txt-group:first-child .item:nth-child(1)").click(function(){
        router("save-love",$("#container"));
    });

    // 挽救婚姻
    $(".icon-txt-group:first-child .item:nth-child(2)").click(function(){
        router("save-marriage",$("#container"));
    });

    // 分离小三
    $(".icon-txt-group:first-child .item:nth-child(3)").click(function(){
        router("separate-mistress",$("#container"));
    });

    // 定制爱情
    $(".icon-txt-group:first-child .item:nth-child(4)").click(function(){
        router("custom-love",$("#container"));
    });

    // 情感课堂
    $(".icon-txt-group:last-child .item:nth-child(1)").click(function(){
        router("emotion-forum",$("#container"));
    });

    // 权威专家
    $(".icon-txt-group:last-child .item:nth-child(2)").click(function(){
        router("team",$("#container"));
    });

    // 服务介绍
    $(".icon-txt-group:last-child .item:nth-child(3)").click(function(){
        router("service",$("#container"));
    });

    // 关于我们
    $(".icon-txt-group:last-child .item:nth-child(4)").click(function(){
        router("about",$("#container"));
    });


    // index - 首页中的链接
    //--> 挽回爱情页面
    $(".module-02 .main .row:first-child img:first-child").click(function () {
        router("save-love", $("#container"));
    });
    //--> 挽救婚姻页面
    $(".module-02 .main .row:first-child img:last-child").click(function () {
        router("save-marriage", $("#container"));
    });
    //--> 分离小三页面
    $(".module-02 .main .row:last-child img:first-child").click(function () {
        router("separate-mistress", $("#container"));
    });
    //--> 定制爱情页面
    $(".module-02 .main .row:last-child img:last-child").click(function () {
        router("custom-love", $("#container"));
    });

});