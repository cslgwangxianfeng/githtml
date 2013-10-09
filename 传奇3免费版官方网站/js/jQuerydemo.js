$(function(){
    initEleEvents();	
});



function initEleEvents(){
	$("#no1a").hover(function(){
		$(this).css("background-position","0 -44px");
	},function(){
		$(this).css("background-position","0 0");
	})

    $("#no2").mouseover(function(){
		$("#no2dd").stop().slideDown(300);
	});
	$("#no2").mouseout(function(){
		$("#no2dd").stop().slideUp(300);
	});

	$("#no2a").hover(function(){
		$(this).css("background-position","0 -44px");
	},function(){
		$(this).css("background-position","0 0");
	})



	    $("#no3").mouseover(function(){
		$("#no3dd").stop().slideDown(300);
	});
	$("#no3").mouseout(function(){
		$("#no3dd").stop().slideUp(300);
	});
	$("#no3a").hover(function(){
		$(this).css("background-position","0 -44px");
	},function(){
		$(this).css("background-position","0 0");
	})

	$("#no4").mouseover(function(){
	$("#no4dd").stop().slideDown(300);
	});
	$("#no4").mouseout(function(){
		$("#no4dd").stop().slideUp(300);
	});
	$("#no4a").hover(function(){
		$(this).css("background-position","0 -44px");
	},function(){
		$(this).css("background-position","0 0");
	})
	$("#no5a").hover(function(){
		$(this).css("background-position","0 -44px");
	},function(){
		$(this).css("background-position","0 0");
	})



    $("#no6").mouseover(function(){
	$("#no6dd").stop().slideDown(300);
	});
	$("#no6").mouseout(function(){
		$("#no6dd").stop().slideUp(300);
	});
	$("#no6a").hover(function(){
		$(this).css("background-position","0 -44px");
	},function(){
		$(this).css("background-position","0 0");
	})

      $("#searchtext").focus(function(){
      	$("#searchtext").css("background-image","none");
      })

      $("#searchtext").blur(function(){
      	$("#searchtext").css("background-image",'url("css/images/22.jpg")');
      })
    /*$("#searchtext").keyup(function(e){

    	var val=$("#searchtext").val();
    	if (val=="") {
    		$("#searchtext").css("background-image",'url("css/images/22.jpg")');
    	}else{$("#searchtext").css("background-image","none");}
    })*/
};