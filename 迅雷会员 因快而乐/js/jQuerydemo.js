$(function(){
    initEleEvents();	
});

var picleft=0;
var i=1;

function initEleEvents(){
    $("#wpbanli1").click(function(){
        $("#wpbanmainpic" +i).fadeOut();
        i=1;
        picleft=0;
        $(".wpbanli").css("background-image",'url("css/images/36.png")');
        $("#wpbanli"+i).css("background-image",'url("css/images/35.png")');
        $("#wpbanmainpic" +i).fadeIn();

    })
    $("#wpbanli2").click(function(){
        $("#wpbanmainpic" +i).fadeOut();
        i=2;
        picleft=-1200;
        $(".wpbanli").css("background-image",'url("css/images/36.png")');
        $("#wpbanli"+i).css("background-image",'url("css/images/35.png")');
        $("#wpbanmainpic" +i).fadeIn();

    })
    $("#wpbanli3").click(function(){
        $("#wpbanmainpic" +i).fadeOut();
        i=3;
        picleft=-2400;
        $(".wpbanli").css("background-image",'url("css/images/36.png")');
        $("#wpbanli"+i).css("background-image",'url("css/images/35.png")');
        $("#wpbanmainpic" +i).fadeIn();

    })
    $("#wpbanli4").click(function(){
        $("#wpbanmainpic" +i).fadeOut();
        i=4;
        picleft=-3600;
        $(".wpbanli").css("background-image",'url("css/images/36.png")');
        $("#wpbanli"+i).css("background-image",'url("css/images/35.png")');
        $("#wpbanmainpic" +i).fadeIn();

    })
    $("#wpbanli5").click(function(){
        $("#wpbanmainpic" +i).fadeOut();
        i=5;
        picleft=-4800;
        $(".wpbanli").css("background-image",'url("css/images/36.png")');
        $("#wpbanli"+i).css("background-image",'url("css/images/35.png")');
        $("#wpbanmainpic" +i).fadeIn();

    })

    $(window).scroll(function(){
        if ($(this).scrollTop()>140) {
            $("#comeback").show();
            $("#comeback").css("top",($(this).scrollTop() + 240) +"px");
        }else{
            $("#comeback").hide();
        };
    })
    $("#comeback").click(function(){
        $("html,body").animate({scrollTop:0},500);
    })



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
   /* setInterval("icoshow()",2500);*/

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
        $("#wpbanli"+i).css("background-image",'url("css/images/36.png")');
        $("#wpbanmainpic" +i).fadeOut();
        i=i-1;
        if (i==0) {
        i=5;
        $("#wpbanli"+i).css("background-image",'url("css/images/35.png")');
        $("wpbanmainpic"+i).fadeIn();
        };
        $("#wpbanli"+i).css("background-image",'url("css/images/35.png")');
        $("#wpbanmainpic" +i).fadeIn();

    })
    $("#next").click(function(){
/*    	picleft=picleft-1200;
    	$("#wpbanmain").css("left",picleft);
    	if (picleft<-3800) {
             picleft=1200;
    	};
*/
        $("#wpbanli"+i).css("background-image",'url("css/images/36.png")');
        $("#wpbanmainpic" +i).fadeOut();
        i=i+1;
        $("#wpbanli"+i).css("background-image",'url("css/images/35.png")');
        $("#wpbanmainpic" +i).fadeIn();
        if (i==6) {
        $("#wpbanli"+i).css("background-image",'url("css/images/36.png")');
        $("#wpbanmainpic" +i).fadeOut();
        i=1;
        $("#wpbanli"+i).css("background-image",'url("css/images/35.png")');
        $("#wpbanmainpic" +i).fadeIn();
    };
    })


}


function picshow(){
        $("#wpbanli"+i).css("background-image",'url("css/images/36.png")');
        $("#wpbanmainpic" +i).fadeOut();
        i=i+1;
        $("#wpbanli"+i).css("background-image",'url("css/images/35.png")');
        $("#wpbanmainpic" +i).fadeIn();
        if (i==6) {
        $("#wpbanli"+i).css("background-image",'url("css/images/36.png")');
        $("#wpbanmainpic" +i).fadeOut();
        i=1;
        $("#wpbanli"+i).css("background-image",'url("css/images/35.png")');
        $("#wpbanmainpic" +i).fadeIn();
    };

/*	picleft=picleft-1200;
	$("#wpbanmain").css("left",picleft);
	if (picleft<-3800) {
		picleft=1200;
	};*/
}

/*function icoshow(){
    $("#wpbanli"+i).css("background-image",'url("css/images/36.png")');
    i=i+1;
	$("#wpbanli"+i).css("background-image",'url("css/images/35.png")');
    if (i==6) {
    	$("#wpbanli"+i).css("background-image",'url("css/images/36.png")');
    	i=1;
    	$("#wpbanli"+i).css("background-image",'url("css/images/35.png")');
    };

}*/