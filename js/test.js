//公共方法：设置iframe的高度以保证全部显示数据
//function SetPageHeight() {
//    var iframe = getUrlParam('ifname');
//    var myiframe = window.parent.document.getElementById(iframe);
//     iframeLoaded(myiframe);
//}
var iframeLoaded = function (iframe) {
    if (iframe.src.length > 0) {
        if (!iframe.readyState || iframe.readyState == "complete") {
            var bHeight = 
            iframe.contentWindow.document.body.scrollHeight;
            var dHeight = 
            iframe.contentWindow.document.documentElement.scrollHeight;
            var height = Math.max(bHeight, dHeight);
            iframe.height = height;
        }
    }
}
//分页时重新设置 iframe 高度 ； 修改后：iframe.name = iframe.id
var reSetIframeHeight = function()
{
    try {
        var oIframe = parent.document.getElementById(window.name);
        oIframe.height = 100;
        iframeLoaded(oIframe);
    }
    catch (err)
    {
        try {
         parent.document.getElementById(window.name).height = 1000;
          } catch (err2) { }
    }
}

var sendcount = 0;
var completecount = 0;
// 添加ajax全局事件处理。
reSetIframeHeight();
$(document).ajaxStart(function (a, b, c) {
alert("start");
}).ajaxSend(function (e, xhr, opts) {
    sendcount++;
}).ajaxError(function (e, xhr, opts) {
}).ajaxSuccess(function (e, xhr, opts) {
}).ajaxComplete(function (e, xhr, opts) {
    completecount++; 
        reSetIframeHeight();
     
}).ajaxStop(function () {
});