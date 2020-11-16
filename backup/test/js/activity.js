
var myurl=getUrlParam('id');
var shopid;
if(myurl !=null && myurl.toString().length>0){shopid=getUrlParam("id");}
function getUrlParam(name) {var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");var r = window.location.search.substr(1).match(reg);if (r != null) return unescape(r[2]);return null;}


// var shopid=sessionStorage.shopid,hbiao=0;
var hbiao=0;
     var s = document.getElementById("run");
     var n = document.getElementById("num"); 
     var nu;
     $.ajax({
             url: '/bc/index.php?s=/Home/activity/index/shopId/'+shopid,
             type: 'GET',
             async:false,
             success: function(data) {
             	data=JSON.parse(data);
               
                 if(data.code!==1){
                $('.tishi span').html(data.msg)
                 $('.tishi').show();
                 n='0';
                 s='0';
                 }
             	nu=data.next;
             	n.innerHTML=data.num;
                 if (data.num==3) {
                     $('#runs').hide();
                 }
            	
             var obj=data.list;
             var str = JSON.stringify(obj); //存入 
             sessionStorage.obj = str; //读取 
             },
             error: function(data) {
                 console.log("err");
             }
         })

 var timeout = false;
 function time()  
{  
  if(timeout) return;  
   s.innerHTML = nu--;
   if (s.innerHTML==0) {
   	n.innerHTML=n.innerHTML*1+1 ;
   	timeout=true;
   }
  setTimeout(time,1000);
}time();

    
 $('#cj').click(function(event) {
 	/* Act on the event */
     if (n.innerHTML==0){ 
        $('.tishi span').html('您的抽奖次数已用完');
        $('.tishi').show();
        return};
     $.ajax({
             url: '/bc/index.php?s=/Home/activity/draw/shopId/'+shopid,
             type: 'GET',
             async:false,
             success: function(data) {
                 data=JSON.parse(data);
                 console.log(data)
                 var cjnum;
                 var nStorage=window.sessionStorage;
                 nStorage.cjnum=data.data;

             },
             error: function(data) {
                 console.log("err");
             }
         })
     $('#runs').show();
 	$.ajax({
             url: '/bc/index.php?s=/Home/activity/index/shopId/'+shopid,
             type: 'GET',
             success: function(data) {
             	data=JSON.parse(data);
                if(data.code!==1){alert('来晚了一步，奖项已经抽完了~') ; }
             	nu=data.next;
             	n.innerHTML=data.num;
                 console.log(data)
             },
             error: function(data) {
                 console.log("err");
             }
         });
     var stimes= JSON.parse(sessionStorage.obj); //重新转换为对象 
     var stime=sessionStorage.cjnum;
     if(stimes[stime].real==3){
         $('.stime').hide();
         $('.modal-content').css("background-image","url(../images/sorry.png)");
     }else{
     var times =stimes[stime].effectTime;
     function add0(m) {
         return m < 10 ? '0' + m: m
     }
     var timestamp = parseInt(times * 1000);
     var time = new Date(timestamp);
     var y = time.getFullYear();
     var m = time.getMonth() + 1;
     var d = time.getDate();
     var b = y + '-' + add0(m) + '-' + add0(d);
     $('#stime').text(b);
     hbiao++;
    
     var zhongjbum=window.sessionStorage;
     zhongjbum.zjnum=hbiao;
    
     }
 });

 $('.modal-content').click(function(event) {
     /* Act on the event */
     $('.modal').click();
     if(hbiao>0){
        $('.badge').text(hbiao);
     }
     
 });
 
  $('.mcoupon').click(function(event) {
     /* Act on the event */
     window.location.href="./record.html"
     
 });
  $('#ssure').click(function(event) {
      /* Act on the event */
      $('.tishi').hide();
  });