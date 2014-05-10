

/** 创建 disqus 评论框 */
function create_disqus(url)
{
	disqus_shortname = 'tmyam'; // 全局变量 required: replace example with your forum shortname
	disqus_identifier = url; // 全局变量
	disqus_url = url; // 全局变量

    var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
    dsq.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + disqus_shortname + '.disqus.com/embed.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
};


/** 添加 disqus 评论框 */     
function add_disqus(url)
{
   	var thenew= document.createElement('div');
   	thenew.innerHTML = "<div id=\"disqus_thread\"></div>\
   	<noscript>Please enable JavaScript to view the <a href=\"http://disqus.com/?ref_noscript\">comments powered by Disqus.</a></noscript>\
   	<a href=\"http://disqus.com\" class=\"dsq-brlink\">comments powered by <span class=\"logo-disqus\">Disqus</span></a>";

   	document.getElementById('customcomment').appendChild(thenew);
   
   	create_disqus(url);
}


/** 创建 duoshuo 评论框 */
function create_duoshuo()
{
    duoshuoQuery = {short_name:"tmyam"}; // 全局变量

	var ds = document.createElement('script');
	ds.type = 'text/javascript';ds.async = true;
	ds.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') + '//static.duoshuo.com/embed.js';
	ds.charset = 'UTF-8';
	(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(ds);
};       
       

/** 添加 duoshuo 评论框 */    
function add_duoshuo(url)
{
   	var thenew= document.createElement('div');
   	thenew.innerHTML = "<div class=\"ds-thread\" data-thread-key=\"" + url + "\" data-title=\"tmyam\" data-url=\"" + url +"\"></div>";
	
   	document.getElementById('customcomment').appendChild(thenew);  
   
  	create_duoshuo();
}


/** 根据不同的浏览器语言，加载不同的评论控件 */
function language_comment(url)
{
	var type=navigator.appName;
	if (type=="Netscape")
	{
   		 var lang = navigator.language;
	}
	else
	{
    	var lang = navigator.userLanguage;
	}
	//取得浏览器语言的前两个字母
	var lang = lang.substr(0,2);
	// 中文
	if (lang == "zh")
	{
		// 添加评论框
		add_duoshuo(url);
	}
	// 其他
	else
	{
   		// 添加评论框
   		add_disqus(url);
	}
}


