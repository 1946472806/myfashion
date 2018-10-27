

$(function(){
	
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

//	猜你喜欢手动轮播
	$.get("/static/json/car.json", function(data2){
		var arr2 = data2;
		for (var k =0; k < arr2.length; k++) {
			var obj2 = arr2[k];
			var imgurl = "/static/"+obj2.img.substring(3,);
			
			//创建li节点
			var li_car = $("<li class='car_list'></li>").appendTo("#like_list");
			var a_car = $("<a href='' title="+obj2.wen+"></a>").appendTo(li_car);
			$("<img class='car_img' src="+ imgurl +" alt="+obj2.alt+">").appendTo(a_car);
			var div_car = $("<div class='list_name'></div>").appendTo(a_car);
			$("<span class='shop_name'>"+ obj2.said1 +"</span></br><span class='shop_type'>"+obj2.said2+"</span>").appendTo(div_car);
			$("<div class='shop_price'>"+"￥"+obj2.price+"</div>").appendTo(li_car);
			$("<a class='shop_add' title="+obj2.title+">"+obj2.html+"</a>").appendTo(li_car);
			
		}
		lunbo_car();	
	})
	
	//jq小图轮播
	function lunbo_car(){	
		var like_list = $("#like_list");
		var li2 = $("#like_list li");
		
		//复制第一张图到最后
		li2.eq(0).clone(true).appendTo(like_list);
		li2.eq(1).clone(true).appendTo(like_list);
		li2.eq(2).clone(true).appendTo(like_list);
		li2.eq(3).clone(true).appendTo(like_list);
		
		var size3 = $("#like_list li").size();
		like_list.width(262*size3);
		
		//开启定时器
		var i = 0;
//		var timer3 = setInterval(function(){
//			i++;
//			move3();
//		}, 3000);
//					
		function move3(){
			if (i < 0) {
				like_list.css("left", -262*(size3-1));
				i = size3-4;
			}
			if (i >= size3){
				like_list.css("left", 0);
				i = 4;
			}
			like_list.stop().animate({left:-i*262}, 500);
		}
		
		$("#car_prev").click(function(){
			i -= 4;
			move3();
		})
		//下一页
		$("#car_next").click(function(){
			i += 4;
			move3();
		})
		
	}
	

//	在线咨询跟随滚动条运动
	$(window).scroll(function(){
		var scrollTop = $(window).scrollTop();
		$(".consult").stop().animate({"top":100 + scrollTop});
	});
	//	回到顶部
	$(".consult_top").click(function(e){
		e.preventDefault();
		$("html,body").stop(true).animate({scrollTop:0});

	})




	$(".prev_good").click(function(){
		$("#mycarousel1").animate({"top":"+=69px"})
		
	})
	$(".next_good").click(function(){
		$("#mycarousel1").animate({"top":"-=69px"})
	})
	
	$(".list_edit a").mouseenter(function(){
		$(this).addClass("zoomThumbActive");
		$(".zoomPad_img").attr("src", $(this).children("img").attr("src") );

	})
	$(".list_edit a").mouseleave(function(){
		$(this).removeClass("zoomThumbActive")	
	})
	
	
//	放大镜
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
	

//	相关推荐
	//	相关推荐手动轮播
	$.get("/static/json/car.json", function(data0){
		var arr_good = data0;
		for (var k =0; k < arr_good.length; k++) {
			var good_obj2 = arr_good[k];
			var imgurl1 = "/static/"+good_obj2.img.substring(3,);
			
			//创建li节点
			var li_cart = $("<li class='cart_list1'></li>").appendTo("#good_list1");
			var a_cart = $("<a href='' title="+good_obj2.wen+"></a>").appendTo(li_cart);
			$("<img class='cart_img' src="+ imgurl1 +" alt="+good_obj2.alt+">").appendTo(a_cart);
			var div_cart = $("<div class='list1_name'></div>").appendTo(a_cart);
			$("<span class='shop_name'>"+ good_obj2.said1 +"</span></br><span class='shop_type'>"+good_obj2.said2+"</span>").appendTo(div_cart);
			$("<div class='shop_price'>"+good_obj2.unit+good_obj2.price_good+"</div>").appendTo(li_cart);
			$("<a class='shop_add' title="+good_obj2.title+">"+good_obj2.html+"</a>").appendTo(li_cart);
			
		}
		lunbo_cart();	
	})
	
	//jq小图轮播
	function lunbo_cart(){	
		var good_list1 = $("#good_list1");
		var good_li2 = $("#good_list1 li");
		
		//复制第一张图到最后
		good_li2.eq(0).clone(true).appendTo(good_list1);
		good_li2.eq(1).clone(true).appendTo(good_list1);
		good_li2.eq(2).clone(true).appendTo(good_list1);
		good_li2.eq(3).clone(true).appendTo(good_list1);
		
		var good_size3 = $("#good_list1 li").size();
		good_list1.width(262*good_size3);
		
		//开启定时器
		var i = 0;
//		var timer3 = setInterval(function(){
//			i++;
//			good_move3();
//		}, 3000);
//					
		function good_move3(){
			if (i < 0) {
				good_list1.css("left", -262*(good_size3-1));
				i = good_size3-4;
			}
			if (i >= good_size3){
				good_list1.css("left", 0);
				i = 4;
			}
			good_list1.stop().animate({left:-i*262}, 500);
		}
		
		$("#cart_prev").click(function(){
			i -= 4;
			good_move3();
		})
		//下一页
		$("#cart_next").click(function(){
			i += 4;
			good_move3();
		})
		
	}
	
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

	$(".goon").click(function(e){
		e.preventDefault();
		window.location.href="list.html";
	})
	
	
// 	//获取购物车的cookie数据,并用节点显示
// 	var name_load = sessionStorage.getItem("arr.username");
// //	var name_load = $.cookie("name");
// 	if(name_load){
// 		$(".top_r_load").html("欢迎 "+name_load+" 用户！");
// 	}
// 	else{
// 		$(".top_r_load").html("登录");
//
// 	}
	refresh();
	function refresh() {
		var arr = $.cookie("goods");
		if (arr) {
			arr = JSON.parse(arr);
			if(arr.length>0){
				$(".empty_car").css({"display":"none"});
				$(".full_car").css({"display":"block"});
				$(".kong").css({"display":"none"});
				$(".cart_out").css({"display":"block"});
			}
			else{
				$(".empty_car").css({"display":"block"});
				$(".full_car").css({"display":"none"});
				$(".kong").css({"display":"block"});
				$(".cart_out").css({"display":"none"});
			}
			
			
			//先清除旧节点
			$("#shop_ck").empty();
			$("#product2_li").empty();
			
			//再添加新节点
			var totalPrice = 0; //总价
			var total_num =0 ;
			//遍历数组
			for (var i=0; i<arr.length; i++) {
				
				var obj = arr[i];
				var imgurl2 = "/static/"+obj.img.substring(3,);
				
				//创建li节点
				var tr = $("<tr></tr>").appendTo("#shop_ck");
				var td = $("<td  class='shop_ck1'></td>").appendTo(tr);
				//是否选中
				if (obj.checked) {
					$('<input class="ck_box float_l" type="checkbox" checked="checked" />').appendTo(td);
				}
				else {
					$('<input class="ck_box float_l" type="checkbox" />').appendTo(td);
				}
				var shop_div = $("<div class='shop_ck_img float_l'></div>").appendTo(td);
				$('<img height="90" src="'+ imgurl2 +'" >').appendTo(shop_div);
				var shop_div1 = $("<div class='shop_img_said float_l'></div>").appendTo(td);
				$('<a href="javascript:;" class="goods_dian">'+obj.said1+obj.said2+'<br/>'+obj.wen+'</a>').appendTo(shop_div1);
				var td1 = $("<td class='shop_ck_price'>"+obj.unit+obj.price_good+"</td>").appendTo(tr);
				var td2 = $("<td class='shop_ck_num'></td>").appendTo(tr);
				var shop_div2 = $("<div class='shop_ck_num1'></div>").appendTo(td2);
//				<input class="reduce" type="button" value="-" />
				$('<input class="shop_jian" type="button" value="-" />').appendTo(shop_div2);
				$('<input class="ck_val" type="text" value="'+obj.num+'" />').appendTo(shop_div2);
				$('<input class="shop_jia" type="button" value="+" />').appendTo(shop_div2);
				var td3 = $("<td class='shop_ck2'>"+obj.unit+ obj.price_good * obj.num +"</td>").appendTo(tr);
				var td4 = $("<td class='shop_ck3'></td>").appendTo(tr);
				var shop_div3 = $("<div style='text-align:left;margin-left:48px;'></div>").appendTo(td4);
				$('<a class="cp_fav" href="" title="加入收藏">加入收藏</a><br /><br />').appendTo(shop_div3);
				$('<a class="cp_del" href="" title="删除">删除</a>').appendTo(shop_div3);
				
				li3();
				function li3(){
					var li3 = $("<li class='product2'></li>").appendTo("#product2_li");
					$('<img src="'+imgurl2+'" style="width:80px;height:80px;float:left;"/>').appendTo(li3);
					var p_li = $('<p style="color:#CCCCCC;float: left;padding-left:10px;line-height:24px;"></p>').appendTo(li3);
					$('<a href="" style="font-size:16px;">'+obj.said1 +'&nbsp;'+obj.said2+'<br/>'+obj.wen+'<a><br/>').appendTo(p_li);
					$('<span  style="color: #555555;"><i>'+obj.unit+'</i>'+obj.price_good+'</span>&nbsp;&nbsp; X<span>'+obj.num+'</span>').appendTo(p_li);
					$('<div class="dell float_r"><a href="" style="font-size:28px;" class="del">╳</a></div>').appendTo(li3);	
					$('<div class="clear"></div>').appendTo(li3);

				}
				
				//计算总价
				if (obj.checked) {
					totalPrice += obj.price_good * obj.num;
					total_num += obj.num;
				}
				
			}
			//点击商品
			$(".shop_img_said").on("click", ".goods_dian", function(e){
				e.preventDefault();
				var index = $(this).parent().parent().parent().index(); 
				console.log(index);
				var obj = arr[index];
				//进入详情页， 且将当前点击的商品的id传入
				location.href = "goods.html?id=" + obj.id;
			})
			
			//显示总价
			$("#total").html("￥"+totalPrice);
			$(".totalprice").html(totalPrice);
			$("#total_num").html(total_num);
			$("#total_nums").html(total_num);//购物车页下面总数
		}
		else {
			console.log("购物车还没有商品， 请先购买！");
			$(".empty_car").css({"display":"block"});
			$(".shop_ck").css({"display":"none"});
			$(".kong").css({"display":"block"});
			$(".cart_out").css({"display":"none"});
			$(".full_car").hide();
		}
	}
	
	
	
	//+
	$("#shop_ck").on("click", ".shop_jia", function(e){
		e.preventDefault();
		var index = $(this).index("#shop_ck .shop_jia");
		
//		//获取cookie并修改
		var arr = JSON.parse($.cookie("goods"));
		arr[index].num++;
		
//		//覆盖原来的cookie
		$.cookie("goods", JSON.stringify(arr), {expires:30, path:"/"});
//		//刷新节点数据
		refresh();
	})
	
	//-
	$("#shop_ck").on("click", ".shop_jian", function(){
//		$(".shop_jia").unbind();
		var index = $(this).index("#shop_ck .shop_jian");		

		//获取cookie并修改
		var arr = JSON.parse($.cookie("goods"));

		arr[index].num--;
		if (arr[index].num < 1) {
			arr[index].num = 1;
		}
		//覆盖原来的cookie
		$.cookie("goods", JSON.stringify(arr), {expires:30, path:"/"});
		
		//刷新节点数据
		refresh();
	})
//	
//	
//	//删除
	$("#product2_li").on("click", ".del", function(e){
		e.preventDefault();
		var index = $(this).index("#product2_li .del");
		
		//获取cookie并修改
		var arr = JSON.parse($.cookie("goods"));
		var bbb= arr.splice(index, 1); //删除数组arr的第index个
		//覆盖原来的cookie
		$.cookie("goods", JSON.stringify(arr), {expires:30, path:"/"});
		
		isAllSelect();
		
		//刷新节点数据
		refresh();
	})
	//删除
	$("#shop_ck").on("click", ".cp_del", function(e){
		e.preventDefault();
		var index = $(this).index("#shop_ck .cp_del");
		//获取cookie并修改
		var arr = JSON.parse($.cookie("goods"));
		var bbb= arr.splice(index, 1); //删除数组arr的第index个
		//覆盖原来的cookie
		$.cookie("goods", JSON.stringify(arr), {expires:30, path:"/"});
		
		isAllSelect();
		
		//刷新节点数据
		refresh();
		
	})
	
	
	
	//勾选
	$("#shop_ck").on("click", ".ck_box", function(){
		var index = $(this).index("#shop_ck .ck_box");
		
		//获取cookie并修改
		var arr = JSON.parse($.cookie("goods"));
		arr[index].checked = !arr[index].checked;
		
		//覆盖原来的cookie
		$.cookie("goods", JSON.stringify(arr), {expires:30, path:"/"});
		
		//判断是否全选了
		isAllSelect();
		
		//刷新节点数据
		refresh();
	})
	
	//判断是否全部勾选了
	isAllSelect();
	function isAllSelect(){
		
		//判断是否为undefined
		var arr = $.cookie("goods");
		if (!arr) {
			return;
		}
		
		var arr = JSON.parse($.cookie("goods"));
		
		var sum = 0;
		for (var i=0; i<arr.length; i++) {
			sum += arr[i].checked;
		}
		
		//全选了
		if (arr.length!=0 && sum==arr.length) {
			$("#allSelect").prop("checked", true);
			$("#allSelect1").prop("checked", true);
			
		}
		//未全选
		else {
			$("#allSelect").prop("checked", false);
			$("#allSelect1").prop("checked", false);
			
		}
	}
	
	//全选
	$("#allSelect").click(function(){
		//判断是否为undefined
		var arr = $.cookie("goods");
		if (!arr) {
			return;
		}
		
		var arr = JSON.parse($.cookie("goods"));
		for (var i=0; i<arr.length; i++) {
			//全选
			if ($(this).prop("checked")){
				arr[i].checked = true;
				
			}
			//全不选
			else {
				arr[i].checked = false;
			}
		}
		$.cookie("goods", JSON.stringify(arr), {expires:30, path:"/"});
		
		//刷新
		refresh();
	})
	$("#allSelect1").click(function(){
		//判断是否为undefined
		var arr = $.cookie("goods");
		if (!arr) {
			return;
		}
		
		var arr = JSON.parse($.cookie("goods"));
		for (var i=0; i<arr.length; i++) {
			//全选
			if ($(this).prop("checked")){
				arr[i].checked = true;
			}
			//全不选
			else {
				arr[i].checked = false;
			}
		}
		$.cookie("goods", JSON.stringify(arr), {expires:30, path:"/"});
		
		//刷新
		refresh();
	})
	
	//删除选中
	$("#delSelect").click(function(){
		
		//获取cookie并修改
		var arr = JSON.parse($.cookie("goods"));
		
		//将未选中的商品添加到新数组newArr中，再将newArr保存到cookie
		var newArr = [];
		for (var i=0; i<arr.length; i++) {
			if (!arr[i].checked) {
				newArr.push(arr[i]);
			}
		}
		
		//覆盖原来的cookie
		$.cookie("goods", JSON.stringify(newArr), {expires:30, path:"/"});
		
		isAllSelect();
		
		//刷新节点数据
		refresh();
	})


	
	
	
	
	
	





















	
	
	
})
