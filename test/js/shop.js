//二维码
var shopid=window.sessionStorage.shopid;
$.ajax({
    url: '/bc/index.php?s=/Home/wx/getScan/id/'+shopid,
    type: 'GET',
    async:false,
    success:function(data){
        var url=(JSON.parse(data)).data
       $('#erwei').attr('src',url);
       var er = document.getElementsByClassName('modal-content')[0];
       er.innerHTML='<img src='+url+' alt="" /><p style="text-align:center;margin-top: -12px;margin-bottom: 13px;">扫一扫 参与店铺优惠活动</p>'

    }
});
$('#jxing').click(function(event) {
    window.location.reload()
})
$('#zting').click(function(event) {
    //location.href="./shop.html"
})
$('#jshu').click(function(event) {
    //location.href="./shop.html"
})
var shopname=window.sessionStorage.name;
$('#shopname').html(shopname)

var arra=[],arrb=[],arrc=[];
$.ajax({
	url: '/bc/index.php?s=/Home/shop/activityList/type/1',
	type: 'GET',
    async:false,
    success:function(data){
      if (JSON.parse(data).code==-1) {alert(JSON.parse(data).msg);}
          if (JSON.parse(data).data!==null) {           
        arra=(JSON.parse(data)).data;
        //arra.reverse();
        //console.log(arra)
      }
    }
});
//注销
$('#logout').click(function(event) {
    /* Act on the event */
    $.ajax({
    url: '/bc/index.php?s=/Home/shop/logout',
    type: 'GET',
    success:function(data){
       sessionStorage.clear();
    }
    });
    alert('已退出登陆')
    window.location.href="./login.html"
});
                
	var tac = document.getElementsByClassName('tac')[0];
	var tbc = document.getElementsByClassName('tbc')[0];
	var tcc = document.getElementsByClassName('tcc')[0];
    var img = tac.getElementsByTagName('img');
    var span = tac.getElementsByTagName('span');
    var da,ha,ma,sa;
    //console.log(arra.length)
