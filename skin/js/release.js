$(document).ready(function() {
	/*	2nd example	*/
	$(".banBtn .banPut").hover(function() {
		$(".banPic2",	this).stop().animate({'top':	'0px'},		80); // move down - show
		$(".banBtnbg").css("background-color","#508eb1");
	}, function() {
		$(".banPic2",	this).stop().animate({'top':	'30px'},	80); // move up - hide
		$(".banBtnbg").css("background-color","#2b76a0");
	});
	
	$(".leftNav li").hover(function() {
		$(".leftNav2",	this).stop().animate({'left':	'0px'},		300); // move down - show
	}, function() {
		$(".leftNav2",	this).stop().animate({'left':	'212px'},	300); // move up - hide
	});
	
	$(".banBtn a").click(function(){
		$(".banShow").fadeToggle("slow");//slideToggle
		})
	$(".banBtn #z").click(function(){
		$(".banBtn #z").hide();
		$(".banBtn #k").show()
		})
	$(".banBtn #k").click(function(){
		$(".banBtn #k").hide();
		$(".banBtn #z").show()
		})
});


/* $(document).ready(function () {
	  $('.join_list ul li').hover(
	  function () {
		  $('.join_list ul li').removeClass('cur');
		  $(this).addClass('cur');
	  }
	  
	  );
	  
	  }); 
*/
$(document).ready(function(){
  $(".join_list ul li").click(function(){
    $(this).toggleClass('cur');
  });
});


$(function() {
    //集体调用
    $(".form input").each(function(){
        $(this).setDefauleValue();
    });
    //单个调用
    $("#key5").setDefauleValue();
    $("#key6").setDefauleValue();
    $("#key7").setDefauleValue();
    $("#key4").setDefauleValue();
})
 
//设置input,textarea默认值
$.fn.setDefauleValue = function() {
    var defauleValue = $(this).val();
    $(this).val(defauleValue).css("color","#848484");
 
    return this.each(function() {       
        $(this).focus(function() {
            if ($(this).val() == defauleValue) {
                $(this).val("").css("color","#333");//输入值的颜色
            }
        }).blur(function() {
            if ($(this).val() == "") {
                $(this).val(defauleValue).css("color","#848484");//默认值的颜色
            }
        });
    });
}
