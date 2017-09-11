// 初始化模块标题
var insertModuleTitle = $(function() {

	// 请求模块标题模板
	$(function() {

		$.ajax({
			type: "get",
			url: "components/module-title/module-title.html",
			success: function(dataHTML) {
				// 插入模板到页面
				$(".module").prepend(dataHTML);
			},
			error: function(error) {
				alert("request error");
			}
		});

	}());

	// 请求模块模块标题数据
	$(function() {

		$.ajax({
			type: "get",
			url: "data/module-title.json",
			success: function(data) {
				insertModuleTitle(data);
			},
			error: function(error) {
				alert("requests error");
			}
		});

	}());

	// 插入模块标题
	function insertModuleTitle(data) {

		// 动态渲染模板标题
		var moduleTitle = $(".module .title .module-title");
		var i = 0;
		for(var title in data.page["team"]) {
			$($(".module")[i]).find(".title .module-title").html(data.page["team"][title]);
			i++;
		}
	}
}());

// 动态更换头图图片
var changePrefaceImg = $(function() {

	var prefaceImg = $(".preface .banner-img img");
	prefaceImg.attr("src", "images/team/banner.png");
}());

//导师部分效果

$(document).ready(function() {
	var animating = false;
	var cardsCounter = 0;
	var numOfCards = 6;
	var decisionVal = 80;
	var pullDeltaX = 0;
	var deg = 0;
	var $card, $cardReject, $cardLike;

	function pullChange() {
		animating = true;
		deg = pullDeltaX / 10;
		$card.css('transform', 'translateX(' + pullDeltaX + 'px) rotate(' + deg + 'deg)');
		var opacity = pullDeltaX / 100;
		var rejectOpacity = opacity >= 0 ? 0 : Math.abs(opacity);
		var likeOpacity = opacity <= 0 ? 0 : opacity;
		$cardReject.css('opacity', rejectOpacity);
		$cardLike.css('opacity', likeOpacity);
	};

	function release() {
		if(pullDeltaX >= decisionVal) {
			$card.addClass('to-right');
		} else if(pullDeltaX <= -decisionVal) {
			$card.addClass('to-left');
		}
		if(Math.abs(pullDeltaX) >= decisionVal) {
			$card.addClass('inactive');
			setTimeout(function() {
				$card.addClass('below').removeClass('inactive to-left to-right');
				cardsCounter++;
				if(cardsCounter === numOfCards) {
					cardsCounter = 0;
					$('.demo__card').removeClass('below');
				}
			}, 300);
		}
		if(Math.abs(pullDeltaX) < decisionVal) {
			$card.addClass('reset');
		}
		setTimeout(function() {
			$card.attr('style', '').removeClass('reset').find('.demo__card__choice').attr('style', '');
			pullDeltaX = 0;
			animating = false;
		}, 300);
	};
	$(document).on('mousedown touchstart', '.demo__card:not(.inactive)', function(e) {
		if(animating)
			return;
		$card = $(this);
		$cardReject = $('.demo__card__choice.m--reject', $card);
		$cardLike = $('.demo__card__choice.m--like', $card);
		var startX = e.pageX || e.originalEvent.touches[0].pageX;
		$(document).on('mousemove touchmove', function(e) {
			var x = e.pageX || e.originalEvent.touches[0].pageX;
			pullDeltaX = x - startX;
			if(!pullDeltaX)
				return;
			pullChange();
		});
		$(document).on('mouseup touchend', function() {
			$(document).off('mousemove touchmove mouseup touchend');
			if(!pullDeltaX)
				return;
			release();
		});
	});
	
	
	
	//获取导师模块并跳转页面
	var moduleFourViewMore = (function () {
		// 加载模块
		function router(module, container) {
			container = container || $('#container');
			// 请求模块结构
			$.ajax({
				url: 'views/team/' + module + '.html',
				success: function(data) {
					container.html(data);
				},
				error: function(error) {
					console.log(' 写入 HTML 失败！');
				}
			});
	
		}
		// 动态加载 css 文件
		function loadCss(module) {
			$.ajax({
				url: 'css/' + module + '.css',
				success: function(data) {
					var cssLink = $('link.dynamic');
					cssLink.attr('href', 'css/' + module + '.css');
				},
				error: function(error) {
					console.log('请求外部 css 样式表失败！');
				}
			});
		}
    $('.module-03 .main .demo__card-cont').find('demo__card img')
    	.click(function () {
//  		router( 'daoshi-jiawei' );
//  		loadCss('team-three-level');
			alert("ok");
    	});
  }());
	
});