if(arra.length>0){
for (var i = 0; i < arra.length; i++) {
    var times=arra[i].effectTime;
                function add0(m){return m<10?'0'+m:m }
                var timestamp = parseInt(times*1000);
                var time = new Date(timestamp);
                var y=time.getFullYear();
                var m = time.getMonth()+1;
                var d = time.getDate();
                var h = time.getHours();
                var mm = time.getMinutes();
                b=y+'-'+add0(m)+'-'+add0(d)+' '+add0(h)+':'+add0(mm);
                   
        function countTime() {
            //获取当前时间
            var now=(new Date().getTime())/1000;
            var cutoff=arra[i].cutOffTime;
            var diff=cutoff-now;
            var day = Math.floor(diff/86400);    
            var hour = Math.floor(diff%86400/3600);
            arra[i].cutOffTime=(day+'天'+hour+'小时')
        }countTime();
        arra[i].effectTime=b;
  switch (arra[i].type){
  case "1":
    arra[i].type='单品兑换券';
    tac.innerHTML += '<div  class="coupon"> '+
       '<div class="chead ">'+
        '<h4 class="disib">单品兑换券</h4>'+
        '<span class="ti fr">倒计时：'+arra[i].cutOffTime+'</span>'+
       '</div> '+
       '<div class="dash">'+
       '<span class="fl"></span>'+
        '<span class="fr"></span>'+
       '</div> '+
       '<div class="cbody">'+
        '<img src="'+arra[i].picUrl+'" alt="" />'+
        '<div class="fr">'+
         '<h4 class="disib">'+arra[i].foodName+'</h4>'+
         '<button class="stop fr" cdata='+i+'>停止</button>'+
         '<p>有效期至 '+arra[i].effectTime+'</p>'+
         '<p class="disib">'+arra[i].conditions+'</p>'+
         '<button class="edit fr" statu=a cdata='+i+'>编辑</button>'+
        '</div>'+
       '</div> '+
       '<div class="cfoot">'+
        '<div id="icon"><img src="../images/backd.png"  alt="" /></div><span class="msga">详细信息</span>'+
        '<span class="fr msgb">剩余数量： '+arra[i].renum+'/'+arra[i].num +'</span>'+
        '</div>'+
        '</div>'+
        '<div class="msg msgaa">'+
         arra[i].description+
        '</div> ';
    break;
  case "5":
    arra[i].type="单品特价券";
    tac.innerHTML += '<div class="coupon"> '+
       '<div class="chead ">'+
        '<h4 class="disib">单品特价券</h4>'+
        '<span class="ti fr">倒计时：'+arra[i].cutOffTime+'</span>'+
       '</div> '+
       '<div class="dash">'+
       '<span class="fl"></span>'+
        '<span class="fr"></span>'+
       '</div> '+
       '<div class="cbody">'+
        '<img src="'+arra[i].picUrl+'" alt="" />'+
        '<div class="fr">'+
         '<h4 class="disib">'+arra[i].foodName+'</h4>'+
         '<button class="stop fr" cdata='+i+'>停止</button>'+
         '<p>有效期至 '+arra[i].effectTime+'</p>'+
         '<p class="disib ">现价'+arra[i].nowPrice+'元（原价'+arra[i].originPrice+'元）</p>'+
         '<button class="edit fr" statu=a cdata='+i+'>编辑</button>'+
        '</div>'+
       '</div> '+
       '<div class="cfoot">'+
        '<div id="icon"><img src="../images/backd.png"  alt="" /></div><span class="msga">详细信息</span>'+
        '<span class="fr msgb">剩余数量： '+arra[i].renum+'/'+arra[i].num +'</span>'+
        '</div>'+
        '</div>'+
        '<div class="msg msgaa">'+
         arra[i].description+
        '</div> ';
    break;
  case "3":
    arra[i].type="单次消费折扣券";
    tac.innerHTML += '<div class="coupon"> '+
       '<div class="chead ">'+
        '<h4 class="disib">单次消费折扣券</h4>'+
        '<span class="ti fr">倒计时：'+arra[i].cutOffTime+'</span>'+
       '</div> '+
       '<div class="dash">'+
       '<span class="fl"></span>'+
        '<span class="fr"></span>'+
       '</div> '+
       '<div class="cbody">'+
        '<img src="'+arra[i].picUrl+'" alt="" />'+
        '<div class="fr">'+
         '<h4 class="disib">'+arra[i].discount+' 折</h4>'+
         '<button class="stop fr" cdata='+i+'>停止</button>'+
         '<p>有效期至 '+arra[i].effectTime+'</p>'+
         '<p class="disib">'+arra[i].conditions+'</p>'+
         '<button class="edit fr" statu=a cdata='+i+'>编辑</button>'+
        '</div>'+
       '</div> '+
       '<div class="cfoot">'+
        '<div id="icon"><img src="../images/backd.png"  alt="" /></div><span class="msga">详细信息</span>'+
        '<span class="fr msgb">剩余数量： '+arra[i].renum+'/'+arra[i].num +'</span>'+
        '</div>'+
        '</div>'+
        '<div class="msg msgaa">'+
         arra[i].description+
        '</div> ';
    break;
  default:
    arra[i].type="全场通用优惠券";
    tac.innerHTML += '<div class="coupon"> '+
       '<div class="chead ">'+
        '<h4 class="disib">全场通用优惠券</h4>'+
        '<span class="ti fr">倒计时：'+arra[i].cutOffTime+'</span>'+
       '</div> '+
       '<div class="dash">'+
       '<span class="fl"></span>'+
        '<span class="fr"></span>'+
       '</div> '+
       '<div class="cbody">'+
        '<img src="'+arra[i].picUrl+'" alt="" />'+
        '<div class="fr">'+
         '<h4 class="disib">'+arra[i].value+' 元</h4>'+
         '<button class="stop fr" cdata='+i+'>停止</button>'+
         '<p>有效期至 '+arra[i].effectTime+'</p>'+
         '<p class="disib">'+arra[i].conditions+'</p>'+
         '<button class="edit fr" statu=a cdata='+i+'>编辑</button>'+
        '</div>'+
       '</div> '+
       '<div class="cfoot">'+
        '<div id="icon"><img src="../images/backd.png"  alt="" /></div><span class="msga">详细信息</span>'+
        '<span class="fr msgb">剩余数量： '+arra[i].renum+'/'+arra[i].num +'</span>'+
        '</div>'+
        '</div>'+
        '<div class="msg msgaa">'+
         arra[i].description+
        '</div> ';
  };                       
}
}else{
  tac.innerHTML='<div style="text-align:center">此条件下暂无记录</div>'
}

////暂停 结束///////////////////////////////////////////////////////////
// $('#zting').click(function(event) {
//      Act on the event 

