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
                console.log(data);
            },
            error: function (error) {
                alert("requests error");
            }
        });

    }());

// 插入模块标题
    function insertModuleTitle(data) {

        // 动态渲染模板标题
        console.log(data);
        var moduleTitle = $(".module .title .module-title");
        var i = 0;
        for (var title in data.page["save-love"]) {
            $($(".module")[i]).find(".title .module-title").html(data.page["save-love"][title]);
            i++;
        }
    }

}());

var changePrefaceImg = $(function (){

    var prefaceImg = $(".preface .banner-img img");
    prefaceImg.attr("src", "images/save-love/preface.png");

}());