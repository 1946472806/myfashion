

$(function(){
	new Swiper('#mustbuySwiper', {
         pagination: '.swiper-pagination',
         nextButton: '.swiper-button-next',
         prevButton: '.swiper-button-prev',
         autoplay: 1000,
         slidesPerView: 4,
         spaceBetween: 5,
         loop: true
    });
	
//隐藏二级菜单
	function second(lar,sma){
		
		lar.mouseenter(function(){
			sma.animate({opacity: 'show'});
		})
//		sma.mouseenter(function(){
//			sma.animate({opacity: 'show'});
//		})
		sma.mouseleave(function(){
			sma.animate({opacity: 'hide'});
		})
//		lar.mouseleave(function(){
//			sma.animate({opacity: 'hide'});
//		})
	}
	function second1(lar,sma){
		
		lar.mouseenter(function(){
			sma.animate({opacity: 'show'});
		})
//		sma.mouseenter(function(){
//			sma.animate({opacity: 'show'});
//		})
		sma.mouseleave(function(){
			sma.animate({opacity: 'hide'});
		})
//		lar.mouseleave(function(){
//			sma.css({"display":"none"});
//		})
	}
//扫码
	second($("#App"),$("#headerApp_m"));

//购物袋	
	second1( $("#shop"),$("#headershop"));


//二级菜单
//新品
	second($("#menu1"),$("#nts"));

//女士
	second($("#menu2"),$("#women"));

//男士
	second($("#menu3"),$("#man"));


//童装
	second($("#menu4"),$("#wear"));

	
//	腕表
	second($("#menu5"),$("#watch"));

//	品牌
	second($("#menu6"),$("#brand"));

//	在线咨询
	second($(".consultApp"),$(".consult_app_m"));

	
	//	商品详情吸顶效果
	var box2Top = $(".proTab_m").offset().top;
	
//	在线咨询跟随滚动条运动
	$(window).scroll(function(){
		var scrollTop = $(window).scrollTop();
		$(".consult").stop().animate({"top":100 + scrollTop});
		if (scrollTop >= box2Top+380) {
			$(".proTab_m").css({position:"fixed", top:0});
			$(".btn_add_shopping1").show();
			$(".btn_buy_now1").show();
		}
		else {
			$(".proTab_m").css({position:"static"});
			$(".btn_add_shopping1").hide();
			$(".btn_buy_now1").hide();
		}
	});
	//	回到顶部
	$(".consult_top").click(function(e){
		e.preventDefault();
		$("html,body").stop(true).animate({scrollTop:0});

	})

	
	$(".list_edit a").mouseenter(function(){
		$(this).addClass("zoomThumbActive");
		$(".zoomPad_img").attr("src", $(this).children("img").attr("src") );

	})
	$(".list_edit a").mouseleave(function(){
		$(this).removeClass("zoomThumbActive")	
	})
	
	
//	放大镜
	Zoom_big();
	function Zoom_big(){
		//等比公式
		//小图width/大图width == 小区域width/大区域width
		$("#smallArea").width( $("#smallImg").width() * $("#bigArea").width() / $("#bigImg").width() );
		$("#smallArea").height( $("#smallImg").height() * $("#bigArea").height() / $("#bigImg").height() );
		
		//放大系数
		var scale = $("#bigImg").width() / $("#smallImg").width();
		
		//在小图中移动
		$("#smallImg").mousemove(function(e){
			$("#bigImg").attr("src", $(this).children("img").attr("src") );
			$("#smallArea").show(); //显示小区域
			$("#bigArea").show(); //显示大区域
			
			var x = e.pageX - $("#smallImg").offset().left - $("#smallArea").width()/2;
			var y = e.pageY - $("#smallImg").offset().top - $("#smallArea").height()/2;
			
			//控制不超出左右边界
			if (x < 0){
				x = 0;
			}
			else if (x > $("#smallImg").width()-$("#smallArea").width()){
				x = $("#smallImg").width()-$("#smallArea").width();
			}
			//控制不超出上下边界
			if (y < 0){
				y = 0
			}
			else if (y > $("#smallImg").height()-$("#smallArea").height()) {
				y = $("#smallImg").height()-$("#smallArea").height();
			}
			
			//小区域移动
			$("#smallArea").css({left:x, top:y});
			
			//大图移动
			$("#bigImg").css({left: -scale*x,top: -scale*y});
		})
		
		//移除小图
		$("#smallImg").mouseleave(function(){
			$("#smallArea").hide(); //隐藏小区域
			$("#bigArea").hide(); //隐藏大区域
		})
	}
	
	
	$(".clearfix li a").mouseenter(function(){
		$(this).siblings($(".size_tip")).show();
	})
	$(".clearfix li a").mouseleave(function(){
		$(this).siblings($(".size_tip")).hide();
	})
	
	
//	点击尺码
	$(".clearfix li a").click(function(){
		$(this).parent().addClass("cur");
		$(this).parent().siblings().removeClass("cur");
	})
	

//	点击商品详情
	$("#tab li").click(function(){
		$(this).addClass("current").siblings().removeClass("current");
		
	})
	$("#current1").click(function(){
		$(window).scrollTop("1390");
		$(".product").show();
		$(".story").show();
		$(".details").show();
		$(".size").hide();
		$(".bution").hide();
	})
	$("#current2").click(function(){
		$(window).scrollTop("1390");
		$(".product").hide();
		$(".story").hide();
		$(".details").hide();
		$(".size").show();
		$(".bution").hide();
	})
	$("#current3").click(function(){
		$(window).scrollTop("1390");
		$(".product").hide();
		$(".story").hide();
		$(".details").hide();
		$(".size").hide();
		$(".bution").show();
		
	})

	
	total()

	//计算购物车商品数量和总金额
    function total(){
	    var $priceall = 0
        var $numall = 0
	    $('#product2_li .product2').each(function () {
            var $num = parseFloat($(this).find('p').attr('num'))
            var $price = parseFloat($(this).find('p').attr('price'))
            $priceall += $num * $price
            $numall += $num
      })

        if ($priceall > 0){
            $priceall = $priceall.toFixed(2)
        }

        $('#total_num').html($numall)
        $('#headershop .car_b .totalprice').html($priceall)

        if($priceall > 0){
            // $("#headershop").css({"display":"block"});
			$("#headershop .kong").css({"display":"none"});
			$("#headershop .cart_out").css({"display":"block"});
		}
		else{
		    // $("#headershop").css({"display":"block"});
			$("#headershop .kong").css({"display":"block"});
			$("#headershop .cart_out").css({"display":"none"});
		}

    }

	
})
