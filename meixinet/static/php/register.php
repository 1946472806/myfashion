<?php
//支持跨域访问
header('Access-Control-Allow-Origin: *');

$username = $_POST["username"];
$pwd = $_POST["pwd"];
//$code = $_POST["code"];

$conn= new mysqli("127.0.0.1","root","","mydb11") or die("连接失败");
$sql = "select * from myclass1 where username='$username'";
$result = $conn->query($sql);
if ($result && $result->num_rows>0) {
    $arr = array("status"=>0, "msg"=>"用户名已经存在");
    echo  json_encode($arr);
	
}
else {
    //插入数据， 注册
    $sql = "insert into myclass1(username, password) values('$username', '$pwd')";
    $result = $conn->query($sql);
    if ($result) {
        $arr = array("status"=>1, "msg"=>"注册成功","username"=>"$username");
        echo  json_encode($arr);
		
    } else {
        $arr = array("status"=>0, "msg"=>"注册失败");
        echo  json_encode($arr);
    }
}
$conn->close();

?>