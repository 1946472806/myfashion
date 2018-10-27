
	
$(function(){

	var flag1 = false; //用户名输入是否合法
	var flag2 = false; //密码输入是否合法
	var flag3 = false; //手机号输入是否合法
	var flag4 = false;
	

	//手机号
	$("#ipt1").keyup( function(){
		var reg = /^((13[0-9])|(14[5|7])(15([0-3]|[5-9]))|(17[0-9])|(18[0-9])|199)\d{8}$/;
		var val = $(this).val();
		
		if (reg.test(val)) {
			$("#tip").html("手机号合法");
			flag1 = true;
		}
		else {
			$("#tip").html("手机号不合法");
			
			flag1 = false;
		}
		
	})

	//验证码
	var verifyCode = new GVerify("v_container");
	$("#my_button").click(function(e){
		e.preventDefault();
		var res = verifyCode.validate($("#ipt2").val());
		if (res){
			$("#tip").html("验证码合法");
			flag2 = true;
		}
		else {
			$("#tip").html("验证码不合法");
			flag2 = false;
		}
	})
	
	
	
	
//	//验证码
//	$("#ipt2").keyup(function(){
//		fn();
//	})
//	
//	//验证码按钮
////	var code = document.getElementById("code");
//	$("#code").click(function(){
//		var str = "";
//		for (var i=0; i<4; i++){
//			str += parseInt(Math.random()*10);
//		}
//		$(this).html(str);
//	})
//	
//	function fn(){
//		if ($("#ipt2").val() == $("#code").html()){
//			$("#tip").html("验证码合法");
//			flag2 = true;
//		}
//		else {
//			$("#tip").html("验证码不合法");
//			flag2 = false;
//		}
//	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	//密码
	$("#ipt4").keyup(function(){
		//验证密码， 数字字母下划线，且第一个不能为数字， 长度在6~20位
		var reg =/^([a-zA-Z_]{1,})\w{5,19}$/;
//		var reg = /^.{8,16}$/;
		var val = $(this).val();
		
		if (reg.test(val)) {
			$("#tip").html("密码合法");
			flag3 = true;
			
		}
		else {
			$("#tip").html("密码包括数字字母下划线，且第一个不能为数字，长度在6~20位").css({"font-size":"12px","line-height":"15px"});
			flag3 = false;
		}
	})
	
	//重复密码
	$("#ipt5").keyup(function(){
		var value = $(this).val();

		if (value == $("#ipt4").val()){
			$("#tip").html("重复密码一致");
			flag4 = true;
		}
		else {
			$("#tip").html("重复密码不一致");
			flag4 = false;
		}
		
	})
	

	
	
	//->点击注册后验证是否所有输入都合法，并提示哪个输入内容不合法
	var ipt1 = document.getElementById("ipt1");
	var ipt4 = document.getElementById("ipt4");
	var ipt6 = document.getElementById("ipt6");
	var tip = document.getElementById("tip");
	
//	
// 	$("#ipt6").on("click",function(){
//
// 		var xhr = new XMLHttpRequest();
//         xhr.open("POST", "http://localhost/fashion/php/register.php", true);
//         xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
//         var str = "username="+$("#ipt1").val() + "&pwd="+$("#ipt4").val();
//         console.log(str);
//         xhr.send(str);
//         xhr.onreadystatechange = function () {
//             if (xhr.readyState==4 && xhr.status==200) {
//                 console.log(xhr.responseText);
//                 //json解析
//                 //如果注册成功则进入登录页面
//
//                	var arr = JSON.parse(xhr.responseText);
//                	console.log(arr.username);
//
//                	if(arr.status==1){
//                		alert("注册成功！");
// 					location.href = "login.html";
//
//                 //如果失败则弹出提示信息
//                	}
//                	if(arr.status==0){
//                		alert("注册失败！请检查！");
//                	}
//             }
//         }

		
		
		
		
		
		
		
		
//		if (flag1 && flag2 && flag3&&flag4) {
//			$("#tip").html("所有输入都合法!");
//			alert("注册成功！");
//			location.href = "login.html";
//		}
//		else {
//			if (!flag1) {
//				$("#tip").html("手机号输入不合法， 请检查!");
//			}
//			else if (!flag2) {
//				$("#tip").html("验证码输入不一致， 请检查!");
//			}
//			else if (!flag3) {
//				$("#tip").html("密码输入不合法， 请检查!");
//			}
//			else if (!flag4) {
//				$("#tip").html("密码输入不一致， 请检查!");
//			}
////			else if (!flag5) {
////				$("#tip").html("注册失败， 请检查!");
////			}
//			
//		}
		
// })

})
	
