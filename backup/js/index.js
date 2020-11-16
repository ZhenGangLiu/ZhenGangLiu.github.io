
// 获取轮播窗口
var view = document.querySelector('.view');

// 获取ul元素
var ul = document.querySelector('.view ul');

// 获取首尾元素
var firstChild = document.querySelector('.view li:first-child');
var lastChild = document.querySelector('.view li:last-child');

var lis, size, width, timer, index = 0;

var startX, endX;

// 初始化
function init() {
    // 将末尾元素添加至最前面
    ul.insertBefore(lastChild.cloneNode(true), ul.firstChild);
    // 将首个元素添加至末尾
    ul.appendChild(firstChild.cloneNode(true));

    // 获取所有子元素
    lis = document.querySelectorAll('.view li');
    // 获取子元素长度
    size = lis.length;

    // 设置元素宽度
    setWidth();

    // 初始定位坐标及索引值
    index--;
    ul.style.left = index * width + 'px';

    // 自动滚动
    autoSlide();
}

// 设置元素宽度
function setWidth() {
    // 获取轮播区域窗口
    width = view.clientWidth;
    // 设置ul的宽度
    ul.style.width = width * size + 'px';
    // 设置子元素宽度
    for(var i=0; i<lis.length; i++) {
        lis[i].style.width = width + 'px';
    }
}

// 检测窗口大小重设置元素宽度
window.onresize = function () {
    setWidth();
    // 元素宽度变化后更新定位坐标
    ul.style.left = index * width + 'px';
}

// 触屏事件（接触屏幕）
ul.addEventListener('touchstart', function (ev) {
    // 清除定时器
    clearInterval(timer);

    // 获取手指信息
    touch = ev.targetTouches[0];
    // 触屏时X坐标
    startX = touch.clientX;
});

// 触屏事件（离开屏幕）
ul.addEventListener('touchend', function (ev) {
    // 获取手指信息
    touch = ev.changedTouches[0];
    // 离开屏幕时X坐标
    endX = touch.clientX;

    // 设置过渡属性
    ul.style.transition = 'all 0.5s ease-in-out';

    // 判断方向
    if(endX > startX) {
        // 更新索引值
        index++;
        // 更新定位坐标
        ul.style.left = index * width + 'px';

    } else {
        // 更新索引值
        index--;
        // 更新定位坐标
        ul.style.left = index * width + 'px';
    }

    // 再次开启自动滚动
    autoSlide();

});

// 监听过渡结束
ul.addEventListener('webkitTransitionEnd', function () {
    // 删除过过渡属性
    ul.style.transition = '';

    // 检测边界值
    if(index == 0) {
        index = 2 - size;
    }

    // 检测边界值
    if(index == 1 - size) {
        index = -1;
    }

    // 更新定位坐标
    ul.style.left = index * width + 'px';

    // 获取索引值后可以调整小圆点
    console.log('当前索引值：' + Math.abs(index));
});

function autoSlide() {
    // 定时器
    timer = setInterval(function () {
        // 设置过渡
        ul.style.transition = 'all 0.5s ease-in-out';

        // 更新索引
        index--;
        ul.style.left = index * width + 'px';

    }, 1500);
}

// 启动
init();


