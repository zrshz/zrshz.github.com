
/* 根据浏览器语言不同进行页面跳转 

def: 默认页面字符串 值为 en,zh,zh-Hant,ja
en,zh,zh-Hant,ja: 为bool参数，表示有没有这种语言的页面

*/
function languagelink(def,en,zh,zh_Hant,ja) {

	var mainlink = window.location.href;
	var index = mainlink.lastIndexOf("/");
	var laster = mainlink.substr(index, mainlink.length - index);
	var link = mainlink.substr(0, index );

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
	    window.location.href = link + "en" + laster;
	}
	else if (real == "ja" && ja)
	{
		window.location.href = link + "ja" + laster;
	}
	// 繁体中文
	else if ((real == "zh" && china == "zh-Hant") && zh_Hant)
	{
	   window.location.href = link + "zh-Hant" + laster;
	}
	// 简体中文
	else if (real == "zh" && zh)
	{
	   window.location.href = link + "zh" + laster;
	}
	else
	{
    	window.location.href = link + def + laster;
	}
}