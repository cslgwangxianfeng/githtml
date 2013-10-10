$(function(){
    initEleEvents();	
});

var i=1;
var picleft=0;
function initEleEvents(){
     setInterval("picshow()",2000);




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

	 $("#introMain").mouseover(function(){
	 	$("#pre").show();
	 	$("#next").show();
	 })
	 $("#introMain").mouseout(function(){
	 	$("#pre").hide();
	 	$("#next").hide();
	 })
     
     $("#dot1").click(function(){
     	i=1;
     	picleft=0;
     	$(".dota").css("background-position","-36px -110px");
     	$("#dot1").css("background-position","-12px -110px");
     	$("#intropicMain").css("left",0);
     })
     $("#dot2").click(function(){
     	i=2;
     	picleft=-490;
     	$(".dota").css("background-position","-36px -110px");
     	$("#dot2").css("background-position","-12px -110px");
     	$("#intropicMain").css("left",-490);
     })
     $("#dot3").click(function(){
     	i=3;
     	picleft=0;
     	$(".dota").css("background-position","-36px -110px");
     	$("#dot3").css("background-position","-12px -110px");
     	$("#intropicMain").css("left",-980);
     })







     $("#pre").click(function(){
        picleft=picleft+490;

        if (picleft==490) {
        	picleft=-980;
        };
        $("#intropicMain").css("left",picleft);

     	$(".dota").css("background-position","-36px -110px");
        i=i-1;
        if (i==0) {
        	i=3;
        };
        $("#dot"+i).css("background-position","-12px -110px");
     })





	 $("#next").click(function(){
        picleft=picleft-490;

        if (picleft==-1470) {
        	picleft=0;
        };
        $("#intropicMain").css("left",picleft);


        $(".dota").css("background-position","-36px -110px");
        i=i+1;
        if (i==4) {
        	i=1;
        };
        $("#dot"+i).css("background-position","-12px -110px");

	 })
}

function picshow(){
	picleft=picleft-490;

        if (picleft==-1470) {
        	picleft=0;
        };
        $("#intropicMain").css("left",picleft);


        $(".dota").css("background-position","-36px -110px");
        i=i+1;
        if (i==4) {
        	i=1;
        };
        $("#dot"+i).css("background-position","-12px -110px");

}
