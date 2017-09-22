/*
 * index.js
 * Root namespace javascript
*/

/* jslint           browser : true,   continue : true,
   devel  : true,    indent : 2,       maxerr  : 50,
   newcap : true,     nomen : true,   plusplus : true,
   regexp : true,    sloppy : true,       vars : false,
   white  : true
*/
/* global $, spa */

spa.shell = (function (){
  //------------------------- 模块中用到的所用变量 ------------------------------
  var
    configMap = {
      main_html : String() + ''
    },
    stateMap = {
      $container     : null
    },
    jqueryMap = {},
    arr       = [],
    frontArr  = [],
    midArr    = [],
    lastArr   = [],
    totalArr  = [],
    btn_welcome,  btn_next,       random_num,
    setJqueryMap, changeRandom,   showScore,
    showQuestion, toggleQuestion, onClickBtn,
    /*concatArr,*/ initModule
    ;

  //----------------------------- 公用方法 -------------------------------------
  // changeRandom()
  changeRandom = function (item) {
    // 10 道题目随机出现
    for (var i = 0; i < 100; i++) {
      random_num = parseInt(Math.random()*10).toFixed(0);
      if (arr.indexOf(random_num) == -1) {
        arr.push(random_num);
      }
    }
    $( item[arr[0]] ).addClass('active');
    stateMap.question_arr = arr;
    console.log(arr);
    changeQuestion(item);
  };

  //----------------------------- DOM 方法 -------------------------------------
  // setJqueryMap()
  setJqueryMap = function () {
    var $container    = stateMap.$container;
    var $welcome_btn  = $container.find('.welcome_btn');
    var $next_btn     = $container.find('.next_btn');
    var $welcome_page = $container.find('.welcome_page');
    var $question_page = $container.find('question_page');
    var $question_item = $container.find('.question-group .item');

    jqueryMap = {
      $container     : $container,
      $welcome_page  : $welcome_page,
      $welcome_btn   : $welcome_btn,
      $question_page : $question_page,
      $next_btn      : $next_btn,
      $question_item : $question_item
    };
  };

  // concatArr = function () {return false;};

  // changeQuestion()
  changeQuestion = function (item) {
    console.log(stateMap.question_arr);
    stateMap.question_arr.shift();
    $('.question-group .item.active').remove();
    $( $('.question-group .item')[arr[0]] ).addClass('active');

    if (arr.length === 0) {
      showScore();
    }

    return true;
  };

  // showScore()
  showScore = function () {
    // 显示分数之前调用 changeRandom() 方法
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

    var index = Math.floor(Math.random() * totalArr.length);

    console.log('样本数量(' + totalArr.length + ')：' + totalArr);
    console.log('30-50分(' + frontArr.length + ')：' + frontArr);
    console.log('50-80分(' + midArr.length*2 + ')：' + midArr);
    console.log('80-100分(' + lastArr.length + ')：' + lastArr);
    console.log('您的得分：' + totalArr[index]);
    return true;
  };

  // toggleQuestion()
  // toggleQuestion = function () {
  //   console.log('toggleQuestion');
  //
  //   // 当昨晚最后一个题目后，调用 showScore() 方法 - 该方法用于显示分数
  //   showScore()
  //   return true;
  // };

  // showQuestion()
  showQuestion = function () {
    console.log(jqueryMap.$welcome_page);
    jqueryMap.$welcome_page.css('display', 'none');
    jqueryMap.$question_page.css('display', 'block');
    // console.log('showQuestion');

    return true;
  };



  //--------------------------- 事件处理程序 -----------------------------------
  // onClickBtn()
  onClickBtn = function (event) {
    // 点击开始答题按钮后立刻出现试题 - changeRandom() 方法
    changeRandom( jqueryMap.$question_item );
    showQuestion();

    jqueryMap.$next_btn.click( changeQuestion );
    // showScore();
    return false;
  }

  //----------------------------- 公开方法 -------------------------------------
  initModule = function ($container) {
    stateMap.$container = $container;
    $container.html();
    setJqueryMap();

    jqueryMap.$welcome_btn.click( onClickBtn );
  };

  return { initModule : initModule };

}());
// var
//   btn_welcome, btn_next
//   ;
//
// btn_welcome = $('.welcome button');
//
// btn_welcome.click(function () {
//   $('.welcome').addClass('hidden');
//   $('.questions').removeClass('hidden');
// });
//
// var
//   btn,
//   changeRadom,
//   showScore,
//   concatArr,
//   arr,
//   newArr,
//   num,
//   para,
//   score,
//   frontArr = [],
//   midArr = [],
//   lastArr = [],
//   totalArr = []
//   ;
//
// btn = $('button');
// arr = [],
// scoreArr = [];
// para = $('.group p');
//
// changeRadom = (function () {
//   for (var i = 0; i < 100; i++) {
//     num = parseInt(Math.random()*10).toFixed(0);
//     if (arr.indexOf(num) == -1) {
//       arr.push(num);
//     }
//   }
//   $(para[arr[0]]).addClass('active');
// }());
// // console.log(arr);
//
// concatArr = function () {
//   for (var i = 30; i < 50; i++) {
//     frontArr.push(i);
//   }
//   for (var j = 50; j < 80; j++) {
//     midArr.push(j);
//   }
//   for (var k = 80; k < 100; k++) {
//     lastArr.push(k);
//   }
//   totalArr = totalArr.concat(frontArr, midArr, midArr, lastArr);
// };
//
// showScore = function () {
//   concatArr();
//   console.log('样本数量(' + totalArr.length + ')：' + totalArr);
//
//   var index = Math.floor(Math.random() * totalArr.length);
//   console.log('30-50分(' + frontArr.length + ')：' + frontArr);
//   console.log('50-80分(' + midArr.length*2 + ')：' + midArr);
//   console.log('80-100分(' + lastArr.length + ')：' + lastArr);
//   console.log('您的得分：' + totalArr[index]);
// };
//
// btn.click(function (){
//   arr.shift();
//   $('.group p.active').remove();
//   $(para[arr[0]]).addClass('active');
//
//   if (arr.length === 0) {
//     showScore();
//   }
// });
