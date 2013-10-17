$(function(){
    initEleEvents();	
});

var x=pageX;
var y=100;

function initEleEvents(){
	$("#pic").mouseover(function(e){
		var x=e.clientX-($(window).width()-200)/2;
        var y=e.clientY;
        x=x/1000*100%;
		y=y/600*100%;
		$("#pic img").css("display","none");
		$("#pic").css("background-position",x+"% "+y+"%");
	})
};
    