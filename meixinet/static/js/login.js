
	
$(function(){


	var aIpt = document.getElementsByTagName("input");
	var tip = document.getElementById("tip");
	
	//获取上次登录的用户
	var user = getCookie("user");
	var pwd = getCookie("pwd");
	aIpt[0].value = user;
	aIpt[1].value = pwd;
	
	var flag1 = false; //用户名输入是否合法
	var flag2 = false; //密码输入是否合法
	

	//手机号
	aIpt[0].onkeyup = function(){
		var reg = /^((13[0-9])|(14[5|7])(15([0-3]|[5-9]))|(17[0-9])|(18[0-9])|199)\d{8}$/;
		var val = this.value;
		
		if (reg.test(val)) {
			tip.innerHTML = "手机号合法";
			flag1 = true;
		}
		else {
			tip.innerHTML = "手机号不合法";
			flag1 = false;
		}
	}

	
	aIpt[1].onkeyup = function(){
		var reg =/^([a-zA-Z_]{1,})\w{5,19}$/;
		var val = $(this).val();
		
		if (reg.test(val)) {
			flag2 = true;
			
		}
		else {
			tip.innerHTML = "密码包括数字字母下划线，且第一个不能为数字，长度在6~20位";
			flag2 = false;
		}
	}
	
	//->点击注册后验证是否所有输入都合法，并提示哪个输入内容不合法
//	var ipt6 = document.getElementById("ipt6");
//	ipt6.onclick = function(){
//		
//		if (flag1 && flag2) {
//			if (aIpt[2].checked){
//				var d = new Date();
//				d.setDate(d.getDate()+10);
//				setCookie("user", aIpt[0].value, d); //保存用户名到cookie
//				setCookie("pwd", aIpt[1].value, d); //保存密码到cookie
//			}
//			tip.innerHTML = "正在登录";
//			location.href = "login.html";
//		}
//		else {
//			if (!flag1) {
//				tip.innerHTML = "手机号不合法， 请检查!";
//			}
//			else if (!flag2) {
//				tip.innerHTML = "密码输入不正确， 请检查!";
//			}
//		}
//		
//	}

// 	$("#ipt6").on("click",function(){
//
// 		var xhr = new XMLHttpRequest();
//         xhr.open("POST", "http://localhost/fashion/php/login.php", true);
//         xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
//         var str = "username="+$("#inp1").val() + "&pwd="+$("#inp2").val();
//         console.log(str);
//         xhr.send(str);
//         xhr.onreadystatechange = function () {
//             if (xhr.readyState==4 && xhr.status==200) {
//                 console.log(xhr.responseText);
//                 //json解析
//                 //如果注册成功则进入登录页面
//
//                	var arr = JSON.parse(xhr.responseText);
//
//                	if(arr.status==1){
//                		console.log(arr.username);
//
//                		if (aIpt[2].checked){
// 						var d = new Date();
// 						d.setDate(d.getDate()+10);
// 						setCookie("user", aIpt[0].value, d); //保存用户名到cookie
// 						setCookie("pwd", aIpt[1].value, d); //保存密码到cookie
// 					}
//
// 					$("#tip").html("正在登录");
// 					location.href = "car.html";
// 					 sessionStorage.setItem("arr.username",arr.username);
// //					$.cookie("name", arr.username, {expires:30, path:"/"});
//
//                 //如果失败则弹出提示信息
//                	}
//                	else{
//                		alert("登录失败！用户名或密码错误，请检查!");
//                		location.href = "register.html";
//                	}
//             }
//         }
//     })




	
	
	
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
	
