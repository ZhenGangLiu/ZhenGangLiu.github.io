var arra=[],arrb=[],arrc=[];
$.ajax({
	url: '/bc/index.php?s=/Home/activity/tickets/type/1',
	type: 'GET',
    async:false,
    success:function(data){
      if (JSON.parse(data).code==1) {
      arra=(JSON.parse(data)).data;
      //arra.reverse();
      $('.aa').text(arra.length)
      //console.log(arra);
  }else{
  	//alert(JSON.parse(data).msg);
  	$('.aa').text('0')
  }
    },error: function(data) { console.log("err");}
});
$.ajax({
	url: '/bc/index.php?s=/Home/activity/tickets/type/2',
	type: 'GET',
	async:false,
    success:function(data){
      if (JSON.parse(data).code==1) {
      arrb=(JSON.parse(data)).data;
      //arrb.reverse();
      $('.bb').text(arrb.length)
      //console.log(arrb)
  }else{
  	//alert(JSON.parse(data).msg);
  	$('.bb').text('0')
  }
    },error: function(data) { console.log("err");}
});
$.ajax({
	url: '/bc/index.php?s=/Home/activity/tickets/type/3',
	type: 'GET',
	async:false,
    success:function(data){
      if (JSON.parse(data).code==1) {
      arrc=(JSON.parse(data)).data;
      //arrc.reverse();
      $('.cc').text(arrc.length)
      //console.log(arrc)
      $('.hchong').hide();
  }else{
  	//alert(JSON.parse(data).msg);
  	$('.cc').text('0');
  	$('.hchong').hide();
  }
    },error: function(data) { console.log("err");}
});
	var tac = document.getElementsByClassName('tac')[0];
	var tbc = document.getElementsByClassName('tbc')[0];
	var tcc = document.getElementsByClassName('tcc')[0];
	//aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
