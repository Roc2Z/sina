$(document).ready(function() {
	var index=0;
	var index1=0;
	var index2=0;
	var index3=0;
	var index4=0;
	var index5=0;
	var index6=0;
	var newLeft=0;
	//鼠标移动停止滚动
	$(".now_news").mouseover(function(){
		
		clearInterval(timer);	
		});
	$(".now_news").mouseout(function(){
		
		go();	
		});
	//上一页按钮
	
		var timer=null;
		//设置定时器
		function go(){
			timer=setInterval(function(){
				goto();
				newsContent();
				startMove(300);},3000);
			}
		go();	
	//圆形图标的图案显示
	$(".btn_main span").each(function(){
      $(".btn_main span").click(function(){	
		//alert(index1);
		//debugger;
		$(".btn_main").children("#a").removeClass("on");
		$(this).addClass("on");
		index=$(this).attr("index");
		
		
		//alert(index);
		//showColor();
		
    });
  });
   $(".btn_main span").click(function(){
		
		showColor();
			
  });
function showColor(){
	//var index1=0;
	//var newLeft=0;
	x=$(".now_news_pic_banner").position();
	//alert(x.left);
		index1=x.left/(-300);
		if(index1==0){
			index1=5;
			}
		if(index1==6){
			index1=1;
			}
		if(index>index1){
			newLeft=(index-index1)*300;
			}
		else{
			newLeft=(index1-index)*(-300);
			}
		//index=$(this).attr("index");
		//index=index1;
		//alert(index);
		//alert(index1);
		//alert(newLeft);
	
	startMove(newLeft);
	$(".now_news_pic_title span").each(function(){
			index3=$(this).attr("index");
			if(index3==(index)){
			$(".now_news_pic_title").children("#b").removeClass("start");	
			$(this).addClass("start");
		//alert(index3);	
				}
			});	
	
}

//图片运动函数
function startMove(goal){
		x=$(".now_news_pic_banner").position();
		if(x.left<'-1500'){
			$(".now_news_pic_banner").css("left","-300px");
			}
		if(x.left>'-300'){
			$(".now_news_pic_banner").css("left","-1500px");
			}
		$(".now_news_pic_banner").animate({left:'-='+goal+'px'});
  		
		}
		//焦点自动切换
	//var index2=0;
	function goto(){
		x=$(".now_news_pic_banner").position();
		index2=x.left/(-300);
		if(index2==5){
			index2=0;
			}
		if(index2==6){
			index2=1;
			}
		$(".btn_main span").each(function(){
			
			index3=$(this).attr("index");
			if(index3==(index2+1)){
			$(".btn_main").children("#a").removeClass("on");	
			$(this).addClass("on");
		//alert(index3);	
				}
			});
		}
		function newsContent(){
		x=$(".now_news_pic_banner").position();
		index2=x.left/(-300);
		if(index2==5){
			index2=0;
			}
		if(index2==6){
			index2=1;
			}
		$(".now_news_pic_title span").each(function(){
			
			index3=$(this).attr("index");
			if(index3==(index2+1)){
			$(".now_news_pic_title").children("#b").removeClass("start");	
			$(this).addClass("start");
		//alert(index3);	
				}
			});
		}
		$(".now_place a").mouseout(function(){
			returncolor(".now_place_span")
			});
		$(".now_place a").mouseover(function(){
			changecolor(".now_place_span")
			});
		
	function changecolor(goalClass){
		
			$(goalClass).css("background","white");
			$(goalClass).css("color","#4b9ef4");
		
		}
	function returncolor(goalClass){
			$(goalClass).css("background","#4b9ef4");
			$(goalClass).css("color","white");
		
		}
	
});
	
	
//滚动函数

