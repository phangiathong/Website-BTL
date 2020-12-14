// JavaScript Document
//Form nhà xuất bản
//Bắt sự kiện 
$(".btn_themnxb").click(function(){
	//Lấy giá trị từ form
	var manxb=$(".txtmanxb").val(); //Lấy giá trị từ người dùng nhập trên form
	var tennxb=$(".txttennxb").val(); //Lấy giá trị từ người dùng nhập trên form
	var sdtnxb=$(".txtsdtnxb").val(); //Lấy giá trị từ người dùng nhập trên form
	var dcnxb=$(".txtdcnxb").val(); //Lấy giá trị từ người dùng nhập trên form
	var emailnxb=$(".txtemailnxb").val(); //Lấy giá trị từ người dùng nhập trên form
	
	if(manxb=="")
	{
		alert_info("Nhà xuất bản không để trống");
	}else if(tennxb=="")
	{
		alert_info("Tên nhà xuất bản không để trống");
		
	}else if(sdtnxb=="" || sdtnxb.length!=10 || isNumber(sdtnxb) == false ){//Phải 10 số mới hợp lệ
		alert_info("Số điện thoại không hợp lệ");												 
	}else if(validateEmail(emailnxb) == false)
	{
		alert_info("Emaill không hợp lệ");
	}else if(dcnxb == "") {
		alert_info("Địa không được để trống");
	}
	else{
		alert_success("ok thành công")
	}
});
	//Bắt sự kiện nút làm lại
	$(".btn_lamlainxb").click(function(){
		resetViewFormNhaXB();
	})
	//Hàm reset lại input botbox bắt sự kiện
function resetViewFormNhaXB(){
	$(".txtmanxb").val("") // Lấy giá trị từ người dùng nhập trên form
	$(".txttennxb").val("") // Lấy giá trị từ người dùng nhập trên form
	$(".txtsdtnxb").val("") // Lấy giá trị từ người dùng nhập trên form
	$(".txtdcnxb").val("") // Lấy giá trị từ người dùng nhập trên form
	$(".txtemailnxb").val("") // Lấy giá trị từ người dùng nhập trên form
}

