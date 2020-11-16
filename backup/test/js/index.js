var hbiao=0;
     var dt = document.getElementById("daotime");
     var cn = document.getElementById("chounum"); 
     var nu,shopId,zjIdx,obj;
     var idurl=getUrlParam('shopId');
    if(idurl !=null && idurl.toString().length>0){shopId=getUrlParam("shopId");}
    function getUrlParam(name) {var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");var r = window.location.search.substr(1).match(reg);if (r != null) return unescape(r[2]);return null;}
    console.log(shopId)
     $.ajax({
             //url: '/draw/index.php?s=/home/draw/index/shopId/'+shopId,
             url: '/draw/index.php?s=/home/draw/index/shopId/'+1,
             type: 'GET',
             async:false,
             success: function(data) {
                data=JSON.parse(data);
                 if(data.code!==1){
                 tips(data.msg)
                 }
                 if (data.data.status==1) {
                     $('#runs').hide();
                 }
                 $('.guize textarea').val(data.data.shopInfo.ruleDesc)
                 dt.innerHTML=Math.ceil(data.data.next/3600);
                 cn.innerHTML=data.data.status;
                 obj=data.data.list;
             var str = JSON.stringify(obj); //存入 
             sessionStorage.obj = str; //读取 
             },
             error: function(data) {
                 console.log("err");
             }
         })    
 $('#cj').click(function(event) {
    /* Act on the event */
     if (cn.innerHTML==0){ 
        tips('您的抽奖次数已用完')
        return};
     $.ajax({
             url: '/draw/index.php?s=/home/draw/draw/shopId/'+shopId,
             type: 'GET',
             async:false,
             success: function(data) {
                 data=JSON.parse(data);
                 zjIdx=data.data.id;
                 if(zjIdx==0){
                    window.sessionStorage.setItem("cjnum",zjIdx)
                }
                 
             },
             error: function(data) {
                 console.log("err");
             }
         })
     $('#runs').show();
    $.ajax({
             url: '/draw/index.php?s=/home/draw/index/shopId/'+shopId,
             type: 'GET',
            
             success: function(data) {
                data=JSON.parse(data);
                if(data.code!==1){tips(data.msg) ; }
                dt.innerHTML=Math.ceil(data.data.next/3600);
                cn.innerHTML=data.data.status;
             },
             error: function(data) {
                 console.log("err");
             }
         });
    // if(zjIdx !== 0){
    //                 for(var i=0;i<obj.length;i++){
    //                     var idd=obj[i].id;
    //                     if (idd == zjIdx) {
    //                         zjIdx=i+1;
    //                         window.sessionStorage.setItem("cjnum",zjIdx)
    //                     }
    //                 }
    //             }
      // var stimes= JSON.parse(sessionStorage.obj); //重新转换为对象 
      // var stime=sessionStorage.cjnum;
       var stimes=3; //重新转换为对象 
      var stime=3;
     if(stime==0){
         $('.stime').hide();
         $('.modal-content').css("background-image","url(../images/sorry.png)");
     }else{
     var times =3;
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
     window.location.href="./record.html?shopId="+shopId
 });
  function tips(str){
        $(".tips").text(str).fadeIn(500);
        setTimeout('$(".tips").fadeOut(1000)',1200);
  };