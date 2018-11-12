
	
$(function(){
    var code
    var verifyCode
    //检测用户是否合法,是否已经存在
    $('#ipt1').blur(function () {
        var reg = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
		var val = $(this).val();

		if (reg.test(val)) {
			 $.get('/verifytel/',{'usertel':val},function (data) {
                if (data['status'] == '-1'){
                    $('#userid i').html(data['msg'])
                    $('#userid').removeClass('has-success').addClass('has-error')
                    $('#userid span').removeClass('glyphicon-ok').addClass('glyphicon-remove')
                } else {
                    $('#userid i').html('')
                    $('#userid').removeClass('has-error').addClass('has-success')
                    $('#userid span').removeClass('glyphicon-remove').addClass('glyphicon-ok')
                }
            })
		}
		else {
            $('#userid i').html('手机号不合法')
            $('#userid').removeClass('has-error').addClass('has-success')
            $('#userid span').removeClass('glyphicon-remove').addClass('glyphicon-ok')
		}

    })

	//验证码
	verifyCode = new GVerify("v_container");
    code = verifyCode.options.code.toUpperCase()
	console.log(code)
	$("#ipt2").blur(function(e){
		e.preventDefault();
		if ($("#ipt2").val().toUpperCase() == code){
		    $('#yanid i').html('')
            $('#yanid').removeClass('has-error').addClass('has-success')
            $('#yanid span').removeClass('glyphicon-remove').addClass('glyphicon-ok')
		}
		else {
		    $('#yanid i').html('验证码不正确')
            $('#yanid').removeClass('has-success').addClass('has-error')
            $('#yanid span').removeClass('glyphicon-ok').addClass('glyphicon-remove')
		}
	})

    $('#fresh').click(function () {
        verifyCode = new GVerify("v_container");
        code = verifyCode.options.code.toUpperCase()
        console.log(code)
    })

	//密码
	$("#ipt4").blur(function(){
		//验证密码， 数字字母下划线，且第一个不能为数字， 长度在6~20位
		var reg =/^([a-zA-Z_]{1,})\w{5,19}$/;
//		var reg = /^.{8,16}$/;
		var val = $(this).val();
		
		if (reg.test(val)) {
		    $('#passid i').html('')
            $('#passid').removeClass('has-error').addClass('has-success')
            $('#passid span').removeClass('glyphicon-remove').addClass('glyphicon-ok')
		}
		else {
		    $('#passid i').html('密码包括数字字母下划线，且第一个不能为数字，长度在6~20位!')
            $('#passid').removeClass('has-success').addClass('has-error')
            $('#passid span').removeClass('glyphicon-ok').addClass('glyphicon-remove')

		}
	})
	
	//重复密码
	$("#ipt5").blur(function(){
		var value = $(this).val();

		if (value == $("#ipt4").val()){
		    $('#passchid i').html('')
            $('#passchid').removeClass('has-error').addClass('has-success')
            $('#passchid span').removeClass('glyphicon-remove').addClass('glyphicon-ok')
		}
		else {
		    $('#passchid i').html('重复密码不一致!')
            $('#passchid').removeClass('has-success').addClass('has-error')
            $('#passchid span').removeClass('glyphicon-ok').addClass('glyphicon-remove')
		}
		
	})

})
	