$.ajax({
    url: '/bc/index.php?s=/Home/shop/activityList/type/2',
    type: 'GET',
    async:false,
    success:function(data){
      if (JSON.parse(data).data!==null) {
        arrb=(JSON.parse(data)).data;
        //console.log(arrb)
      }
    }
});
//HTML
if(arrb.length>0){
for (var i = 0; i < arrb.length; i++) {
    var times=arrb[i].effectTime;
                function add0(m){return m<10?'0'+m:m }
                var timestamp = parseInt(times*1000);
                var time = new Date(timestamp);
                var y=time.getFullYear();
                var m = time.getMonth()+1;
                var d = time.getDate();
                var h = time.getHours();
                var mm = time.getMinutes();
                var b=y+'-'+add0(m)+'-'+add0(d)+' '+add0(h)+':'+add0(mm);
                arrb[i].effectTime=b;
   
    switch (arrb[i].type)
  {
  case "1":
    arrb[i].type='单品兑换券';
    tbc.innerHTML += '<div cdata='+arrb[i].id+' class="coupon"> '+
       '<div class="chead ">'+
        '<h4 class="disib">单品兑换券</h4>'+
       '</div> '+
       '<div class="dash">'+
       '<span class="fl"></span>'+
        '<span class="fr"></span>'+
       '</div> '+
       '<div class="cbody">'+
        '<img src="'+arrb[i].picUrl+'" alt="" />'+
        '<div class="fr">'+
         '<h4 class="disib">'+arrb[i].foodName+'</h4>'+
         '<button class="start fr" cdata='+i+'>开始</button>'+
         '<p>有效期至 '+arrb[i].effectTime+'</p>'+
         '<p class="disib">'+arrb[i].conditions+'</p>'+
         '<button class="edit fr" statu=b cdata='+i+'>编辑</button>'+
        '</div>'+
       '</div> '+
       '<div class="cfoot">'+
        '<div id="icon"><img src="../images/backd.png"  alt="" /></div><span class="msga">详细信息</span>'+
        '<span class="fr msgb">剩余数量： '+arrb[i].renum+'/'+arrb[i].num +'</span>'+
        '</div>'+
        '</div>'+
        '<div class="msg msgaa">'+
         arrb[i].description+
        '</div> ';
    break;
  case "5":
    arrb[i].type="单品特价券";
    tbc.innerHTML += '<div class="coupon"> '+
       '<div class="chead ">'+
        '<h4 class="disib">单品特价券</h4>'+
       '</div> '+
       '<div class="dash">'+
       '<span class="fl"></span>'+
        '<span class="fr"></span>'+
       '</div> '+
       '<div class="cbody">'+
        '<img src="'+arrb[i].picUrl+'" alt="" />'+
        '<div class="fr">'+
         '<h4 class="disib">'+arrb[i].foodName+'</h4>'+
         '<button class="start fr" cdata='+i+'>开始</button>'+
         '<p>有效期至 '+arrb[i].effectTime+'</p>'+
         '<p class="disib">'+arrb[i].conditions+'</p>'+
         '<button class="edit fr" statu=b cdata='+i+'>编辑</button>'+
        '</div>'+
       '</div> '+
       '<div class="cfoot">'+
        '<div id="icon"><img src="../images/backd.png"  alt="" /></div><span class="msga">详细信息</span>'+
        '<span class="fr msgb">剩余数量： '+arrb[i].renum+'/'+arrb[i].num +'</span>'+
        '</div>'+
        '</div>'+
        '<div class="msg msgaa">'+
         arrb[i].description+
        '</div> ';
    break;
  case "3":
    arrb[i].type="单次消费折扣券";
    tbc.innerHTML += '<div class="coupon"> '+
       '<div class="chead ">'+
        '<h4 class="disib">单次消费折扣券</h4>'+
       '</div> '+
       '<div class="dash">'+
       '<span class="fl"></span>'+
        '<span class="fr"></span>'+
       '</div> '+
       '<div class="cbody">'+
        '<img src="'+arrb[i].picUrl+'" alt="" />'+
        '<div class="fr">'+
         '<h4 class="disib">优惠名称</h4>'+
         '<button class="start fr" cdata='+i+'>开始</button>'+
         '<p>有效期至 '+arrb[i].effectTime+'</p>'+
         '<p class="disib">'+arrb[i].conditions+'</p>'+
         '<button class="edit fr" statu=b cdata='+i+'>编辑</button>'+
        '</div>'+
       '</div> '+
       '<div class="cfoot">'+
        '<div id="icon"><img src="../images/backd.png"  alt="" /></div><span class="msga">详细信息</span>'+
        '<span class="fr msgb">剩余数量： '+arrb[i].renum+'/'+arrb[i].num +'</span>'+
        '</div>'+
        '</div>'+
        '<div class="msg msgaa">'+
         arrb[i].description+
        '</div> ';
    break;
  default:
    arrb[i].type="全场通用优惠券";
    tbc.innerHTML += '<div class="coupon"> '+
       '<div class="chead ">'+
        '<h4 class="disib">全场通用优惠券</h4>'+
       '</div> '+
       '<div class="dash">'+
       '<span class="fl"></span>'+
        '<span class="fr"></span>'+
       '</div> '+
       '<div class="cbody">'+
        '<img src="'+arrb[i].picUrl+'" alt="" />'+
        '<div class="fr">'+
         '<h4 class="disib">'+arrb[i].value+' 元</h4>'+
         '<button class="start fr" cdata='+i+'>开始</button>'+
         '<p>有效期至 '+arrb[i].effectTime+'</p>'+
         '<p class="disib">'+arrb[i].conditions+'</p>'+
         '<button class="edit fr" statu=b  cdata='+i+'>编辑</button>'+
        '</div>'+
       '</div> '+
       '<div class="cfoot">'+
        '<div id="icon"><img src="../images/backd.png"  alt="" /></div><span class="msga">详细信息</span>'+
        '<span class="fr msgb">剩余数量： '+arrb[i].renum+'/'+arrb[i].num +'</span>'+
        '</div>'+
        '</div>'+
        '<div class="msg msgaa">'+
         arrb[i].description+
        '</div> ';
  };
    
                       
}
}else{
  tbc.innerHTML='<div style="text-align:center">此条件下暂无记录</div>'
};


