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