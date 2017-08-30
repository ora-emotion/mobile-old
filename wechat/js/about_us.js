// $(function(){
// 	$(".btn a").click(function(){
// 		$(".module-02-bg").css({"height":"30rem","overflow":""});
// 		$(".btn").hide();
// 		$(".module3").css({ "marginTop" : 0 });
// 	});
// });

var ViewMore = (function () {
    var aBtn = $(".module-02 .view-more-btn");
    var main = $(".module-02 .main");
    aBtn.click(function (event) {

        $(this).css({ "display" : "none" });
        main.css({ "height" : "100%", "overflow" : "" });

        return false;
    });
}());
