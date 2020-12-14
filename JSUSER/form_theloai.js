// JavaScript Document
//Form thể loại
//Bắt sự kiện Thêm
$(".btn_themtl").click(function(){

	//Lấy giá trị từ form
	var matl=$(".txtmatl").val(); //Lấy giá trị từ người dùng nhập trên form
	var tentl=$(".txttentl").val(); //Lấy giá trị từ người dùng nhập trên form

	if(matl == "" || matl.length != 5) //Tăng chiều dài lên
	{
		alert_info("Mã thể loại không để trống hoặc số kí tự bằng 5");
	} else if(tentl == "")
	{
		alert_info("Tên thê loại không để trống");
	} else {
		alert_success("ok thành công");
	}
});

    //Bắt sự kiện nút làm lại
	$(".btn_lamlaitl").click(function(){
		resetViewFormTheloai();
	})

	//Hàm reset lại input botbox bắt sự kiện
	function resetViewFormTheloai(){
		$(".txtmatl").val("") // Lấy giá trị từ người dùng nhập trên form
		$(".txttentl").val("") // Lấy giá trị từ người dùng nhập trên form
	}

