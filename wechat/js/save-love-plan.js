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


var oraMoveBtn = (function (btn) {
    //-------------------------------------------- Start config map ----------------------------------------------------

    //-------------------------------------------- End config map ------------------------------------------------------

    //-------------------------------------------- Start Animate -------------------------------------------------------
    var btnMove = function () {

        var mainBtn = $(".preface-btn"),
            bottom = mainBtn.css("bottom"),
            state = false;

        if (state === false) {

            mainBtn.animate({ bottom : 0, opacity : 0 }, 800);

            mainBtn.animate({ bottom : 100 });

            mainBtn.animate({ bottom : 100, opacity : 1 }, 300);

        }

    };
    //-------------------------------------------- End Animate ---------------------------------------------------------

    //-------------------------------------------- Set time interval ---------------------------------------------------
    setInterval(btnMove, 1000);
    //-------------------------------------------- Set time interval ---------------------------------------------------

}());





