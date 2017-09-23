/*
 * index.js
 * Root namespace javascript
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.shell = (function (){
  //-------------------------- 模块内可用的变量 ---------------------------------
  // 说明  ：
  //   * configMap - 静态配置属性
  //   * jqueryMap - 缓存 jQuery 集合
  //
  var
    configMap = {
      main_html : String()
        + '<div class="spa-welcome">'
          + '<div class="spa-welcome-start-btn"></div>'
          + '<div class="spa-welcome-rule-btn"></div>'
        + '</div>'
        + '<div class="spa-question"></div>'
        + '<div class="spa-score"></div>'
        + '<div class="spa-modal">'
          + '<div class="spa-modal-content"></div>'
        + '</div>',
      spa_welcome : String()
        + '<img class="spa-welcome-bg" src="images/welcome-bg.png">'
        + '<div class="spa-welcome-start-btn"></div>'
        + '<div class="spa-welcome-rule-btn"></div>',
      spa_question : String()
        + '<div class="spa-question-content">'
          + '<div class="spa-question-content-item">'
            + '<div class="spa-question-content-item-wrap">'
              + '<div class="spa-question-content-item-title">'
                + '<span class="title-serial-num"></span>'
                + '<img class="title-serial-txt" src="images/question-item-1.png">'
              + '</div>'
              + '<div class="spa-question-content-item-options">'
                + '<div class="option-item">'
                  + '<span class="option-item-icon"></span>'
                  + '<div class="option-item-txt">'
                    + 'A. 对于他的过去不过不问，只要当下爱<br>'
                    + '你就好'
                  + '</div>'
                + '</div>'
                + '<div class="option-item">'
                  + '<span class="option-item-icon"></span>'
                  + '<div class="option-item-txt">'
                    + 'B. 对于他的过去不过不问，只要当下爱<br>'
                    + '你就好丢东方红飞个分隔的高度个发的 <br>'
                    + '你就好丢东方红'
                  + '</div>'
                + '</div>'
                + '<div class="option-item">'
                  + '<span class="option-item-icon"></span>'
                  + '<div class="option-item-txt">'
                      + 'C .对于他的过去不过不问，只要当下爱<br>'
                      + '你就好'
                  + '</div>'
                + '</div>'
                + '<div class="option-item">'
                  + '<span class="option-item-icon"></span>'
                  + '<div class="option-item-txt">'
                    + 'D .对于他的过去不过不问，只要当下爱<br>'
                    + '你就好'
                  + '</div>'
                + '</div>'
              + '</div>'
            + '</div>'
            + '<div class="spa-question-content-item-next-btn">'
              + '<img class="spa-question-next-btn" src="images/question-next-btn.png">'
              + '<img class="spa-question-submit-btn" src="images/question-submit-btn.png">'
            + '</div>'
          + '</div>'
        + '</div>',
      spa_score : String() + '分数页',
      spa_modal_rule : String()
        + '<div class="spa-modal-welcome-rule">'
          + '<div class="modal-opacity"></div>'
          + '<div class="modal-content">'
            + '<div class="txt">'
              + '<div class="time">'
                + '<p>◆ 活动时间</p>'
                + '<p>9月25日 ~ 10月30日</p>'
              + '</div>'
              + '<div class="rule">'
                + '<p>◆ 活动规则</p>'
                + '<p>'
                  + '吸引力测试共设有10道选择题，满分100分，得分80分以上即可获得红包。'
                  + '若低于80分也可分享到任意社交平台获得再一次挑战机会。'
                  + '<br><br>'
                  + '你的吸引力到底有多大，等你来检验！'
                + '</p>'
              + '</div>'
            + '</div>'
          + '</div>'
          + '<div class="modal-close-btn"></div>'
        + '</div>',
      spa_modal_rule_tip : String()
        + '<div class="spa-modal-welcome-rule-tip">'
          + '<div class="modal-opacity"></div>'
          + '<div class="modal-content">'
            + '<div class="txt">'
              + '<p>'
                + 'hi，这是一个神奇的账号<br>'
                + '据说关注这个账号之后，<br>'
                + '会让烂桃花跑光，正缘大驾光临哦！<br>'
                + '我们每天提供最实际的爱情方法论<br>'
                + '过目不忘，随学随用！<br>'
                + '2017年9月25日至10月30日<br>'
                + '<span class="red">“10000元红包”</span>有奖问答活动来了，<br>'
                + '橘子情感为你准备了一份大惊喜<br>'
                + '只为你能更了解橘子情感！<br>'
                + '并支持我们！<br><br>'
                + '◆ 活动时间：<br>'
                + '2017年9月25日—2017年10月30日<br><br>'
                + '◆ 开抢时间：<br>'
                + '全天候，随时开抢<br><br>'
                + '◆ 红包详情：<br>'
                + '红包面额随机派发<br><br>'
                + '◆ 活动规则：<br>'
                + '吸引力测试共设有10道选择题，满分100分，根据要求进行回答，最终得分'
                + '在80分以上即可参与抽红包，若低于80分也可分享到社交平台再获得一次挑'
                + '战机会（平台不限：微信朋友圈、微博、QQ空间等皆可）！每个微信号每天'
                + '最多可参与2次，第二天参与权限正常。你的吸引力到底有多大，等你来检'
                + '验。<br>'
              + '</p>'
            + '</div>'
          + '</div>'
          + '<div class="modal-close-btn"></div>'
        + '</div>'
    },
    stateMap  = {
      $container          : null,
      random_question_arr : [],
      random_score        : null
    },
    jqueryMap = {},
    root_ele,     device_width,    random_question,
    setJqueryMap, changeFontSize,  randomQuestion,
    randomScore,  createSerialNum, onClick,         initModule;
  //-------------------------- 模块内可用的变量 ---------------------------------

  //----------------------------- 不操作 DOM -----------------------------------
  // randomQuestion()
  // 说明   ：
  //   * 页面加载后题目顺序随机显示
  // 设置   ：
  // 返回值 ： Array
  //   * 返回一个包含题目顺序的数组，通过 stateMap.random_question_arr 调用
  //
  randomQuestion = function () {
    var i;
    for (i = 0; i < 100; i++) {
      // note: parseInt(string, radix) - radix 为 0 表示以 10 为基础进行解析
      random_question = parseInt(Math.random()*10, 0).toFixed(0);
      if (stateMap.random_question_arr.indexOf(random_question) === -1) {
        stateMap.random_question_arr.push(random_question);
      }
    }
    // $(item[arr[0]]).addClass('active');
  };

  // randomScore()
  // 说明   ：
  //   * 页面加载后立即随机产生分数
  // 设置   ：无
  // 返回值 ：Number
  //   * 返回一个随机产生的分数，通过 stateMap.random_score 调用
  //
  randomScore = function () {
    var
      f, m, l, index,
      score_arr_front = [],
      score_arr_mid   = [],
      score_arr_last  = [],
      score_arr_total = [];

    for (f = 36; f < 50; f++) {
      score_arr_front.push(f);
    }
    for (m = 50; m < 80; m++) {
      score_arr_mid.push(m);
    }
    for (l = 80; l <= 95; l++) {
      score_arr_last.push(l);
    }

    score_arr_total = score_arr_total
      .concat(score_arr_front, score_arr_mid, score_arr_mid, score_arr_last);

    index = Math.floor(Math.random() * score_arr_total.length);
    stateMap.random_score = score_arr_total[index];
  };
  //----------------------------- 不操作 DOM -----------------------------------

  //------------------------------ 操作 DOM  -----------------------------------
  // setJqueryMap()
  // 缓存 jQuery 集合
  //
  setJqueryMap = function () {
    var
      $container = stateMap.$container,
      test_start, test_rule;

    jqueryMap = {
      $container : $container,
      $test_start : $container.find('.spa-welcome-start-btn'),
      $test_rule  : $container.find('.spa-welcome-rule-btn')
      // $question_serial_num : $container.find('.spa-question-serial-num')
    };
  };

  // changeFontSize()
  // 说明 ：
  //   * 动态更改页面文字大小
  //
  changeFontSize = function() {
    root_ele = document.documentElement;
    device_width = root_ele.clientWidth;
    root_ele.style.fontSize = device_width / 7.5 + "px";
  };

  // createSerialNum()
  // 说明   ：
  //   * 为随机生成的题目添加序号
  // 设置   ：无
  // 返回值 ：无
  //
  // createSerialNum = function () {
  //   // 在当前显示的问题前面加上序号
  //   // 可以使用 stateMap.score_arr_total 数组中元素的索引值作为序号使用
  // };
  //------------------------------ DOM 操作 ------------------------------------

  //------------------------ jQuery 事假处理程序 --------------------------------
  // onClick()
  //
  onClick = function () {
    // 弹出 ‘活动锦囊’ 模态框
    jqueryMap.$test_rule.click(function () {
      jqueryMap.$container
        .find('.spa-modal-content')
        .html(configMap.spa_modal_rule);

      jqueryMap.$container.find('.spa-modal').css({ 'display' : 'block' });
      jqueryMap.$container.find('.modal-opacity').animate(
        { 'opacity' : '.8' },
        300
      );
      jqueryMap.$container.find('.modal-content').animate(
        { 'top' : '0' },
        300
      );

      // 隐藏 ‘活动锦囊’ 模态框
      jqueryMap.$container.find('.modal-close-btn').click(function (){
        jqueryMap.$container.find('.modal-opacity').animate(
          { 'opacity' : '0' },
          300
        );
        jqueryMap.$container.find('.modal-content').animate(
          { 'top' : '-20rem' },
          300,
          function () {
            jqueryMap.$container.find('.spa-modal').css({ 'display' : 'none' });
          }
        );
      });

    });


    // 弹出 rule 模态框
    jqueryMap.$test_start.click(function () {
      jqueryMap.$container
        .find('.spa-modal-content')
        .html(configMap.spa_modal_rule_tip);

      jqueryMap.$container.find('.spa-modal').css({ 'display' : 'block' });
      jqueryMap.$container.find('.modal-opacity').animate(
        { 'opacity' : '.8' },
        300
      );
      jqueryMap.$container.find('.modal-content').animate(
        { 'top' : '0' },
        300
      );

      // 隐藏 ‘rule’ 模态框并跳转到问答页面
      jqueryMap.$container.find('.modal-close-btn').click(function (){
        jqueryMap.$container.find('.spa-welcome').css('display', 'none');
        jqueryMap.$container.find('.spa-question')
          .html(configMap.spa_question)
          .css('display', 'block');
        jqueryMap.$container.find('.modal-content').animate(
          { 'top' : '-20rem' },
          300,
          function () {
            jqueryMap.$container.find('.spa-modal').css({ 'display' : 'none' });
          }
        );
      });

    });

  };
  //------------------------ jQuery 事假处理程序 --------------------------------

  //----------------------------- 公开方法 -------------------------------------
  initModule = function ($container) {
    stateMap.$container = $container;
    $container.html(configMap.main_html);
    // !!! 调试完再解开
    // $container.find('.spa-welcome').html(configMap.spa_welcome);
    setJqueryMap();
    changeFontSize();
    randomQuestion();
    randomScore();
    onClick();
    jqueryMap.$container.find('.spa-question')
      .html(configMap.spa_question)
      .css('display', 'block');

    console.log('题目随机：' + stateMap.random_question_arr);
    console.log('分数随机：' + stateMap.random_score);
  };

  return { initModule : initModule };
  //----------------------------- 公开方法 -------------------------------------
}());
