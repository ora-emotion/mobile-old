
/*
 * module 03 js
 */
$(function (){

    var scriptDynamic = $("script.dynamic");

    var swiperScript = document.createElement("script");
    swiperScript.attr({ "type" : "text/javascript", "src" : "js/swiper/swiper.js" });

    $(swiperScript).insertAfter($(scriptDynamic));

}());
