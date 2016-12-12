//原始Jq


var bgBtnNode=$(".J_bgBtn");//背景按钮
var bgDropMenuBoxNode=$(".J_bgDropMenuBox");//下拉菜单
var cancelNode=$(".J_cancel");//下拉菜单里的x
bgBtnNode.click(function(){//点击背景按钮显示下拉菜单
	bgDropMenuBoxNode.show();
});
cancelNode.click(function(event){//点击x隐藏下拉菜单
	event.preventDefault();//阻止浏览器默认行为  
	event.stopPropagation();//阻止事件冒泡 
		bgDropMenuBoxNode.hide();
});

var bgDropMenuDdANode=$(".J_bgDropMenu dd a");//小图所在的节点
bgDropMenuDdANode.click(function(event){
		event.preventDefault();//阻止浏览器默认行为  
		event.stopPropagation();//阻止事件冒泡 
		var smallBgUrl=$(this).css("background-image");//获取小图的路径
		var bigBgUrl=$("#bgAndHeadBox").css("background-image");//获取大图的路径
		var smallDianPos=smallBgUrl.lastIndexOf(".");//小图路径中最后点的位置
		var bigDianPos=bigBgUrl.lastIndexOf(".");//大图路径中最后点的位置
       	var Pos=smallBgUrl.substring(smallDianPos-1,smallDianPos);//截取小图.前一位字符
		var bigBg=bigBgUrl.substring(0,bigDianPos-1)+Pos+".jpg\")";//大图对应小图的路径
		$("#bgAndHeadBox").css("background-image",bigBg);//修改大图路径
});
var leftNode=$(".J_leftBtn");
var rightNode=$(".J_rightBtn");
leftNode.click(function(){
	var bigBgUrl=$("#bgAndHeadBox").css("background-image");//获取大图的路径
	var bigDianPos=bigBgUrl.lastIndexOf(".");//大图路径中最后点的位置
	var Pos=bigBgUrl.substring(bigDianPos-1,bigDianPos);//截取大图.前一位字符
         var nowPos;
         nowPos=Pos==0?9:Number(Pos)-1;
         var bigBg=bigBgUrl.substring(0,bigDianPos-1)+nowPos+".jpg\")";//大图对应小图的路径
         $("#bgAndHeadBox").css("background-image",bigBg);//修改大图路径
});
rightNode.click(function(){
	var bigBgUrl=$("#bgAndHeadBox").css("background-image");//获取大图的路径
	var bigDianPos=bigBgUrl.lastIndexOf(".");//大图路径中最后点的位置
	var Pos=bigBgUrl.substring(bigDianPos-1,bigDianPos);//截取大图.前一位字符
         var nowPos;
         nowPos=Pos==9?0:Number(Pos)+1;
         var bigBg=bigBgUrl.substring(0,bigDianPos-1)+nowPos+".jpg\")";//大图对应小图的路径
         $("#bgAndHeadBox").css("background-image",bigBg);//修改大图路径
});
//main的导航条移上去换样式
var mainNavANode=$(".mainNav a");
mainNavANode.mouseover(function(){
     $(this).css("background-color","#3ea1ee");
   $(this).children("dl").removeClass("mainNavDl");
   $(this).children("dl").addClass("curMainNavDl");
});
mainNavANode.mouseleave(function(){
     $(this).css("background-color","");
	$(this).children("dl").removeClass("curMainNavDl");
   $(this).children("dl").addClass("mainNavDl");
});

