$(function(){
    initEleEvents();	
});



function initEleEvents(){
	$("#pic").mouseover(function(){
		$("#pic img").css("display","none");
	})

    $("#pic").mouseout(function(){
		$("#pic img").css("display","block");
	})
	$("#pic").mousemove(function(e){
		var x=e.clientX-($(window).width()-200)/2;
        var y=e.clientY;
        x=x/200*100;
		y=y/120*100;
		
		$("#pic").css("background-position",x+"%" + y+"%");
	})
};
    