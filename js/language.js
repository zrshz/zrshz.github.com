
/* 根据浏览器语言不同进行页面跳转 

def: 默认页面字符串 值为 en,zh,zh-Hant,ja
en,zh,zh-Hant,ja: 为bool参数，表示有没有这种语言的页面

*/
function languagelink(def,en,zh,zh_Hant,ja) {

	var index = "index.html";
	var mainlink = window.location.href;
	var link = mainlink.substr(0, mainlink.length - index.length );
	
	var type=navigator.appName;
	if (type=="Netscape")
	{
	    var lang = navigator.language;
	}
	else
	{
	    var lang = navigator.userLanguage;
	}

	var real = lang.substr(0,2);
	var china = lang.substr(0,7);
	if (real == "en" && en)
	{
	    window.location.href= link + "en/" + index;
	}
	else if (real == "ja" && ja)
	{
		window.location.href= link + "ja/" + index;
	}
	// 繁体中文
	else if ((real == "zh" && china == "zh-Hant") && zh_Hant)
	{
	   window.location.href= link + "zh-Hant/" + index;
	}
	// 简体中文
	else if (real == "zh" && zh)
	{
	   window.location.href= link + "zh/" + index;
	}
	else
	{
    	window.location.href= link + def +"/" + index;
	}
	
}