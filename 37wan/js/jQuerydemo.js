$(function(){
    initEleEvents();	
});



function initEleEvents(){
	$(".gamesblock").mouseover(function(){
      $(this).find(".gamesblockMain").stop().animate({"top":"-240px"},"fast");
    })
	$(".gamesblock").mouseout(function(){
       $(this).find(".gamesblockMain").stop().animate({"top":"0"},"fast");
    })
}
