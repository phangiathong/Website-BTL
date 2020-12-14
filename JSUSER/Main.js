// JavaScript Document
function openForm(nameForm) {
	$(".form_theloai").addClass("is-hidden");
	$(".form_sach").addClass("is-hidden");
	$(".form_tacgia").addClass("is-hidden");
	$(".form_nxb").addClass("is-hidden");//Goi class và add 
	$(".form_ddh").addClass("is-hidden");
	$("." + nameForm).removeClass("is-hidden");
}

//Mở form thể loại
$(".menu_theloai").click(function() {
		openForm("form_theloai");
		
		var taghtml = '<li><a href="#"><i class="fa fa-home"></i>Danh mục</a></li><li class="active">Thể loại</li>';
		
		$(".titlereadcrumb").html(taghtml);
});

//Mở form sách
$(".menu_sach").click(function() {
		openForm("form_sach")
		var taghtml = '<li><a href="#"><i class="fa fa-home"></i>Danh mục</a></li><li class="active">Sách</li>';
		$(".titlereadcrumb").html(taghtml);
});

//Mở form tác giả
$(".menu_tacgia").click(function() {
		openForm("form_tacgia")
		var taghtml = '<li><a href="#"><i class="fa fa-home"></i>Danh mục</a></li><li class="active">Tác giả</li>';
		$(".titlereadcrumb").html(taghtml);
});

//Mở form nhà xuất bản
$(".menu_nxb").click(function() {
		openForm("form_nxb");
		var taghtml = '<li><a href="#"><i class="fa fa-home"></i>Danh mục</a></li><li class="active">NXB</li>';
		$(".titlereadcrumb").html(taghtml);
});

//Mở form ddh
$(".menu_ddh").click(function() {
		openForm("form_ddh");
		var taghtml = '<li><a href="#"><i class="fa fa-home"></i>Danh mục</a></li><li class="active">Ddh</li>';
		$(".titlereadcrumb").html(taghtml);
});

//Bắt xự kiện nút xử lý đơn hàng
$(".listallddh").on('click',".btn-xulydh",function(){
	console.log("Nút xử lý");
	
	$(".showxulydh").modal("show");
	
});

//Bắt xự kiện nút xử lý đơn hàng
$(".listallddh").on('click',".btn-xoaxulydh",function(){
	console.log("Nút xử lý");
	
	//$(".showxulydh").modal("show");
	bootbox.confirm("Bạn có chắc xóa đơn hàng này không ?", function(result) {
		if(result == true) {
			console.log("deleted...");
		}
	});
});


 //12/14/2020
// xuất thông báo khi thao tác thất bại
function alert_error(mes) {
	bootbox.alert({
		size: "small",
		title: "Thất bại",
		message: "Your message here…",
		callback: function(){ /* your callback code */ }
	})
}
  
 
  //Xuất thông báo khi thao tác thánh công
function alert_success(mes, callback) {
  	bootbox.alert({
		size:"small",
		title: "Thành công",
		message: mes,
		callback: callback
	});
}
  
  //xuất thông báo hiển thị thông tin
function alert_info(mes) {
  	bootbox.alert({
		size:"small",
		title: "Thông báo",
		message:mes,
		callback:function(){/*your callback cođe*/}
	});
  }
  
function isNumber(n) { return /^-?[\d.]+(?:e-?\d+)?$/.test(n); }
	 
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function queryData(url,dataSend,callback){
	$.ajax({
		   type:'POST',
		   url: url,
		   data: dataSend,
		   asyna: true,
		   dataType: 'Json',
		   success: callback
	});
}
	
