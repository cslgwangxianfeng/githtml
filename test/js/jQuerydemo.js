$(function(){

    initPosition();
	//事件的委托
    checktxt();
	initEleEvents();
});


function checktxt(){
    var val=$("#txtQ").val();

        if(val==""){
            $("#txtQ").css("background-image",'url("css/images/sosologo.png")');
        }
            else{
            $("#txtQ").css("background-image","none");
            }
}


//事件的委托
// key-value  对
function initEleEvents(){
    $(".tbmenu").mouseover(function(){
    	$(this).find("dt").addClass("dtover");
        $(this).find("dt").css("border-color","#ccc");
        $(this).find("dd").show();
    });

    $(".tbmenu").mouseout(function(){
        $(this).find("dt").removeClass("dtover");
        $(this).find("dt").css("border-color","#f5f5f5");
        $(this).find("dd").hide();
    });

    $(".tmenudt").click(function(){

         var flag=$(this).attr("openflag");
         $(".tmenudd").hide();
         $(".tmenudt").attr("openflag","no")

         if(flag=="no"){
            $(this).next("dd").show();
            $(this).attr("openflag","yes");
         }else{
            $(this).next("dd").hide();
            $(this).attr("openflag","no");
         }



         $(".tmenudt").removeClass("tdtover");
         $(this).addClass("tdtover");

    });
    
function search(){
    $("#sContent").slideDown(600);
};

     $("#btnQ").click(function(){
        search();        
    })

    $("#txtQ").keyup(function(e){
        checktxt();
        if(e.keyCode==13){
            search();  
        }
    });

$("#btnClose").click(function(){
    $("#sContent").slideUp(600);
});


$("#btnClose").mouseover(function(){
    $(this).css("background-image","url('css/images/3.png')");
});
$("#btnClose").mouseout(function(){
    $(this).css("background-image","url('css/images/4.png')");
});

    $("#btnClose").mousedown(function(){    
        $(this).css({
            "left":"182px",
            "top":"12px"
        });
    });
    $("#btnClose").mouseup(function(){    
        $(this).css({
            "left":"180px",
            "top":"10px"
        });
    });

    $("#btnC").click(function(){
        var openflag=$(this).attr("open1");
        if(openflag=="no"){
            $("#slideC").animate({"left":"0px"},500,function(){
            $("#btnC").css("background-image",'url("css/images/6.jpg")');
            $("#btnC").attr("open1","yes");
        });
        }else{
            $("#slideC").animate({"left":"-268px"},500,function(){
            $("#btnC").css("background-image",'url("css/images/5.jpg")');
            $("#btnC").attr("open1","no");
            });
        }
    })

    
    $(".tooltip").hover(function(){
        var txt=$(this).attr("tooltxt");
        $(this).append('<div class="tip">'+txt+"</div>");

    },function(){
       $(this).find(".tip").remove();
    });



    $("#btnQ").mousedown(function(){    
        $("#btnQ").css("left","192px");
    });
    $("#btnQ").mouseup(function(){    
        $("#btnQ").css("left","190px");
    });

    $("#btnQ").hover(function(){
        $(this).css("background-image",'url("css/images/1.png")');
    },function(){
        $(this).css("background-image",'url("css/images/2.png")');
    });

	$(".flashcontrol").mouseover(function(){
		//$(".flashcontrol").css("background-color","#b9b9b9");

		//$(this).css("background-color","#000");
       // $(".flashcontrol").mouseover(function(){
        //	$(".flashcontrol").css({
        	//	"background-color":"#b9b9b9",
        	//	"color":"#fff"
        	//});
	        $(".flashcontrol").removeClass("flashcontrolover");
        	$(this).addClass("flashcontrolover");
        //	})
      //  })


	});

}

function initPosition(){
    $.each($(".tbmenu"),function(i){
      $(this).css("left",i*130+"px");
    });

}