if(arra.length>0){
for (var i = 0; i < arra.length; i++) {
    var times = arra[i].effectTime;
    function add0(m) {
        return m < 10 ? '0' + m: m
    }
    var timestamp = parseInt(times * 1000);
    var time = new Date(timestamp);
    var y = time.getFullYear();
    var m = time.getMonth() + 1;
    var d = time.getDate();
    var b = y + '-' + add0(m) + '-' + add0(d);
    arra[i].effectTime = b;
    function countTime() { }countTime();
	switch (arra[i].type){
	  case "1":
	    arra[i].type='单品兑换券';
	    tac.innerHTML += '<div  class="coupon"> '+
	       '<div class="chead ">'+
	       '<h4 class="disib">单品兑换券</h4><i></i>'+
	        '<span class="ti fr">'+arra[i].shopName+'</span>'+
	       '</div> '+
	       '<div class="dash">'+
	       '<span class="fl"></span>'+
	        '<span class="fr"></span>'+
	       '</div> '+
	       '<div class="cbody">'+
	        '<img src="'+arra[i].picUrl+'" alt="" />'+
	        '<div class="fr">'+
	         '<h4 class="disib">'+arra[i].foodName+'</h4>'+
	         '<button class="stop fr" cdata='+i+' data-toggle="modal" data-target=".bs-example-modal-sm">立即使用</button>'+
	         '<p>有效期至 '+arra[i].effectTime+'</p>'+
	         '<p class="disib">'+arra[i].conditions+'</p>'+
	        '</div>'+
	       '</div> '+
	       '<div class="cfoot">'+
	        '<div id="icon"><img src="../images/backd.png"  alt="" /></div><span class="msga">详细信息</span>'+
	        '</div> '+
	        '<span class="one bgf49f38">可使用</span>'+
	      '</div>'+
	      '<div class="msg msgaa">'+
	       arra[i].description+
	      '</div> '
	      ;
	    break;
	  case "5":
	    arra[i].type="单品特价券";
	    tac.innerHTML += '<div class="coupon"> '+
	       '<div class="chead ">'+
	        '<h4 class="disib">单品特价券</h4><i></i>'+
	        '<span class="ti fr">'+arra[i].shopName+'</span>'+
	       '</div> '+
	       '<div class="dash">'+
	       '<span class="fl"></span>'+
	        '<span class="fr"></span>'+
	       '</div> '+
	       '<div class="cbody">'+
	        '<img src="'+arra[i].picUrl+'" alt="" />'+
	        '<div class="fr">'+
	         '<h4 class="disib">'+arra[i].foodName+'</h4>'+
	         '<button class="stop fr" cdata='+i+' data-toggle="modal" data-target=".bs-example-modal-sm">立即使用</button>'+
	         '<p>有效期至 '+arra[i].effectTime+'</p>'+
	         '<p class="disib ">现价'+arra[i].nowPrice+'元（原价'+arra[i].originPrice+'元）</p>'+
	        '</div>'+
	       '</div> '+
	       '<div class="cfoot">'+
	        '<div id="icon"><img src="../images/backd.png"  alt="" /></div><span class="msga">详细信息</span>'+
	        '</div> '+
	        '<span class="one bgf49f38">可使用</span>'+
	      '</div>'+
	      '<div class="msg msgaa">'+
	       arra[i].description+
	      '</div> '
	      ;
	    break;
	  case "3":
	    arra[i].type="单次消费折扣券";
	    tac.innerHTML += '<div class="coupon"> '+
	       '<div class="chead ">'+
	        '<h4 class="disib">单次消费折扣券</h4><i></i>'+
	        '<span class="ti fr">'+arra[i].shopName+'</span>'+
	       '</div> '+
	       '<div class="dash">'+
	       '<span class="fl"></span>'+
	        '<span class="fr"></span>'+
	       '</div> '+
	       '<div class="cbody">'+
	        '<img src="'+arra[i].picUrl+'" alt="" />'+
	        '<div class="fr">'+
	         '<h4 class="disib">'+arra[i].discount+' 折</h4>'+
	         '<button class="stop fr" cdata='+i+' data-toggle="modal" data-target=".bs-example-modal-sm">立即使用</button>'+
	         '<p>有效期至 '+arra[i].effectTime+'</p>'+
	         '<p class="disib">'+arra[i].conditions+'</p>'+
	        '</div>'+
	       '</div> '+
	       '<div class="cfoot">'+
	        '<div id="icon"><img src="../images/backd.png"  alt="" /></div><span class="msga">详细信息</span>'+
	       '</div> '+
	       '<span class="one bgf49f38">可使用</span>'+
	      '</div>'+
	      '<div class="msg msgaa">'+
	       arra[i].description+
	      '</div> '
	      ;
	    break;
	  default:
	    arra[i].type="全场通用优惠券";
	    tac.innerHTML += '<div class="coupon"> '+
	       '<div class="chead ">'+
	        '<h4 class="disib">全场通用优惠券</h4><i></i>'+
	       '<span class="ti fr">'+arra[i].shopName+'</span>'+
	       '</div> '+
	       '<div class="dash">'+
	       '<span class="fl"></span>'+
	        '<span class="fr"></span>'+
	       '</div> '+
	       '<div class="cbody">'+
	        '<img src="'+arra[i].picUrl+'" alt="" />'+
	        '<div class="fr">'+
	         '<h4 class="disib">'+arra[i].value+' 元</h4>'+
	         '<button class="stop fr" cdata='+i+' data-toggle="modal" data-target=".bs-example-modal-sm">立即使用</button>'+
	         '<p>有效期至 '+arra[i].effectTime+'</p>'+
	         '<p class="disib">'+arra[i].conditions+'</p>'+
	        '</div>'+
	       '</div> '+
	       '<div class="cfoot">'+
	        '<div id="icon"><img src="../images/backd.png"  alt="" /></div><span class="msga">详细信息</span>'+
	        '</div> '+
	        '<span class="one bgf49f38">可使用</span>'+
	      '</div>'+
	      '<div class="msg msgaa">'+
	       arra[i].description+
	      '</div> ';
	 };
}
}else{
	tac.innerHTML='<div style="text-align:center">此条件下暂无记录</div>'
};
//bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
//console.log(arrb)
if(arrb.length>0){

for (var i = 0; i < arrb.length; i++) {
    var times = arrb[i].effectTime;
    function add0(m) {
        return m < 10 ? '0' + m: m
    }
    var timestamp = parseInt(times * 1000);
    var time = new Date(timestamp);
    var y = time.getFullYear();
    var m = time.getMonth() + 1;
    var d = time.getDate();
    var b = y + '-' + add0(m) + '-' + add0(d);
	arrb[i].effectTime = b;
    function countTime() { }countTime();
	switch (arrb[i].type){
	  case "1":
	    arrb[i].type='单品兑换券';
	    tbc.innerHTML += '<div  class="coupon" cdata='+i+' data-toggle="modal" data-target=".bs-example-modal-sm"> '+
	       '<div class="chead ">'+
	        '<h4 class="disib">单品兑换券</h4>'+
	        '<span class="ti fr">'+arrb[i].shopName+'</span>'+
	       '</div> '+
	       '<div class="dash">'+
	       '<span class="fl"></span>'+
	        '<span class="fr"></span>'+
	       '</div> '+
	       '<div class="cbody">'+
	        '<img src="'+arrb[i].picUrl+'" alt="" />'+
	        '<div class="fr">'+
	         '<h4 class="disib">'+arrb[i].foodName+'</h4>'+
	         '<p>有效期至 '+arrb[i].effectTime+'</p>'+
	         '<p class="disib">'+arrb[i].conditions+'</p>'+
	        '</div>'+
	       '</div> '+
	       '<div class="cfoot">'+
	        '<div id="icon"><img src="../images/backd.png"  alt="" /></div><span class="msga">详细信息</span>'+
	        '</div> '+
	        '<span class="one bgccc">已使用</span>'+
	      '</div>'+
	      '<div class="msg msgaa">'+
	       arrb[i].description+
	      '</div> '
	      ;
	    break;
	  case "5":
	    arrb[i].type="单品特价券";
	    tbc.innerHTML += '<div class="coupon" cdata='+i+' data-toggle="modal" data-target=".bs-example-modal-sm"> '+
	       '<div class="chead ">'+
	        '<h4 class="disib">单品特价券</h4>'+
	        '<span class="ti fr">'+arrb[i].shopName+'</span>'+
	       '</div> '+
	       '<div class="dash">'+
	       '<span class="fl"></span>'+
	        '<span class="fr"></span>'+
	       '</div> '+
	       '<div class="cbody">'+
	        '<img src="'+arrb[i].picUrl+'" alt="" />'+
	        '<div class="fr">'+
	         '<h4 class="disib">'+arrb[i].foodName+'</h4>'+
	         '<p>有效期至 '+arrb[i].effectTime+'</p>'+
	         '<p class="disib ">现价'+arrb[i].nowPrice+'元（原价'+arrb[i].originPrice+'元）</p>'+
	        '</div>'+
	       '</div> '+
	       '<div class="cfoot">'+
	        '<div id="icon"><img src="../images/backd.png"  alt="" /></div><span class="msga">详细信息</span>'+
	        '</div> '+
	        '<span class="one bgccc">已使用</span>'+
	      '</div>'+
	      '<div class="msg msgaa">'+
	       arrb[i].description+
	      '</div> '
	      ;
	    break;
	  case "3":
	    arrb[i].type="单次消费折扣券";
	    tbc.innerHTML += '<div class="coupon" cdata='+i+' data-toggle="modal" data-target=".bs-example-modal-sm"> '+
	       '<div class="chead ">'+
	        '<h4 class="disib">单次消费折扣券</h4>'+
	        '<span class="ti fr">'+arrb[i].shopName+'</span>'+
	       '</div> '+
	       '<div class="dash">'+
	       '<span class="fl"></span>'+
	        '<span class="fr"></span>'+
	       '</div> '+
	       '<div class="cbody">'+
	        '<img src="'+arrb[i].picUrl+'" alt="" />'+
	        '<div class="fr">'+
	         '<h4 class="disib">'+arrb[i].discount+' 折</h4>'+
	         '<p>有效期至 '+arrb[i].effectTime+'</p>'+
	         '<p class="disib">'+arrb[i].conditions+'</p>'+
	        '</div>'+
	       '</div> '+
	       '<div class="cfoot">'+
	        '<div id="icon"><img src="../images/backd.png"  alt="" /></div><span class="msga">详细信息</span>'+
	       '</div> '+
	       '<span class="one bgccc">已使用</span>'+
	      '</div>'+
	      '<div class="msg msgaa">'+
	       arrb[i].description+
	      '</div> '
	      ;
	    break;
	  default:
	    arrb[i].type="全场通用优惠券";
	    tbc.innerHTML += '<div class="coupon" cdata='+i+' data-toggle="modal" data-target=".bs-example-modal-sm"> '+
	       '<div class="chead ">'+
	        '<h4 class="disib">全场通用优惠券</h4>'+
	       '<span class="ti fr">'+arrb[i].shopName+'</span>'+
	       '</div> '+
	       '<div class="dash">'+
	       '<span class="fl"></span>'+
	        '<span class="fr"></span>'+
	       '</div> '+
	       '<div class="cbody">'+
	        '<img src="'+arrb[i].picUrl+'" alt="" />'+
	        '<div class="fr">'+
	         '<h4 class="disib">'+arrb[i].value+' 元</h4>'+
	         '<p>有效期至 '+arrb[i].effectTime+'</p>'+
	         '<p class="disib">'+arrb[i].conditions+'</p>'+
	        '</div>'+
	       '</div> '+
	       '<div class="cfoot">'+
	        '<div id="icon"><img src="../images/backd.png"  alt="" /></div><span class="msga">详细信息</span>'+
	        '</div> '+
	        '<span class="one bgccc">已使用</span>'+
	      '</div>'+
	      '<div class="msg msgaa">'+
	       arrb[i].description+
	      '</div> ';
	 };
}
}else{
	tbc.innerHTML='<div style="text-align:center">此条件下暂无记录</div>'
};
//cccccccccccccccccccccccccccccccccccccccccccccccccccccccc
//console.log(arrc)
if(arrc.length>0){

for (var i = 0; i < arrc.length; i++) {
    var times = arrc[i].effectTime;
    function add0(m) {
        return m < 10 ? '0' + m: m
    }
    var timestamp = parseInt(times * 1000);
    var time = new Date(timestamp);
    var y = time.getFullYear();
    var m = time.getMonth() + 1;
    var d = time.getDate();
    var b = y + '-' + add0(m) + '-' + add0(d);
	arrc[i].effectTime = b;
    function countTime() { }countTime();
	switch (arrc[i].type){
	  case "1":
	    arrc[i].type='单品兑换券';
	    tcc.innerHTML += '<div  class="coupon"> '+
	       '<div class="chead ">'+
	        '<h4 class="disib">单品兑换券</h4>'+
	        '<span class="ti fr">'+arrc[i].shopName+'</span>'+
	       '</div> '+
	       '<div class="dash">'+
	       '<span class="fl"></span>'+
	        '<span class="fr"></span>'+
	       '</div> '+
	       '<div class="cbody">'+
	        '<img src="'+arrc[i].picUrl+'" alt="" />'+
	        '<div class="fr">'+
	         '<h4 class="disib">'+arrc[i].foodName+'</h4>'+
	         '<p>有效期至 '+arrc[i].effectTime+'</p>'+
	         '<p class="disib">'+arrc[i].conditions+'</p>'+
	        '</div>'+
	       '</div> '+
	       '<div class="cfoot">'+
	        '<div id="icon"><img src="../images/backd.png"  alt="" /></div><span class="msga">详细信息</span>'+
	        '</div> '+
	        '<span class="one bgccc">已过期</span>'+
	      '</div>'+
	      '<div class="msg msgaa">'+
	       arrc[i].description+
	      '</div> '
	      ;
	    break;
	  case "5":
	    arrc[i].type="单品特价券";
	    tcc.innerHTML += '<div class="coupon"> '+
	       '<div class="chead ">'+
	        '<h4 class="disib">单品特价券</h4>'+
	        '<span class="ti fr">'+arrc[i].shopName+'</span>'+
	       '</div> '+
	       '<div class="dash">'+
	       '<span class="fl"></span>'+
	        '<span class="fr"></span>'+
	       '</div> '+
	       '<div class="cbody">'+
	        '<img src="'+arrc[i].picUrl+'" alt="" />'+
	        '<div class="fr">'+
	         '<h4 class="disib">'+arrc[i].foodName+'</h4>'+
	         '<p>有效期至 '+arrc[i].effectTime+'</p>'+
	         '<p class="disib ">现价'+arrc[i].nowPrice+'元（原价'+arrc[i].originPrice+'元）</p>'+
	        '</div>'+
	       '</div> '+
	       '<div class="cfoot">'+
	        '<div id="icon"><img src="../images/backd.png"  alt="" /></div><span class="msga">详细信息</span>'+
	        '</div> '+
	        '<span class="one bgccc">已过期</span>'+
	      '</div>'+
	      '<div class="msg msgaa">'+
	       arrc[i].description+
	      '</div> '
	      ;
	    break;
	  case "3":
	    arrc[i].type="单次消费折扣券";
	    tcc.innerHTML += '<div class="coupon"> '+
	       '<div class="chead ">'+
	        '<h4 class="disib">单次消费折扣券</h4>'+
	        '<span class="ti fr">'+arrc[i].shopName+'</span>'+
	       '</div> '+
	       '<div class="dash">'+
	       '<span class="fl"></span>'+
	        '<span class="fr"></span>'+
	       '</div> '+
	       '<div class="cbody">'+
	        '<img src="'+arrc[i].picUrl+'" alt="" />'+
	        '<div class="fr">'+
	         '<h4 class="disib">'+arrc[i].discount+' 折</h4>'+
	         '<p>有效期至 '+arrc[i].effectTime+'</p>'+
	         '<p class="disib">'+arrc[i].conditions+'</p>'+
	        '</div>'+
	       '</div> '+
	       '<div class="cfoot">'+
	        '<div id="icon"><img src="../images/backd.png"  alt="" /></div><span class="msga">详细信息</span>'+
	       '</div> '+
	       '<span class="one bgccc">已过期</span>'+
	      '</div>'+
	      '<div class="msg msgaa">'+
	       arrc[i].description+
	      '</div> '
	      ;
	    break;
	  default:
	    arrc[i].type="全场通用优惠券";
	    tcc.innerHTML += '<div class="coupon"> '+
	       '<div class="chead ">'+
	        '<h4 class="disib">全场通用优惠券</h4>'+
	       '<span class="ti fr">'+arrc[i].shopName+'</span>'+
	       '</div> '+
	       '<div class="dash">'+
	       '<span class="fl"></span>'+
	        '<span class="fr"></span>'+
	       '</div> '+
	       '<div class="cbody">'+
	        '<img src="'+arrc[i].picUrl+'" alt="" />'+
	        '<div class="fr">'+
	         '<h4 class="disib">'+arrc[i].value+' 元</h4>'+
	         '<p>有效期至 '+arrc[i].effectTime+'</p>'+
	         '<p class="disib">'+arrc[i].conditions+'</p>'+
	        '</div>'+
	       '</div> '+
	       '<div class="cfoot">'+
	        '<div id="icon"><img src="../images/backd.png"  alt="" /></div><span class="msga">详细信息</span>'+
	        '</div> '+
	        '<span class="one bgccc">已过期</span>'+
	      '</div>'+
	      '<div class="msg msgaa">'+
	       arrc[i].description+
	      '</div> ';
	 };
}
}else{
	tcc.innerHTML='<div style="text-align:center">此条件下暂无记录</div>'
};

