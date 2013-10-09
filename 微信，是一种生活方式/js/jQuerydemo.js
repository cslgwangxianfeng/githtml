$(function(){
    initEleEvents();	
});



function initEleEvents(){
	 $("#navdownloada").mouseover(function(){
	 	 $("#navdownloada").css("background-position","0 -144px");
	 	 $("#navdownloads").css("background-position","100% -144px");

	 })
	 $("#navdownloada").mouseout(function(){
	 	 $("#navdownloada").css("background-position","0 0");
	 	 $("#navdownloads").css("background-position","0 0");

	 })
	 $(".navfaqa").mouseover(function(){
	 	 $(this).css("background-position","0 -144px");
	 	 $(this).find(".navfaqs").css("background-position","100% -144px");

	 })
	 $(".navfaqa").mouseout(function(){
	 	 $(this).css("background-position","0 0");
	 	 $(this).find(".navfaqs").css("background-position","0 0");

	 })
	 $("#navcontacta").mouseover(function(){
	 	 $("#navcontacta").css("background-position","0 -144px");
	 	 $("#navcontacts").css("background-position","100% -144px");

	 })
	 $("#navcontacta").mouseout(function(){
	 	 $("#navcontacta").css("background-position","0 0");
	 	 $("#navcontacts").css("background-position","0 0");

	 })
}
