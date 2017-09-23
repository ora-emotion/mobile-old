/* jslint           browser : true,   continue : true,
   devel  : true,    indent : 2,       maxerr  : 50,
   newcap : true,     nomen : true,   plusplus : true,
   regexp : true,    sloppy : true,       vars : false,
   white  : true
*/
/* global $, spa */

$(function (){
  // 说明 ：
  //  * configMap - 保存模块配置
  //  * stateMap  - 保存运行时的状态值
  //  * jqueryMap - 缓存 jQuery 集合

  var
    para,
    score,
    arr      = [],
    frontArr = [],
    midArr   = [],
    lastArr  = [],
    totalArr = [],
    stateMap = {},
    random_num,  welcome_btn, question_btn, question_num,
    changeRadom, showScore,   concatArr,    changeFontSize
    ;

  welcome_btn  = $('.start');
  question_btn = $('.questions .btn');
  item = $('.questions .group .ti');
  question_num = 1;

  /** 字体大小自适应 */
  changeFontSize = (function() {

    // 获取 html 元素
    var rootEle = document.documentElement;
    // 获取设备宽度
    var deviceWidth = rootEle.clientWidth;
    // 改变 html 字体大小 - 以 iPhone6 为准
    rootEle.style.fontSize = deviceWidth / 7.5 + "px";

    window.onresize = function() {
      var rootEle = document.documentElement;
      var deviceWidth = rootEle.clientWidth;
      rootEle.style.fontSize = deviceWidth / 7.5 + "px";
    };

  }());

  welcome_btn.click(function () {
    $('.welcome').addClass('hidden');
    $('.questions').removeClass('hidden');
  });

  changeRadom = (function () {
    for (var i = 0; i < 100; i++) {
      random_num = parseInt(Math.random()*10).toFixed(0);
      if (arr.indexOf(random_num) == -1) {
        arr.push(random_num);
      }
    }
    $(item[arr[0]]).addClass('active');
  }());
  // console.log(arr);

  concatArr = function () {
    for (var i = 30; i < 50; i++) {
      frontArr.push(i);
    }
    for (var j = 50; j < 80; j++) {
      midArr.push(j);
    }
    for (var k = 80; k < 100; k++) {
      lastArr.push(k);
    }
    totalArr = totalArr.concat(frontArr, midArr, midArr, lastArr);
  };

  showScore = function () {
    concatArr();
    // console.log('样本数量(' + totalArr.length + ')：' + totalArr);

    var index = Math.floor(Math.random() * totalArr.length);
    // console.log('30-50分(' + frontArr.length + ')：' + frontArr);
    // console.log('50-80分(' + midArr.length*2 + ')：' + midArr);
    // console.log('80-100分(' + lastArr.length + ')：' + lastArr);
    // console.log('您的得分：' + totalArr[index]);
    $('.score .result .num').html(totalArr[index]);
    $('.questions').addClass('hidden');
    $('.score').removeClass('hidden');
  };

  question_btn.click(function (){
    arr.shift();
    $('.questions .group .ti.active').remove();
    $(item[arr[0]]).addClass('active');

    if (arr.length === 0) {
      showScore();
    }
  });

});
