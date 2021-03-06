jQuery(document).ready(function(){
	
	//Add Class Js to html
	jQuery('html').addClass('js');	
								
    //=================================== MENU ===================================//
	jQuery("ul.sf-menu").supersubs({ 
	minWidth		: 12,		// requires em unit.
	maxWidth		: 12,		// requires em unit.
	extraWidth		: 3	// extra width can ensure lines don't sometimes turn over due to slight browser differences in how they round-off values
						   // due to slight rounding differences and font-family 
	}).superfish();  // call supersubs first, then superfish, so that subs are 
					 // not display:none when measuring. Call before initialising 
					 // containing tabs for same reason. 
	
	//=================================== MOBILE MENU DROPDOWN ===================================//
	jQuery('#topnav').tinyNav({
		active: 'selected'
	});
	
	//=================================== TABS AND TOGGLE ===================================//
	//jQuery tab
	jQuery(".tab-content").hide(); //Hide all content
	jQuery("ul.tabs li:first").addClass("active").show(); //Activate first tab
	jQuery(".tab-content:first").show(); //Show first tab content
	//On Click Event
	jQuery("ul.tabs li").click(function() {
		jQuery("ul.tabs li").removeClass("active"); //Remove any "active" class
		jQuery(this).addClass("active"); //Add "active" class to selected tab
		jQuery(".tab-content").hide(); //Hide all tab content
		var activeTab = jQuery(this).find("a").attr("href"); //Find the rel attribute value to identify the active tab + content
		jQuery(activeTab).fadeIn(200); //Fade in the active content
		return false;
	});
	
	//jQuery toggle
	jQuery(".toggle_container").hide();
	jQuery("h2.trigger").click(function(){
		jQuery(this).toggleClass("active").next().slideToggle("slow");
	});
	
	//=================================== FADE EFFECT ===================================//
	if (jQuery.browser.msie && jQuery.browser.version < 7) return; // Don't execute code if it's IE6 or below cause it doesn't support it.
	
	jQuery('.ts-display-pf-img').hover(
		function() {
			jQuery(this).find('.rollover').stop().fadeTo(500, 0.60);
		},
		function() {
			jQuery(this).find('.rollover').stop().fadeTo(500, 0);
		}
	)
	
	//=================================== PRETTYPHOTO ===================================//
	<!--jQuery('a[data-rel]').each(function() {jQuery(this).attr('rel', jQuery(this).data('rel'));});-->
	<!--jQuery("a[rel^='prettyPhoto']").prettyPhoto({animationSpeed:'slow',theme:'facebook',gallery_markup:'',slideshow:2000});-->
	
});


/* 高清适配 */
var isiPhone = navigator.userAgent.match(/iPhone|iPod/i);
var isRetina = window.devicePixelRatio > 1;


// replace @2x images ---------------------------------------------------------
//     require: jQuery

jQuery(function ($) {
	if (isRetina && !isiPhone) {
		$('[srcset]').each(function () {
			$(this).attr('src', $(this).attr('srcset').replace(/([^ ]+) 2x/, '$1'));
		});
	}
});


/* 自适应图片显示，根据屏幕尺寸动态改变显示大小 

<img src="../image/screenshot.jpg" srcset="../image/screenshot@2x.jpg 2x" width="430"  onload="javascript:drawImage(this)" />

*/
function drawImage(image){ //参数(图片) 

var w = image.width;
var window_w = document.body.clientWidth - 60;
if (document.body.clientWidth <= 320 ){

	window_w = document.body.clientWidth - 35; //小屏幕，减少点
}

//alert(document.body.clientWidth);

if (w >= window_w)
{
	image.width = window_w;
}
	window.onresize = function change_image_size() {
	
	  	window_w = document.body.clientWidth - 60;
	  	if (document.body.clientWidth <= 320 ){
	  	
	  		window_w = document.body.clientWidth - 35; //小屏幕，减少点
	  	}
		 if (w >= window_w)
	 	{
	 		image.width = window_w;
	 	}
	 
	}
}