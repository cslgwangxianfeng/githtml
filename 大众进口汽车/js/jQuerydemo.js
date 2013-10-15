$(function(){

    initEleEvents();	

});

function initEleEvents(){
    $("#ul1li1").mouseover(function(){
    	$(this).find(".headerul").show();
    })
    $("#ul1li1").mouseout(function(){
    	$(this).find(".headerul").hide();
    })
    $(".ul1li").mouseover(function(){
    	$(this).find(".headerul").show();
    })
    $(".ul1li").mouseout(function(){
    	$(this).find(".headerul").hide();
    })




	$("#contenta1").mouseover(function(){
		$("#li1").css({
			"width":"206px",
			"height":"104px",
			"left":"33px",
			"top":"7px"
		});
        $("#li2").css("left","264px");
        $("#li3").css({
			"width":"126px",
			"height":"64px",
			"left":"446px",
			"top":"48px"
		});
        $("#li4").css({
			"width":"126px",
			"height":"64px",
			"left":"596px",
			"top":"48px"
		});
        $("#li5").css({
			"width":"126px",
			"height":"64px",
			"left":"746px",
			"top":"48px"
		});
	})
    $(".contenta").mouseout(function(){
        $(".contentli").css({
        	"width":"158px",
        	"height":"80px",
        	"top":"32px"
        });
        $("#li1").css("left","23px");
        $("#li2").css("left","209px");
        $("#li3").css("left","395px");
        $("#li4").css("left","581px");
        $("#li5").css("left","767px");
    })
    $("#contenta2").mouseover(function(){
    	$("#li1").css("left","38px");
		$("#li2").css({
			"width":"206px",
			"height":"104px",
			"left":"219px",
			"top":"7px"
		});
        $("#li3").css("left","450px");
        $("#li4").css({
			"width":"126px",
			"height":"64px",
			"left":"632px",
			"top":"48px"
		});
        $("#li5").css({
			"width":"126px",
			"height":"64px",
			"left":"782px",
			"top":"48px"
		});
	})
    $("#contenta3").mouseover(function(){
    	$("#li1").css({
			"width":"126px",
			"height":"64px",
			"left":"39px",
			"top":"48px"
		});
    	$("#li2").css("left","189px");
		$("#li3").css({
			"width":"206px",
			"height":"104px",
			"left":"370px",
			"top":"7px"
		});
        $("#li4").css("left","601px");
        $("#li5").css({
			"width":"126px",
			"height":"64px",
			"left":"783px",
			"top":"48px"
		});
	})
	$("#contenta4").mouseover(function(){
		$("#li1").css({
			"width":"126px",
			"height":"64px",
			"left":"40px",
			"top":"48px"
		});
    	$("#li2").css({
			"width":"126px",
			"height":"64px",
			"left":"190px",
			"top":"48px"
		});
    	$("#li3").css("left","340px");
		$("#li4").css({
			"width":"206px",
			"height":"104px",
			"left":"521px",
			"top":"7px"
		});
        $("#li5").css("left","752px");
    })
    $("#contenta5").mouseover(function(){
    	$("#li1").css({
			"width":"126px",
			"height":"64px",
			"left":"76px",
			"top":"48px"
		});
        $("#li2").css({
			"width":"126px",
			"height":"64px",
			"left":"226px",
			"top":"48px"
		});
        $("#li3").css({
			"width":"126px",
			"height":"64px",
			"left":"376px",
			"top":"48px"
		});
        $("#li4").css("left","526px");
        $("#li5").css({
			"width":"206px",
			"height":"104px",
			"left":"707px",
			"top":"7px"
		});
	})
    $("#selectorbtna").mouseover(function(){
    	var flag=$(this).attr("openflag");
    	if (flag=="no") {
    		$("#selectorbtna").css("background-position","0 -57px");
    	}else{
    		$("#selectorbtna").css("background-position","0 -171px");
    	}
    		
    	
    })
    $("#selectorbtna").mouseout(function(){
    	var flag=$(this).attr("openflag");
    	if (flag=="no") {
    		$("#selectorbtna").css("background-position","0 0px");
    	}else{
    		$("#selectorbtna").css("background-position","0 -114px");
    	}	
    })


	$("#selectorbtna").click(function(){
		var flag=$(this).attr("openflag");
		if (flag=="no") {
			$("#selectorbtna").attr("openflag","yes");
			$("#selector").animate({"top":"1px"},500,function(){
				$("#selectorbtna").css("background-position","0 -114px");
			})
		}else{
			$("#selectorbtna").attr("openflag","no");
			$("#selector").animate({"top":"-446px"},500,function(){
				$("#selectorbtna").css("background-position","0 0");
			})
		}

	});
   
	
};
   