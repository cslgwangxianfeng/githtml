$(function(){
	
    initEleEvents();
    	
});

var picleft=0;
var i=0;
function initEleEvents(){
	
    setInterval("picshow()",2000);

    setInterval("boxshow()",2000);



    $("#buttonsubmit").click(function(){
    	
       $("#buttonsubmit").css("background-position","0 0");
       $("#q").show();
       $("#buttonsearch").focus();
      

       	
    });


   /* $(document).bind("click",function(e){
    	var target=$(e.target);
    	if (target.closest("#buttonsearch").length==0) {
    	$("#buttonsubmit").css("background-position","-41px 0");
        $("#q").hide();
    	};
    });*/

    $("#buttonsearch").blur(function(){
       $("#buttonsubmit").css("background-position","-41px 0");
       $("#q").hide();
     
    })

    


	$("#buttonsearch").keyup(function(){
		var val=$("#buttonsearch").val();
		if (val=="") {
			$("#buttonsearch").css("background-image",'url("css/images/5.jpg")')
		}else{
			$("#buttonsearch").css("background-image","none");}
    })

    $("#navli4").mouseover(function(){
    	$("#downsub1").show();
    	$("#navli4").addClass("dtover");
    })
	$("#navli4").mouseout(function(){
    	$("#downsub1").hide();
    	$("#navli4").removeClass("dtover");
    })
    $("#navli5").mouseover(function(){
    	$("#downsub2").show();
    	$("#navli5").addClass("dtover");
    })
	$("#navli5").mouseout(function(){
    	$("#downsub2").hide();
    	$("#navli5").removeClass("dtover");
    })


}

	function picshow(){
        picleft=picleft-1200;
        $("#marqueeMain").css("left",picleft);
        if (picleft<-2800) {
        picleft=1200;
        };
    }

    function boxshow(){

         i=i+1;
         $("#tabsli"+i).addClass("over");
    }