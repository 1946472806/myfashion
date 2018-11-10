

$(function(){
    //计算总金额
    var selall = true
	total()
    isselection()
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

    //减
    $('.shop_ck_num .shop_jian').click(function () {
        var $that = $(this)
        var $goodsid = $(this).attr('goodsid')

        //发起ajax请求
        $.get('/subnum/',{'goodsid':$goodsid},function (data) {
            if (data['backstatus'] == '1'){
                var num = data['num']
                if (num > 0) {
                    $that.next().html(num)
                }else {
                    $that.parent().parent().parent().hide()
                }
            }
        })
    })

     //加
    $('.shop_ck_num .shop_jia').click(function () {
        var $that = $(this)
        var $goodsid = $(this).attr('goodsid')

        //发起ajax请求
        $.get('/addnum/',{'goodsid':$goodsid},function (data) {
            if (data['backstatus'] == '1'){
                var num = data['num']
                $that.prev().html(num)
            }
        })
    })

    //选择或取消选择
    $('#shop_ck .confirm-wrapper').click(function () {
        var $that = $(this)
        var $goodcartid = $('#shop_ck .confirm-wrapper').attr('goodcartid')
        selall = true

        $.get('/goodsel/',{'goodcartid':$goodcartid},function (data) {
            if (data['backstatus'] == '1'){
                if ($that.find('.glyphicon-ok').length){
                $that.find('span').removeClass('glyphicon-ok').addClass('no')
                }else {
                    $that.find('span').removeClass('no').addClass('glyphicon glyphicon-ok')
                }
            }

            //重新计算金额
            total()
        })
    })

    //全选或取消全选
    $('.conten .full_car .all_ck1').click(function () {
        var $sel = $(this)
        var $shops = $('#shop_ck .confirm-wrapper')

        selall = true
        if ($sel.find('.no').length){ //没有全选的情况下
            //发起ajax请求,将购物车里面的这个用户的全部商品的选择状态改成True
            $.get('/changeall/',{'flag':'1'},function (data) {
                if (data['backstatus'] == 1) {
                    $shops.each(function () {
                        $(this).find('span').removeClass('no').addClass('glyphicon glyphicon-ok')
                    })
                }
                //重新计算金额
                total()
                //本身的图标改一下
                $sel.find('span').removeClass('no').addClass('glyphicon glyphicon-ok')
            })

        }else {
            //发起ajax请求,将购物车里面的这个用户的全部商品的选择状态改成False
            $.get('/changeall/',{'flag':'0'},function (data) {
                if (data['backstatus'] == 1) {
                    $shops.each(function () {
                        $(this).find('span').removeClass('glyphicon glyphicon-ok').addClass('no')
                    })
                }
                //重新计算金额
                total()
                //本身的图标改一下
                $sel.find('span').removeClass('glyphicon glyphicon-ok').addClass('no')
            })
        }
    })

    //全选或取消全选（下面的那个）
    $('.conten #del_shop .all_ck11').click(function () {
        var $sel = $(this)
        var $shops = $('#shop_ck .confirm-wrapper')

        selall = true
        if ($sel.find('.no').length){ //没有全选的情况下
            //发起ajax请求,将购物车里面的这个用户的全部商品的选择状态改成True
            $.get('/changeall/',{'flag':'1'},function (data) {
                if (data['backstatus'] == 1) {
                    $shops.each(function () {
                        $(this).find('span').removeClass('no').addClass('glyphicon glyphicon-ok')
                    })
                }
                //重新计算金额
                total()
                //本身的图标改一下
                $sel.find('span').removeClass('no').addClass('glyphicon glyphicon-ok')
            })

        }else {
            //发起ajax请求,将购物车里面的这个用户的全部商品的选择状态改成False
            $.get('/changeall/',{'flag':'0'},function (data) {
                if (data['backstatus'] == 1) {
                    $shops.each(function () {
                        $(this).find('span').removeClass('glyphicon glyphicon-ok').addClass('no')
                    })
                }
                //重新计算金额
                total()
                //本身的图标改一下
                $sel.find('span').removeClass('glyphicon glyphicon-ok').addClass('no')
            })
        }
    })

    //加入收藏
    $('#shop_ck .shop_ck3 .cp_fav').click(function () {
        var $goodid = $(this).attr('goodid')
        var $that = $(this)

        $.get('/collection/',{'goodid':$goodid},function (data) {
            if (data['backstatus'] == 1) {
                $that.html('✔已收藏')
                $that.attr('disabled','disabled').css('color','green')
            }
        })
    })

    //是否已收藏
    function isselection() {
        $('#shop_ck .shop_ck3').each(function () {
            var $that = $(this).find('.cp_fav')
            var $goodid = $that.attr('goodid')

            $.get('/iscollection/',{'goodid':$goodid},function (data) {
                if (data['backstatus'] == '-1'){
                    $that.html('✔已收藏')
                    $that.attr('disabled','disabled').css('color','green')
                }
            })
        })
    }

    //删除商品
    $('#shop_ck .shop_ck3 .cp_del').click(function () {
        var $that = $(this)
        var $goodid = $that.attr('goodid')

        $.get('/delcar/',{'goodid':$goodid},function (data) {
            if (data['backstatus'] == '1') {
                $that.parent().parent().parent().remove()
            }

            //重新计算金额
            total()
        })
    })

    //批量删除
    $('#del_shop #delSelect').click(function () {
        $('#shop_ck .cltr').each(function () {
        var $confirm = $(this).find('.confirm-wrapper')
        var $shopjian = $(this).find('.shop_jian')

        if ($confirm.find('.glyphicon-ok').length){
            var $goodid = $shopjian.attr('goodsid')
            console.log($goodid)

            $.get('/delcar/',{'goodid':$goodid},function (data) {
                if (data['backstatus'] == '1') {
                    $confirm.parent().parent().remove()
                }

                //重新计算金额
                total()
            })
        }
      })
    })

	//计算选中商品总金额
    function total(){
	    var $priceall = 0
        var $numall = 0
	    $('#shop_ck .cltr').each(function () {
        var $confirm = $(this).find('.confirm-wrapper')
        var $shop_ck_num1 = $(this).find('.shop_ck_num1')
        var $shop_ck2 = $(this).find('.shop_ck2')

        if ($confirm.find('.glyphicon-ok').length){
            var $num = parseFloat($shop_ck_num1.find('.ck_val').html())
            var $price = parseFloat($shop_ck2.find('span').attr('price'))

            $priceall += $num * $price
            $numall += $num
        }else {
                selall = false
            }
      })

        if ($priceall > 0){
            $priceall = $priceall.toFixed(2)
        }

        $('#total_num').html($numall)
        $('#top .to_l .totalprice').html($priceall)
        $('#total_nums').html($numall)
        $('#total').html($priceall)

        //全选按钮
        if (selall){
            $('.conten .full_car .all_ck1').find('span').removeClass('no').addClass('glyphicon glyphicon-ok')
            $('.conten #del_shop .all_ck11').find('span').removeClass('no').addClass('glyphicon glyphicon-ok')
        } else {
            $('.conten .full_car .all_ck1').find('span').removeClass('glyphicon glyphicon-ok').addClass('no')
            $('.conten #del_shop .all_ck11').find('span').removeClass('glyphicon glyphicon-ok').addClass('no')
        }

        if($('#shop_ck').find('.cltr').length){
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

    }

     //下单
    $('.conten #del_shop .goon1').click(function () {
        var $billright = $(this)
        //发起ajax请求
        $.get('/placeorder/',{'test':'1111'},function (data) {
            if (data['backstatus'] == '1'){
                var ordernum = data['ordernum']
                //跳转到下单详情界面
                window.open('/getorderinfo/?ordernum='+ordernum,target="_self")
            }
        })
    })

})
