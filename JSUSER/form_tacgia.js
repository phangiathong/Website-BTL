// JavaScript Document
//Form Tác giả
//Bắt sự kiện 
$(".btn_themtg").click(function(){
	//Lấy giá trị từ form
	var matg=$(".txtmatg").val(); //Lấy giá trị từ người dùng nhập trên form
	var tentg=$(".txttentg").val(); //Lấy giá trị từ người dùng nhập trên form
	var namsinhtg=$(".txtnamsinhtg").val(); //Lấy giá trị từ người dùng nhập trên form
	var sdtnxb=$(".txtsdttg").val(); //Lấy giá trị từ người dùng nhập trên form
	var diachitg=$(".txtdiachitg").val(); //Lấy giá trị từ người dùng nhập trên form
	
	if(matg == "" || matg.length != 5)
	{
		alert_info("Mã tác giả phải là 5 kí tự");
	}else if(tentg == "")
	{
		alert_info("Tên tác giả không để trống");
		
	}else if(namsinhtg == "" || namsinhtg.length != 4 || isNumber(namsinhtg) == false)
	{
		alert_info("Năm sinh không hợp lệ"); 												 
	}else if(sdtnxb == "" || sdtnxb.length!=10 || isNumber(sdtnxb) == false ){//Phải 10 số mới hợp lệ
		alert_info("Số điện thoại không hợp lệ");
	}else if(diachitg == "") {
        alert_info("Địa chỉ không được để trống"); 
    }else {
		alert_success("ok thành công")
	}
});
    //Bắt sự kiện nút làm lại
$(".btn_lamlaitg").click(function(){
    resetViewFormTacgia();
})
	
	//Hàm reset lại input botbox bắt sự kiện
function resetViewFormTacgia(){
	$(".txtmatg").val("") // Lấy giá trị từ người dùng nhập trên form
	$(".txttentg").val("") // Lấy giá trị từ người dùng nhập trên form
	$(".txtnamsinhtg").val("") // Lấy giá trị từ người dùng nhập trên form
	$(".txtsdttg").val("") // Lấy giá trị từ người dùng nhập trên form
	$(".txtdiachitg").val("") // Lấy giá trị từ người dùng nhập trên form
}