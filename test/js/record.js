 var idurl=getUrlParam('shopId'),shopId;
    if(idurl !=null && idurl.toString().length>0){shopId=getUrlParam("shopId");}
    function getUrlParam(name) {var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");var r = window.location.search.substr(1).match(reg);if (r != null) return unescape(r[2]);return null;}
    console.log(shopId)
var arra=[],arrb=[];
// $.ajax({
// 	url: '/draw/index.php?s=/home/draw/bag/type/1/shopId/'+shopId,
// 	//url: '/draw/index.php?s=/home'+shopId,
// 	type: 'GET',
// 	timeout : 500,
//     async:true,
//     success:function(data){
//       if (JSON.parse(data).code==1) {
//       arra=(JSON.parse(data)).data;
//       //arra.reverse();
//       $('.aa').text(arra.length)
//   }else{
//   	//$('.aa').text('0')
  	
//   }
//     },error: function(data) { 
// $('.aa').text(4)
//   	arra=[
//   	{
//   		"cutOffTime":"1515669739",
//   			"name":"NAME1",
//   			"desc":"最终解释权商家所有"
//   	},
//   	{
// "cutOffTime":"23222222",
//   			"name":"NAME2",
//   			"desc":"最终解释权商家所有"
//   	}
//   	,
//   	{
// "cutOffTime":"24222222",
//   			"name":"NAME3",
//   			"desc":"最终解释权商家所有"
//   	}
//   	,
//   	{
// "cutOffTime":"25222222",
//   			"name":"NAME4",
//   			"desc":"最终解释权商家所有"
//   	}
//   	]
//     }
// });
// 
$('.aa').text(4)
  	arra=[
  	{
  		"cutOffTime":"1515669739",
  			"name":"NAME1",
  			"desc":"最终解释权商家所有"
  	},
  	{
"cutOffTime":"1515669739",
  			"name":"NAME2",
  			"desc":"最终解释权商家所有"
  	}
  	,
  	{
"cutOffTime":"1515669739",
  			"name":"NAME3",
  			"desc":"最终解释权商家所有"
  	}
  	,
  	{
"cutOffTime":"1515669739",
  			"name":"NAME4",
  			"desc":"最终解释权商家所有"
  	}
  	]

  	;

  	$('.bb').text(2)
  	arrb=[
  	{
  		"cutOffTime":"1015669739",
  			"name":"NAME1",
  			"desc":"最终解释权商家所有"
  	},
  	{
"cutOffTime":"1015669739",
  			"name":"NAME2",
  			"desc":"最终解释权商家所有"
  	}
  	
  	]
// $.ajax({
// 	url: '/draw/index.php?s=/home/draw/bag/type/2/shopId/'+shopId,
// 	type: 'GET',
// 	timeout : 500,
// 	async:false,
//     success:function(data){
//       	if (JSON.parse(data).code==1) {
//       		arrb=(JSON.parse(data)).data;
//       		//arrb.reverse();
//       		$('.bb').text(arrb.length)
//       		$('.hchong').hide();
//   		}else{
//   			$('.bb').text('0')
//   			$('.hchong').hide();
//   		}
//     },error: function(data) { console.log("err"); $('.hchong').hide();}
// });
 $('.hchong').hide();
	var tac = document.getElementsByClassName('tac')[0];
	var tbc = document.getElementsByClassName('tbc')[0];
//未使用
if(arra.length>0){
for (var i = 0; i < arra.length; i++) {
    var times = arra[i].cutOffTime;
    function add0(m) {
        return m < 10 ? '0' + m: m
    }
    var timestamp = parseInt(times * 1000);
    var time = new Date(timestamp);
    var y = time.getFullYear();
    var m = time.getMonth() + 1;
    var d = time.getDate();
    var b = y + '-' + add0(m) + '-' + add0(d);
    arra[i].cutOffTime = b;
	    tac.innerHTML += '<div class="coupon"> '+
	       '<div class="chead ">'+
	        '<h4 class="disib">优惠券</h4><i></i>'+
	        '<span class="ti fr">'+'川西坝子'+'</span>'+
	       '</div> '+
	       '<div class="dash">'+
	       '<span class="fl"></span>'+
	        '<span class="fr"></span>'+
	       '</div> '+
	       '<div class="cbody">'+
	        '<img src="../images/coupon1.png" alt="" />'+
	        '<div class="fr">'+
	         '<h4 class="disib">'+arra[i].name+'</h4>'+
	         '<button class="stop fr" cdata='+i+' data-toggle="modal" data-target=".bs-example-modal-sm">立即使用</button>'+
	         '<p>有效期至 '+arra[i].cutOffTime+'</p>'+
	        '</div>'+
	       '</div> '+
	       '<div class="cfoot">'+
	        '<div id="icon"><img src="../images/backd.png"  alt="" /></div><span class="msga">详细信息</span>'+
	        '</div> '+
	        '<span class="one bgf49f38">可使用</span>'+
	      '</div>'+
	      '<div class="msg msgaa">'+
	       arra[i].desc+
	      '</div> ';
}
}else{
	tac.innerHTML='<div style="text-align:center">此条件下暂无记录</div>'
};
//使用记录
if(arrb.length>0){

for (var i = 0; i < arrb.length; i++) {
    var times = arrb[i].cutOffTime;
    function add0(m) {
        return m < 10 ? '0' + m: m
    }
    var timestamp = parseInt(times * 1000);
    var time = new Date(timestamp);
    var y = time.getFullYear();
    var m = time.getMonth() + 1;
    var d = time.getDate();
    var b = y + '-' + add0(m) + '-' + add0(d);
	arrb[i].cutOffTime = b;
	    tbc.innerHTML += '<div  class="coupon" cdata='+i+' data-toggle="modal" data-target=".bs-example-modal-sm"> '+
	       '<div class="chead ">'+
	        '<h4 class="disib">优惠券</h4>'+
	        '<span class="ti fr">'+'川西坝子'+'</span>'+
	       '</div> '+
	       '<div class="dash">'+
	       '<span class="fl"></span>'+
	        '<span class="fr"></span>'+
	       '</div> '+
	       '<div class="cbody">'+
	        '<img src="../images/coupon1.png" alt="" />'+
	        '<div class="fr">'+
	         '<h4 class="disib">'+arrb[i].name+'</h4>'+
	         '<p>有效期至 '+arrb[i].cutOffTime+'</p>'+
	        '</div>'+
	       '</div> '+
	       '<div class="cfoot">'+
	        '<div id="icon"><img src="../images/backd.png"  alt="" /></div><span class="msga">详细信息</span>'+
	        '</div> '+
	        '<span class="one bgccc">已使用</span>'+
	      '</div>'+
	      '<div class="msg msgaa">'+
	       arrb[i].desc+
	      '</div> ';
}
}else{
	tbc.innerHTML='<div style="text-align:center">此条件下暂无记录</div>'
};
$(".stop").click(function(event) {
	var datas=$(this).attr('cdata')
    code=arra[datas].code;
    id=arra[datas].id;
    var qr="http://qr.liantu.com/api.php?&w=160&bg=ffffff&fg=00a3ff&text=http://www.bacaotech.com:8080/shop/app/check.html?code="+code+"%26id="+id;
  	var head='<h1>立即使用</h1><h1>请将券码出示给服务员享受优惠</h1>'
  	var sure='<p>验证码:<b>'+code+'</b></p><h1 data="1000">确定</h1>'
    var inner='<img src="'+qr+'" alt="" />';
    $('.desc').html(head);
    $('.tips').html(inner);
    $('.sure').html(sure);
    $('.modal-content i').html(' ');
    $('.modal-content .coupon button').hide();
});
$(".tbc .coupon").click(function(event) {
	var couponId=$(this).attr('cdata');
	code=arrb[couponId].code;
	id=arrb[couponId].id;
	var qr="http://qr.liantu.com/api.php?&w=160&bg=ffffff&fg=00a3ff&text=http://www.bacaotech.com:8080/shop/app/check.html?code="+code+"%26id="+id;
	var sure='<p>验证码:<b>'+code+'</b></p><h1>确定</h1>'
	var usedTime=arrb[couponId].usedTime;
	function add0(m){return m<10?'0'+m:m }
                var timestamp = parseInt(usedTime*1000);
                var time = new Date(timestamp);
                var y=time.getFullYear();
                var m = time.getMonth()+1;
                var d = time.getDate();
                var h = time.getHours();
                var mm = time.getMinutes();
                usedTime=y+'-'+add0(m)+'-'+add0(d)+' '+add0(h)+':'+add0(mm);
	var head='<h1>使用记录</h1><h1>请将券码出示给服务员享受优惠</h1><h1>使用时间：'+usedTime+'</h1>'
    var inner='<img src=" '+qr+' "  alt="" />';
    $('.desc').html(head)
     $('.tips').html(inner);
     $('.sure').html(sure);
});
$('.sure').click(function(event) {
	$('.modal').click();
	window.location.reload()
});
var n=1;
$('.cfoot').click(function(event) {
	n<2?n++:n=1;
	if(n==2){
	 $(this).find("div").html('<img src="../images/backu.png"  alt="" />');
	}else{
		$(this).find("div").html('<img src="../images/backd.png"  alt="" />');
	}
	/* Act on the event */
	event.stopPropagation();
	$(this).parent().next().slideToggle(10);
});
if(sessionStorage.zjnum!=='undefined'){
//var zjnum=sessionStorage.zjnum;
if(zjnum>0){
	var news=$('.tac .chead i');
	var xin=' 新';
	for(var i=0;i<zjnum;i++){
	//news[i].innerHTML=xin;
}
}
$('.tac .coupon').click(function(event) {
	//sessionStorage.zjnum--;
});
}

