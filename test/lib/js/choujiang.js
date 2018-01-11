
// 判断是不是移动设备
var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i) ? true: false;
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i) ? true: false;
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true: false;
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i) ? true: false;
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Windows());
    }
};

var turnWheel = {
    rewardNames:["谢谢参与","奖","奖","奖","奖","奖"],				//转盘奖品名称数组
    colors:[ 
        "#f5edb8","#FFFFFF",
        "#f5edb8","#FFFFFF",
        "#f5edb8","#FFFFFF",
        "#f5edb8","#FFFFFF",
        "#f5edb8","#FFFFFF",
        "#f5edb8","#FFFFFF"],					//转盘奖品区块对应背景颜色
    outsideRadius:179,			//转盘外圆的半径
    textRadius:137,				//转盘奖品位置距离圆心的距离
    insideRadius:60,			//转盘内圆的半径
    startAngle:0,				//开始角度
    bRotate:false				//false:停止;ture:旋转
};

// 图片信息
var imgQb = new Image();
imgQb.src = "#";
var imgSorry = new Image();
imgSorry.src = "#";
var str = sessionStorage.obj; //重新转换为对象
   //obj = JSON.parse(str);
   // for (var i = 0; i < obj.length; i++) { 
   //   turnWheel.rewardNames.push(obj[i].name)
   // }
$(document).ready(function(){
    //旋转转盘 item:奖品序号，从0开始的; txt：提示语 ,count 奖品的总数量;
    var rotateFunc = function (item, tip,count){

        // 应该旋转的角度，旋转插件角度参数是角度制。
        var baseAngle = 360 / count;
        // 旋转角度 == 270°（当前第一个角度和指针位置的偏移量） - 奖品的位置 * 每块所占的角度 - 每块所占的角度的一半(指针指向区域的中间)
        angles = 360 * 3 / 4 - ( item * baseAngle) - baseAngle / 2; // 因为第一个奖品是从0°开始的，即水平向右方向
        $('#wheelCanvas').stopRotate();
        $('#wheelCanvas').rotate({
            angle:0,
            animateTo:angles + 360 * 8, // 这里多旋转了5圈，圈数越多，转的越快
            duration:3000,
            callback:function (){ // 回调方法
                $("#yincang").click();
                if(tip=='谢谢参与'){$("#tip").html('<span>没有中奖</span></br><span>不过最重要的是开心咯</span>');}else{ $("#tip").text("抽中："+tip);}
                turnWheel.bRotate = !turnWheel.bRotate;
                if(isMobile.any()) // 判断是否移动设备
                {
                    // 调OC代码
                    window.location.href = "turntable://test.com?"+ "index=" + item +"&tip=" + tip ;
                }
            }
        });
    };

    // 抽取按钮按钮点击触发事件
    $('.pointer').click(function (){
        // 正在转动，直接返回
        if (cn.innerHTML==0) return;
        if(turnWheel.bRotate) return;
        var cjnum=3;
        turnWheel.bRotate = !turnWheel.bRotate;
        var count = turnWheel.rewardNames.length;
        // 这里应该是从服务器获取用户真实的获奖信息（对应的获奖序号）
        // 简单模拟随机获取奖品的序号(奖品个数范围内)
        //var item = randomNum(0,count - 1);
        var item = cjnum;
        // 开始抽奖
        rotateFunc(item, turnWheel.rewardNames[item],count);
    });

});

/*
返回在n和m之间的随机整数
n<= random <=m
*/
function randomNum(n, m){
    /* Math.floor(Math.random()*10);时，可均衡获取0到9的随机整数。 */
    var random = Math.floor(Math.random()*(m-n)) + n;
    return random;
}
window.onload=function(){
    drawWheelCanvas();
};

function drawWheelCanvas(){
    var canvas = document.getElementById("wheelCanvas");
    var baseAngle = Math.PI * 2 / (turnWheel.rewardNames.length);
    var ctx=canvas.getContext("2d");
    var canvasW = canvas.width; // 画板的高度
    var canvasH = canvas.height; // 画板的宽度
    ctx.clearRect(0,0,canvasW,canvasH);
    ctx.strokeStyle = "#FFBE04"; // 红色
    ctx.font = '16px Microsoft YaHei';
    for(var index = 0 ; index < turnWheel.rewardNames.length ; index++)
    {
        var angle = turnWheel.startAngle + index * baseAngle;
        ctx.fillStyle = turnWheel.colors[index];
        ctx.beginPath();
        ctx.arc(canvasW * 0.5, canvasH * 0.5, turnWheel.outsideRadius, angle, angle + baseAngle, false);
        ctx.arc(canvasW * 0.5, canvasH * 0.5, turnWheel.insideRadius, angle + baseAngle, angle, true);
        ctx.stroke();
        ctx.fill();
        ctx.save();
        ctx.fillStyle = "#E5302F";
        var rewardName = turnWheel.rewardNames[index];
        var line_height = 17;
        var translateX =  canvasW * 0.5 + Math.cos(angle + baseAngle / 2) * turnWheel.textRadius;
        var translateY =  canvasH * 0.5 + Math.sin(angle + baseAngle / 2) * turnWheel.textRadius;
        ctx.translate(translateX,translateY);
        ctx.rotate(angle + baseAngle / 2 + Math.PI / 2);
        if(rewardName.indexOf("M")>0){//查询是否包含字段 流量包
            var rewardNames = rewardName.split("M");
            for(var j = 0; j<rewardNames.length; j++){
                ctx.font = (j == 0)?'bold 20px Microsoft YaHei':'14px Microsoft YaHei';
                if(j == 0){
                    ctx.fillText(rewardNames[j]+"M", -ctx.measureText(rewardNames[j]+"M").width / 2, j * line_height);
                }else{
                    ctx.fillText(rewardNames[j], -ctx.measureText(rewardNames[j]).width / 2, j * line_height);
                }
            }
        }else if(rewardName.indexOf("M") == -1 && rewardName.length>5){//奖品名称长度超过一定范围
            rewardName = rewardName.substring(0,5)+"||"+rewardName.substring(5);
            var rewardNames = rewardName.split("||");
            for(var j = 0; j<rewardNames.length; j++){
                ctx.fillText(rewardNames[j], -ctx.measureText(rewardNames[j]).width / 2, j * line_height);
            }
        }else{
            ctx.fillText(rewardName, -ctx.measureText(rewardName).width / 2, 0);
        }
        ctx.restore();
    }
}