// $(".cfoot").click(function(){
//     $(this).parent().next().slideToggle(100);
// });
$(".stop").click(function(event) {
	var datas=$(this).attr('cdata')
    var cudata=window.sessionStorage;
    cudata.cudata=arra[datas].id;
    (arra[datas].code)?code=arra[datas].code:code='-------------';
  	var head='<h1>立即使用</h1><h1>请将此券出示给服务员享受优惠</h1>'
  	var sure='<p>验证码:<b>'+code+'</b></p><h1 data="1000">确定</h1>'
    var inner=$(this).parent().parent().parent()[0].innerHTML;
    $('.desc').html(head);
    $('.tips').html(inner);
    $('.sure').html(sure);
    $('.modal-content i').html(' ');
    $('.modal-content .coupon button').hide();
});
$(".tbc .coupon").click(function(event) {
	var couponId=$(this).attr('cdata');
	(arrb[couponId].code)?code=arrb[couponId].code:code='-------------';
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
               
	var head='<h1>使用记录</h1><h1>请将此券出示给服务员享受优惠</h1><h1>使用时间：'+usedTime+'</h1>'
    var inner=$(this)[0].innerHTML;
    $('.desc').html(head)
     $('.tips').html(inner);
     $('.sure').html(sure);
});
$('.sure').click(function(event) {
	if($(this).find('h1').attr('data')=='1000'){
		$.ajax({
    	url: '/bc/index.php?s=/Home/activity/useTicket/id/'+sessionStorage.cudata,
    	type: 'GET',
    	async:false,
    	success:function(data){}
	});
	}
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
var zjnum=sessionStorage.zjnum;
if(zjnum>0){
	var news=$('.tac .chead i');
	var xin=' 新';
	for(var i=0;i<zjnum;i++){
	news[i].innerHTML=xin;
}
}
$('.tac .coupon').click(function(event) {
	
	sessionStorage.zjnum--;
});
}

