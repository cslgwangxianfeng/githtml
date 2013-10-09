$(function(){
    initEleEvents();	
});



function initEleEvents(){
	$("#btn").mouseover(function(){
		$("#btn").css("background-position","0 -24px");
	})

	$("#btn").mouseout(function(){
		$("#btn").css("background-position","0 0");
	})
    
    $("#zhanghao").focus(function(){
    	$("#zhanghao").css("background-image","none");
    })


    $("#zhanghao").blur(function(){
    	$("#zhanghao").css("background-image",'url("css/images/1.jpg")');
    })

    $("#mima").focus(function(){
    	$("#mima").css("background-image","none");
    })


    $("#mima").blur(function(){
    	$("#mima").css("background-image",'url("css/images/2.jpg")');
    })
    
    $(".li1").mouseover(function(){
        
        $(this).find(".y1").show();

    })
    $(".li1").mouseout(function(){
        
        $(this).find(".y1").hide();

    })
        $(".li1").mouseover(function(){
        
        $(this).find(".y2").show();

    })
    $(".li1").mouseout(function(){
        
        $(this).find(".y2").hide();

    })

    $("#regbtn").mouseover(function(){
        $(this).css("background-position","0 -90px")
    })

    $("#regbtn").mouseout(function(){
        $(this).css("background-position","0 -48px")
    })


    $(".f1btn1").click(function(){
        $(".f1btn1").css("background-image",'url("css/images/25.jpg")');
        $(this).css("background-image",'url("css/images/26.jpg")');
    })

    $(".f1btn2").click(function(){
        $(".f1btn2").css("background-image",'url("css/images/25.jpg")');
        $(this).css("background-image",'url("css/images/26.jpg")');
    })
}