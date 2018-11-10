
	
$(function(){

	//手机号
	$('#ipt1').blur(function(){
		var reg =  /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
		var val = $(this).val();
		
		if (reg.test(val)) {
			$('#userid i').html('')
			$('#userid').removeClass('has-error').addClass('has-success')
			$('#userid span').removeClass('glyphicon-remove').addClass('glyphicon-ok')
		}
		else {
			$('#userid i').html("手机号不合法")
            $('#userid').removeClass('has-success').addClass('has-error')
            $('#userid span').removeClass('glyphicon-ok').addClass('glyphicon-remove')
		}
	})

	
	$('#ipt2').blur(function(){
		var reg =/^([a-zA-Z_]{1,})\w{5,19}$/;
		var val = $(this).val();
		
		if (reg.test(val)) {
			$('#passid i').html('')
			$('#passid').removeClass('has-error').addClass('has-success')
			$('#passid span').removeClass('glyphicon-remove').addClass('glyphicon-ok')
		}
		else {
			$('#passid i').html("密码包括数字字母下划线，且第一个不能为数字，长度在6~20位")
            $('#passid').removeClass('has-success').addClass('has-error')
            $('#passid span').removeClass('glyphicon-ok').addClass('glyphicon-remove')
		}
	})

	
	$(".cupter").click(function(){
		$(".code_load").css({"display":"none"});
		$(".denglu").css({"display":"block"});
	})
	$(".cupter_ma").click(function(){
		$(".code_load").css({"display":"block"});
		$(".denglu").css({"display":"none"});
	})
	$("#saoma").click(function(){
		$(".code_load").css({"display":"block"});
		$(".denglu").css({"display":"none"});
	})
	$("#saoma2").click(function(){
		$(".code_load").css({"display":"none"});
		$(".denglu").css({"display":"block"});
	})
})
	
