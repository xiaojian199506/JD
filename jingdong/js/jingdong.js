$(function() {
	var time1 = null;
	var time2 = null;
	//手机京东
	$(".app_jd>a,#app_jd_items").mouseenter(function() {
		clearTimeout(time1);
		$("#app_jd_items").show(100);
	})
	$(".app_jd>a,#app_jd_items").mouseleave(function() {
		time1 = setTimeout(function() {
			$("#app_jd_items").hide(100);
		}, 100);
	})
	//客户服务
	$(".service>a,#service_items").mouseenter(function() {
		clearTimeout(time2);
		$("#service_items").show(100);
	})
	$(".service>a,#service_items").mouseleave(function() {
		time2 = setTimeout(function() {
			$("#service_items").hide(100);
		}, 100);
	});
	//左边侧边栏
	$("#cate_box>li").each(function(e) {
		this.index = e;
		$(this).mouseenter(function() {
			var num = this.index;
			$(".hide1").eq(num).show(100);
			$(".hide1").not($(".hide1").eq(num)).hide(100);
		})
	})
	$("#cate_box,.hide1").mouseleave(function() {
		$(".hide1").hide();
	})
	//中间广告切换
	var slideShow = $("#slider"),
		ul = slideShow.find("ul"),
		showNumber = slideShow.find(".showNav span"),
		oneWidth = slideShow.find("ul li").eq(0).width();
	var timer = null;
	var iNow = 0;
	showNumber.click(function() {
		$(this).addClass("active").siblings().removeClass("active");
		iNow = $(this).index();
		ul.animate({
			"left": -oneWidth * iNow,
		})
	});
	//中间广告自动轮播
	function autoPlay() {
		timer = setInterval(function() {
			iNow++;
			if(iNow > showNumber.length - 1) {
				iNow = 0;
			}
			showNumber.eq(iNow).addClass("active").siblings().removeClass("active");
			ul.animate({
			"left": -oneWidth * iNow,
		})
//			showNumber.eq(iNow).trigger("click");
		}, 2000); //2000为轮播的时间
	}
	autoPlay();
	slideShow.hover(
		function() {
			clearInterval(timer);
		}, autoPlay
	);
	//下面广告左右移动
	var Span1 = $("#ad_1 ul");
	var Span2 = $("#ad_2 span");
	var Span3 = $("#ad_3 span");
	var Span4 = Span1.find("li");
	var twoWidth = Span1.find("li").eq(0).width();
	var isnow = 0;
	Span2.click(function() {
		Span1.find("li").last().insertBefore(Span1.find("li").eq(0));
		Span1.css('left', -twoWidth).stop(false).animate({
			"left": 0,
		},function(){
			Span1.stop();
		})
	})
	Span3.click(function() {
		Span1.stop(false).animate({
			'left': -twoWidth,
		},function() {
			
			Span1.css('left', '0');
			Span1.append(Span1.find("li").eq(0));
		})
	})
})