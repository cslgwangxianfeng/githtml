$(function(){
    initEleEvents();	
});



function initEleEvents(){
	/*$("#searchtext").focus(function(){
    	$("#searchtext").css("background-image","none");
    })


    $("#searchtext").blur(function(){
    	$("#searchtext").css("background-image",'url("css/images/1.jpg")');
    })*/
    
    $("#searchtext").keyup(function(e){

    	var val=$("#searchtext").val();
    	if (val=="") {
    		$("#searchtext").css("background-image",'url("css/images/1.jpg")');
    	}else{$("#searchtext").css("background-image","none");}
    })

    $(".subnavli").mouseover(function(){
    	$(this).find(".subnava").css("display","none");
    	$(this).find(".subnavad").css("display","block");
    	$(this).find(".subnavad").stop().animate({"width":"195px"},220);
    })

    $(".subnavli").mouseout(function(){
    	
    	
    	$(this).find(".subnavad").stop().animate({"width":"0px"},220,function(){
    		$(".subnavad").css("display","none");
    		$(".subnava").css("display","block");
    	});
    })

    $(".gamelistli").mouseover(function(){
           $(this).find(".gamelistmain").stop().animate({"top":"-108px"},250);
    });
    $(".gamelistli").mouseout(function(){
           $(this).find(".gamelistmain").stop().animate({"top":"0px"},250);
    });
};
    