// JavaScript Document
//Form Tác giả
//Bắt sự kiện 
$(".btn_themsach").click(function(){
	//Lấy giá trị từ form
	var masach=$(".txtmasach").val(); //Lấy giá trị từ người dùng nhập trên form
	var tensach=$(".txttensach").val(); //Lấy giá trị từ người dùng nhập trên form
	var sotrang=$(".txtsotrang").val(); //Lấy giá trị từ người dùng nhập trên form
	var namxuatban=$(".txtnamxb").val(); //Lấy giá trị từ người dùng nhập trên form
	
	if(masach == "" || masach.length != 5)
	{
		alert_info("Mã sách phải là 5 kí tự");
	}else if(tensach == "")
	{
		alert_info("Tên sách không để trống");
		
	}else if(sotrang == "")
	{
		alert_info("Số trang không được để trống"); 												 
	}else if(namxuatban == "" || namxuatban.length != 4 || isNumber(namxuatban) == false ){//Phải 4 số mới hợp lệ
		alert_info("Năm xuất bản không hợp lệ");
    }else {
		alert_success("ok thành công")
	}
});
	//Bắt sự kiện nút làm lại
$(".btn_lamlaisach").click(function(){
    resetViewFormSach();
})

	//Hàm reset lại input botbox bắt sự kiện
function resetViewFormSach(){
	$(".txtmasach").val("") // Lấy giá trị từ người dùng nhập trên form
	$(".txttensach").val("") // Lấy giá trị từ người dùng nhập trên form
	$(".txtsotrang").val("") // Lấy giá trị từ người dùng nhập trên form
	$(".txtnamxb").val("") // Lấy giá trị từ người dùng nhập trên form
}