//});
///结束///////////////////////////
// $('#jshu').click(function(event) {
    /* Act on the event */
   

$.ajax({
    url: '/bc/index.php?s=/Home/shop/activityList/type/3',
    type: 'GET',
    async:false,
    success:function(data){
      if (JSON.parse(data).data!==null) {
        arrc=(JSON.parse(data)).data;
        //console.log(arrc)
      }
    }
});
//HTML
if(arrc.length>0){
for (var i = 0; i < arrc.length; i++) {
    var times=arrc[i].effectTime;
                function add0(m){return m<10?'0'+m:m }
                var timestamp = parseInt(times*1000);
                var time = new Date(timestamp);
                var y=time.getFullYear();
                var m = time.getMonth()+1;
                var d = time.getDate();
                var h = time.getHours();
                var mm = time.getMinutes();
                var b=y+'-'+add0(m)+'-'+add0(d)+' '+add0(h)+':'+add0(mm);
                arrc[i].effectTime=b;
    
    switch (arrc[i].type)
  {
  case "1":
    arrc[i].type='单品兑换券';
    tcc.innerHTML += '<div cdata='+arrc[i].id+' class="coupon"> '+
       '<div class="chead ">'+
        '<h4 class="disib">单品兑换券</h4>'+
        '<img src="../images/img@2x.png" class="oicon fr" alt=""  />'+
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
         '<p class="disib marg">'+arrc[i].conditions+'</p>'+
         '<button class="edit fr" statu=c cdata='+i+'>编辑</button>'+
        '</div>'+
       '</div> '+
       '<div class="cfoot">'+
        '<div id="icon"><img src="../images/backd.png"  alt="" /></div><span class="msga">详细信息</span>'+
        '<span class="fr msgb">剩余数量： '+arrc[i].renum+'/'+arrc[i].num +'</span>'+
        '</div>'+
        '</div>'+
        '<div class="msg msgaa">'+
         arrc[i].description+
        '</div> ';
    break;
  case "5":
    arrc[i].type="单品特价券";
    tcc.innerHTML += '<div class="coupon"> '+
       '<div class="chead ">'+
        '<h4 class="disib">单品特价券</h4>'+
        '<img src="../images/img@2x.png" class="oicon fr" alt=""  />'+
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
         '<p class="disib marg">'+arrc[i].conditions+'</p>'+
         '<button class="edit fr" statu=c cdata='+i+'>编辑</button>'+
        '</div>'+
       '</div> '+
       '<div class="cfoot">'+
        '<div id="icon"><img src="../images/backd.png"  alt="" /></div><span class="msga">详细信息</span>'+
        '<span class="fr msgb">剩余数量： '+arrc[i].renum+'/'+arrc[i].num +'</span>'+
        '</div>'+
        '</div>'+
        '<div class="msg msgaa">'+
         arrc[i].description+
        '</div> ';
    break;
  case "3":
    arrc[i].type="单次消费折扣券";
    tcc.innerHTML += '<div class="coupon"> '+
       '<div class="chead ">'+
        '<h4 class="disib">单次消费折扣券</h4>'+
        '<img src="../images/img@2x.png" class="oicon fr" alt=""  />'+
       '</div> '+
       '<div class="dash">'+
       '<span class="fl"></span>'+
        '<span class="fr"></span>'+
       '</div> '+
       '<div class="cbody">'+
        '<img src="'+arrc[i].picUrl+'" alt="" />'+
        '<div class="fr">'+
         '<h4 class="disib">优惠名称</h4>'+
         '<p>有效期至 '+arrc[i].effectTime+'</p>'+
         '<p class="disib marg">'+arrc[i].conditions+'</p>'+
         '<button class="edit fr" statu=c cdata='+i+'>编辑</button>'+
        '</div>'+
       '</div> '+
       '<div class="cfoot">'+
        '<div id="icon"><img src="../images/backd.png"  alt="" /></div><span class="msga">详细信息</span>'+
        '<span class="fr msgb">剩余数量： '+arrc[i].renum+'/'+arrc[i].num +'</span>'+
        '</div>'+
        '</div>'+
        '<div class="msg msgaa">'+
         arrc[i].description+
        '</div> ';
    break;
  default:
    arrc[i].type="全场通用优惠券";
    tcc.innerHTML += '<div class="coupon"> '+
       '<div class="chead ">'+
        '<h4 class="disib">全场通用优惠券</h4>'+
        '<img src="../images/img@2x.png" class="oicon fr" alt=""  />'+
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
         '<p class="disib marg">'+arrc[i].conditions+'</p>'+
         '<button class="edit fr" statu=c cdata='+i+'>编辑</button>'+
        '</div>'+
       '</div> '+
       '<div class="cfoot">'+
        '<div id="icon"><img src="../images/backd.png"  alt="" /></div><span class="msga">详细信息</span>'+
        '<span class="fr msgb">剩余数量： '+arrc[i].renum+'/'+arrc[i].num +'</span>'+
        '</div>'+
        '</div>'+
        '<div class="msg msgaa">'+
         arrc[i].description+
        '</div> ';
  };                     
}
}else{
  tcc.innerHTML='<div style="text-align:center">此条件下暂无记录</div>'
};
//});
var n=1;
$('.cfoot').click(function(event) {
  n<2?n++:n=1;
  if(n==2){
   $(this).find("div").html('<img src="../images/backu.png"  alt="" />');
  }else{
    $(this).find("div").html('<img src="../images/backd.png"  alt="" />');
  }
  // event.stopPropagation();
  $(this).parent().next().slideToggle(10);
});
$(".stop").click(function(event) {
     var datas=$(this).attr('cdata')
      window.location.reload()
    //$(this).css('background','#ccc');
    $.ajax({
    url: '/bc/index.php?s=/Home/shop/changeStatus/id/'+arra[datas].id+'/status/0',
    type: 'GET',
    async:false,
    success:function(data){
      
    }
});
});
$(".start").click(function(event) {
    //$(this).css('background','#f49f38').css('color','#fff');
    window.location.reload();
     var datas=$(this).attr('cdata')
     $.ajax({
    url: '/bc/index.php?s=/Home/shop/changeStatus/id/'+arrb[datas].id+'/status/1',
    type: 'GET',
    async:false,
    success:function(data){
    }
});
});
$(".edit").click(function(event) {
    var datas=$(this).attr('cdata')
    var statu=$(this).attr('statu')
    var obj;
    if (statu=='a') {obj = arra[datas];}else if(statu=='b'){obj = arrb[datas];}else{obj = arrc[datas];}
   var str = JSON.stringify(obj); //存入 
   sessionStorage.obj = str; //读取 
   //str = sessionStorage.obj; //重新转换为对象 
   //obj = JSON.parse(str);
    //console.log(obj)
    location.href='./couponedit.html'
    //$(this).css('background','#ccc')
});

$('#erwei').click(function(event) {

if($('#erwei').attr('src').length<1){
    $.ajax({
    url: '/bc/index.php?s=/Home/wx/getScan/id/'+shopid,
    type: 'GET',
    async:false,
    success:function(data){
        var url=(JSON.parse(data)).data
       $('#erwei').attr('src',url);
       var er = document.getElementsByClassName('modal-content')[0];
       er.innerHTML='<img src='+url+' alt="" /><p style="text-align:center;margin-top: -12px;margin-bottom: 13px;">扫一扫 参与店铺优惠活动</p>'

    }
});
  
}$('#yincang').click();
});