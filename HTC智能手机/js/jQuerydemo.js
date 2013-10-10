$(function(){
	
    initEleEvents();
    	
});

var picleft=0;
var i=0;
var a=1;
var b=1;
function initEleEvents(){
	
    setInterval("picshow()",4000);

    setInterval("boxshow()",4000);

    /*$("#tabsli1").click(function(){
        picleft=0;
        i=0;
        a=1;
        $("#marqueeMain").css("left",picleft);
        $(".tabsli").css("background-color","#ccc");
        $("#tabsli"+a).css("background-color","#fff");
        $("#timer"+b).animate({"width":"177px"},0,function(){
            $(".timer div").css({"width":"0px"});
         });
        b=1;
        $("#timer"+b).animate({"width":"177px"},4000,function(){
            $(".timer div").css({"width":"0px"});
         });

    });*/



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
    $("#timer"+1).animate({"width":"177px"},4000,function(){
            $(".timer div").css({"width":"0px"});
         });


}

	function picshow(){
        picleft=picleft-1200;
        $("#marqueeMain").css("left",picleft);
        if (picleft==-4800) {
        picleft=1200;
        };
    }

    function boxshow(){
            a=a+1;
            b=b+1;
         $("#timer"+b).animate({"width":"177px"},4000,function(){
            $(".timer div").css({"width":"0px"});
         });
         if (b==5) {
            b=0;
         };
        

         
         $(".tabsli").css("background-color","#ccc")
         $("#tabsli"+a).css("background-color","#fff")
         if (a==6) {
            a=1;
            $("#tabsli"+a).css("background-color","#fff")
         };

    }