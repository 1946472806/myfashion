$(function(){
    //大图轮播
    new Swiper('#topSwiper', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true,
        spaceBetween: 5,
        centeredSlides: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false,
        loop: true
    });
    //小图轮播
    //每日必购
     new Swiper('#mustbuySwiper', {
         pagination: '.swiper-pagination',
         nextButton: '.swiper-button-next',
         prevButton: '.swiper-button-prev',
         autoplay: 1000,
         slidesPerView: 8,
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
	second($("#saoma11"),$("#headerApp_m"));

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

//版心图:鼠标移入,动态左移
	$("#box1_btn li").hover(function(){
			$(this).addClass("relative");
			$(this).find("img").addClass("absolute").stop(true).animate({"left":"20"},200);
		},
		function(){
			$(this).find("img").addClass("absolute").stop(true).animate({"left":"0"},200);
		}
	)
	
//	楼层侧栏跟随滚动条运动

	$(window).scroll(function(){
		var scrollTop = $(window).scrollTop();
		$("#nav_floor").stop().animate({"top":scrollTop});
		$(".consult").stop().animate({"top":100 + scrollTop});
		
		//如果没有点击楼层按钮执行动画， 则执行代码
		if (!isMoving) {
			
			var scrollTop = $(window).scrollTop();
			
			//遍历所有的楼层div
			var index_floor = 0;
			$("#box1,#box2,#box3,#box4,#banner,#foot,#tab_box,#box5,#shop_json").each(function(){
				//每个楼层div的top值
				var top = $(this).offset().top;
				var winH = $(window).height(); //页面高度
				
				if (scrollTop + winH/2 >= top) {
					index_floor = $(this).index();
				}
			})
			//console.log(index_floor);
			
			$("#nav_floor li").eq(index_floor).find("span").addClass("active_floor")
				.parent().siblings().find("span").removeClass("active_floor")
		}
		
		
	});

	$(".consult_top").click(function(e){
		e.preventDefault();
		$("html,body").stop(true).animate({scrollTop:0});

	})
	

	//表示是否点击了楼层按钮正在执行动画
	var isMoving = false;
	
	//点击楼层按钮， 让页面滚动到对应的楼层
	$("#nav_floor li").click(function(){
		$(this).find("span").addClass("active_floor")
			.parent().siblings().find("span").removeClass("active_floor")
		
		var index_floor = $(this).index();
		var top = $("#box1,#box2,#box3,#box4,#banner,#foot,#tab_box,#box5,#shop_json").eq(index_floor).offset().top-150;

		
		isMoving = true;
		$("html,body").stop(true).animate({scrollTop: top}, function(){
			isMoving = false;
		});
		
	})
	
	
//	tab切换
	$("#tab_list li").click(function(){
		$(this).addClass("tab_hover").siblings().removeClass("tab_hover");
		
		var index = $(this).index();
		$(".tab_content").eq(index).addClass("tab_show").siblings().removeClass("tab_show");
	})

//	$("#tab_list li").mouseenter(function(){
//		$(this).addClass("tab_hover").siblings().removeClass("tab_hover");
//		
//		var index = $(this).index();
//		$(".tab_content").eq(index).addClass("tab_show").siblings().removeClass("tab_show");
//	})
		
//	热门旗舰店	
	$(".hotflagbox li .hotflagson").mouseenter(function(){
//					
		$(this).children(".hotmiddle").stop(true).animate({"opacity": "1"});
		$(this).children(".topline").stop(true).animate({"width": "166px"});
		$(this).children(".rightline").stop(true).animate({"height": "85px"});
		$(this).children(".bottomline").stop(true).animate({"width": "166px"});
		$(this).children(".leftline").stop(true).animate({"height": "85px"});

	})
	$(".hotflagbox li .hotflagson").mouseleave(function(){
		$(this).children(".hotmiddle").stop(true).animate({"opacity": "0"});
		$(this).children(".topline").stop(true).animate({"width": "0"});
		$(this).children(".rightline").stop(true).animate({"height": "0"});
		$(this).children(".bottomline").stop(true).animate({"width": "0"});
		$(this).children(".leftline").stop(true).animate({"height": "0"});
	})
		
//	3D导航
	$(".shopcenterbox").mouseenter(function(){
		$(this).stop(true).animate({"top": "-50px"});
	})
	$(".shopcenterbox").mouseleave(function(){
		$(this).stop(true).animate({"top": "0px"});
	})


//  品牌详情
	$(".sing_code").mouseenter(function(){
		$(this).stop(true).animate({"height": "131px"},300);
	})
	$(".sing_code").mouseleave(function(){
		$(this).stop(true).animate({"height": "50px"},300);
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



