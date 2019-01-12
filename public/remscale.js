(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth; //获取设备尺寸
            console.log(clientWidth);

            if (!clientWidth) return;
            if(clientWidth>=670){ //设计稿宽度
              docEl.style.fontSize = '100px';
            }else{
              docEl.style.fontSize = 100 * (clientWidth / 720) + 'px';
            }
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false); //绑定事件
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);

