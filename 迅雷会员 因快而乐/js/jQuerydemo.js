$(function(){
    initEleEvents();	
});

var picleft=0;
var i=1;

function initEleEvents(){
    $("#hytq").mouseover(function(){
        $("#hytqcontent").show();
    })
    $("#hytq").mouseout(function(){
        $("#hytqcontent").hide();
    })


    $(".midlink").mouseover(function(){
        $(this).css("background-color","#b40000");
    })
    $(".midlink").mouseout(function(){
        $(this).css("background-color","#c80000");
    })

    $("#vipservice").mouseover(function(){
        $("#vipcontent").show();
        $("#wpban").css("margin-top","35px");
    });
    $("#vipservice").mouseout(function(){
        $("#vipcontent").hide();
        $("#wpban").css("margin-top","0");
    });

	setInterval("picshow()",2500);
    setInterval("icoshow()",2500);

    $("#wpban").mouseover(function(){
    	$("#pre").show();
    	$("#next").show();
    })

    $("#wpban").mouseout(function(){
    	$("#pre").hide();
    	$("#next").hide();
    })

    $("#pre").click(function(){
        /*if (picleft>-100) {
             picleft=-4800;
        };
    	$("#wpbanmain").css("left",picleft);
        picleft=picleft+1200;*/
        $("#wpbanli"+i).css("background-image",'url("css/images/36.jpg")');
        $("#wpbanmainpic" +i).fadeIn();
        i=i-1;
        if (i==0) {
        i=5;
        $("#wpbanli"+i).css("background-image",'url("css/images/35.jpg")');
        $("#wpbanmainpic" +i).hide();
        };
        $("#wpbanli"+i).css("background-image",'url("css/images/35.jpg")');
        $("#wpbanmainpic" +i).hide();

    })
    $("#next").click(function(){
    	picleft=picleft-1200;
    	$("#wpbanmain").css("left",picleft);
    	if (picleft<-3800) {
             picleft=1200;
    	};

        $("#wpbanli"+i).css("background-image",'url("css/images/36.jpg")');
        i=i+1;
        $("#wpbanli"+i).css("background-image",'url("css/images/35.jpg")');
        if (i==6) {
        $("#wpbanli"+i).css("background-image",'url("css/images/36.jpg")');
        i=1;
        $("#wpbanli"+i).css("background-image",'url("css/images/35.jpg")');
    };
    })


}


function picshow(){
	picleft=picleft-1200;
	$("#wpbanmain").css("left",picleft);
	if (picleft<-3800) {
		picleft=1200;
	};
}

function icoshow(){
    $("#wpbanli"+i).css("background-image",'url("css/images/36.jpg")');
    i=i+1;
	$("#wpbanli"+i).css("background-image",'url("css/images/35.jpg")');
    if (i==6) {
    	$("#wpbanli"+i).css("background-image",'url("css/images/36.jpg")');
    	i=1;
    	$("#wpbanli"+i).css("background-image",'url("css/images/35.jpg")');
    };

}