/** 字体大小自适应 */

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


/** 头图上下移动的小箭头 */
var oraMoveBtn = (function (btn) {
    //-------------------------------------------- Start Animate -------------------------------------------------------
    var btnMove = function () {

        var mainBtn = $(".preface-btn"),
            bottom = mainBtn.css("bottom"),
            state = false;

        // console.log(deviceWidth);

        // mainBtn.css({
        //
        //     left : (deviceWidth - btnWidth) / 2
        //
        // });

        var dis = (parseInt($(".preface-img").css("width")) - parseInt($(".preface-btn").css("width"))) / 2;

        console.log(dis * 2);


        // $(".preface-btn").css({
        //
        //     "position" : "absolute",
        //     "left" : dis/100
        //
        // });


        if (state === false) {

            // mainBtn.css({ bottom : "-90vh", opacity : 1 });

            mainBtn.animate({ bottom : "-95%", opacity : 0 }, 1000);

            mainBtn.animate({ bottom : "-88%" });

            mainBtn.animate({ bottom : "-88%", opacity : 1 }, 300);

        }

        console.log($(".preface-btn"));



    };
    //-------------------------------------------- End Animate ---------------------------------------------------------

    //-------------------------------------------- Set time interval ---------------------------------------------------
    setInterval(btnMove, 1000);
    //-------------------------------------------- Set time interval ---------------------------------------------------
}());





