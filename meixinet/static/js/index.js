$(function(){
//--------------------------------------- 轮播数据原改为从数据库中获取 -------------------------------------------
	//先获取轮播图的数据
	// $.get("/static/json/lunbo.json", function(data){
// //		大图
// 		var arr = data;
// 		for (var i=0; i<arr.length; i++) {
// 			var obj = arr[i];
// 			var imgurl = "/static/"+obj.img.substring(3,);
// 			$("<li><a href='' title="+obj.wen+"><img src="+ imgurl +" alt="+obj.alt+ "></a></li>").appendTo("#list");
// 		}
//--------------------------------------- 轮播数据原改为从数据库中获取 -------------------------------------------
	//轮播
	lunbo();
//--------------------------------------- 轮播数据原改为从数据库中获取 -------------------------------------------
	// })
	// $.get("/static/json/lunbo1.json", function(data1){
	// 	var arr1 = data1;
	// 	for (var j=0; j<arr1.length; j++) {
	// 		var obj1 = arr1[j];
	// 		var imgurl1 = "/static/"+obj1.img.substring(3,);
	// 		//创建li节点
	// 		var li2 = $("<li></li>").appendTo("#list_small");
	// 		var a_list = $("<a href='' title="+obj1.wen+"></a>").appendTo(li2);
	// 		$("<img class='productImg' src="+ imgurl1 +" alt="+obj1.alt+">").appendTo(a_list);
	// 		$("<p>"+ obj1.said1 +"</br>"+obj1.said2+"</p>").appendTo(a_list);
	// 		$("<div class='c_gray'>"+obj1.div+"</div>").appendTo(li2);
	//
	// 	}
//--------------------------------------- 轮播数据原改为从数据库中获取 -------------------------------------------
	lunbo_small();
	// })
	//jq大图轮播
	function lunbo(){
		
		var list = $("#list");
		var li_big = $("#list li");
		
		//复制第一张图到最后
		li_big.first().clone(true).appendTo(list);
		
		//
		var size1 = $("#list li").size();
		list.width(1200*size1);
		
		//开启定时器
		var index1 = 0;
		var timer1 = setInterval(function(){
			index1++;
			move1();
		},4000);
		
		function move1(){
			
			if (index1 < 0) {
				list.css("left", -1200*(size1-1));
				index1 = size1-2;
			}
			
			if (index1 >= size1){
				list.css("left", 0);
				index1 = 1;
			}
			
			list.stop().animate({left:-index1*1200}, 500);
			
		}
		
		//上一页
		$("#prev").click(function(){
			index1--;
			move1();
		})
		
		//下一页
		$("#next").click(function(){
			index1++;
			move1();
		})
		
		//移入移出
		$("#banner").hover(function(){
			$("#prev").css({"display":"block"});
			$("#next").css({"display":"block"});
			clearInterval(timer1);
		}, 
		function(){
			$("#prev").css({"display":"none"});
			$("#next").css({"display":"none"});
			timer1 = setInterval(function(){
				index1++;
				move1();
			},3000);
		})
		
		$("#prev").mouseenter(function(){
			$("#prev").css({"opacity":"1"});
		})
		$("#prev").mouseleave(function(){
			$("#prev").css({"opacity":"0.4"});
	
		})
		$("#next").mouseenter(function(){
			$("#next").css({"opacity":"1"});
		})
		$("#next").mouseleave(function(){
			$("#next").css({"opacity":"0.4"});
			
		})
	}
	//jq小图轮播
	function lunbo_small(){	
		var list2 = $("#list_small");
		
		var ali2 = $("#list_small li");
		
		//复制第一张图到最后
		ali2.eq(0).clone(true).appendTo(list2);
		ali2.eq(1).clone(true).appendTo(list2);
		ali2.eq(2).clone(true).appendTo(list2);
		ali2.eq(3).clone(true).appendTo(list2);
		ali2.eq(4).clone(true).appendTo(list2);
//		ali2.eq(5).clone(true).appendTo(list2);
//		ali2.eq(6).clone(true).appendTo(list2);
		
		//
		var size2 = $("#list_small li").size();
		list2.width(200*size2);
		
		//开启定时器
		var index2 = 0;
		var timer2 = setInterval(function(){
			index2++;
			move2();
		},4000);
//					
		function move2(){
			
			if (index2 < 0) {
				list2.css("left", -200*(size2-1));
				index2 = size2-7;
			}
			
			if (index2 >= size2-5){
				list2.css("left", 0);
				index2 =1;
			}
			
			list2.stop().animate({left:-index2*200},1000);
			
		}
		
		//上一页
		$("#prev_left").click(function(){
			index2++;
			move2();
		})
		
		//下一页
		$("#next_right").click(function(){
			index2--;
			move2();
		})
		
		
	}

	
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
	$("#shop").click(function(e){
		e.preventDefault();
		window.location.href="car.html";
	})


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
	
	
// //	var name_load = $.cookie("name")?$.cookie("name"):"登录";
//
// 	var name_load = sessionStorage.getItem("arr.username");
// 	if(name_load){
// 		$(".top_r_load").html("欢迎 "+name_load+" 用户！");
// 	}
// 	else{
// 		$(".top_r_load").html("登录");
//
// 	}
// --------------------------------------- 数据原改为从数据库中获取 --------------------------------------------------------------------
// 	refresh();
// 	function refresh() {
// 		var arr = $.cookie("goods");
// 		if (arr) {
// 			arr = JSON.parse(arr);
// 			if(arr.length>0){
// 				$(".empty_car").css({"display":"none"});
// 				$(".full_car").css({"display":"block"});
// 				$(".kong").css({"display":"none"});
// 				$(".cart_out").css({"display":"block"});
// 			}
// 			else{
// 				$(".empty_car").css({"display":"block"});
// 				$(".full_car").css({"display":"none"});
// 				$(".kong").css({"display":"block"});
// 				$(".cart_out").css({"display":"none"});
// 			}
//
//
// 			//先清除旧节点
// 			$("#shop_ck").empty();
// 			$("#product2_li").empty();
// //
// //					//再添加新节点
// 			var totalPrice = 0; //总价
// 			var total_num =0 ;
// //					//遍历数组
// 			for (var i=0; i<arr.length; i++) {
// 				var obj = arr[i];
// 				var imgurl3 = "/static/"+obj.img.substring(3,);
// 				li3();
// 				function li3(){
// 					var li3 = $("<li class='product2'></li>").appendTo("#product2_li");
// 					$('<img src="'+imgurl3+'" style="width:80px;height:80px;float:left;"/>').appendTo(li3);
// 					var p_li = $('<p style="color:#CCCCCC;float: left;padding-left:10px;line-height:24px;"></p>').appendTo(li3);
// 					$('<a href="" style="font-size:16px;">'+obj.said1 +'&nbsp;'+obj.said2+'<br/>'+obj.wen+'<a><br/>').appendTo(p_li);
// 					$('<span  style="color: #555555;"><i>'+obj.unit+'</i>'+obj.price_good+'</span>&nbsp;&nbsp; X<span>'+obj.num+'</span>').appendTo(p_li);
// 					$('<div class="dell float_r"><a href="" style="font-size:28px;" class="del">╳</a></div>').appendTo(li3);
// 					$('<div class="clear"></div>').appendTo(li3);
//
// 				}
// 				//计算总价
// 				if (obj.checked) {
// 					totalPrice += obj.price_good * obj.num;
// 					total_num += obj.num;
// 				}
//
// 			}
// 			//显示总价
// 			$("#total_num").html(total_num);
// 			$(".totalprice").html(totalPrice);
// 		}
//
// 		else {
// 			console.log("购物车还没有商品， 请先购买！");
// 		}
//     $("#product2_li").on("click", ".del", function(e){
//         e.preventDefault();
//         var index = $(this).index("#product2_li .del");
//
//         //获取cookie并修改
//         var bbb= arr.splice(index, 1); //删除数组arr的第index个
//         //覆盖原来的cookie
//         $.cookie("goods", JSON.stringify(arr), {expires:30, path:"/"});
//         //刷新节点数据
//         //刷新节点数据
//         refresh();
//     })
	// }
//	var arr = JSON.parse($.cookie("goods"));
//	$("#product2_li").on("click", ".del", function(e){
//		e.preventDefault();
//		var index = $(this).index("#product2_li .del");
//		
//		//获取cookie并修改
//		var bbb= arr.splice(index, 1); //删除数组arr的第index个
//		//覆盖原来的cookie
//		$.cookie("goods", JSON.stringify(arr), {expires:30, path:"/"}); 
//		//刷新节点数据
//		refresh();
//	})
	
	
	
	
	
	
	

})



