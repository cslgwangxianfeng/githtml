$(function(){
    checktext();
    initEleEvents();

});


function initEleEvents(){

	$(".headerNavStyle").hover(function(){
		$(this).css("color","#626262")
	},function(){
		$(this).css("color","#959595")
	});

    $(".loginFormcheckicon").click(function(){
        $(this).css("background-position","-40px -180px")
    });

    $(".lbNormal").mouseover(function(){

    	$("#loginBlock1").hide();
    	$("#loginBlock").show();
    });
    $(".lbMob").mouseover(function(){
    	$("#loginBlock").hide();
    	$("#loginBlock1").show();
    });


    $(".Confmenu").mouseover(function(){
        $(this).find("dd").show();
    });

    $(".Confmenu").mouseout(function(){
        $(this).find("dd").hide();
    });

     $("#idInput").keyup(function(e){

        var val=$("#idInput").val();
        if (e.keyCode==8&&val=="") {

           $("#idInput").css("background-image",'url("css/images/10.jpg")');
        }
        else{$("#idInput").css("background-image","none");};
        
    });
     $("#idInput1").keyup(function(f){

        var val1=$("#idInput1").val();
        if (f.keyCode==8&&val1=="") {

           $("#idInput1").css("background-image",'url("css/images/7.jpg")');
        }
        else{$("#idInput1").css("background-image","none");};
        
    });

     $("#pwdInput").keyup(function(g){

        var val2=$("#pwdInput").val();
        if (g.keyCode==8&&val2=="") {

           $("#pwdInput").css("background-image",'url("css/images/9.jpg")');
        }
        else{$("#pwdInput").css("background-image","none");};
        
    });
     $("#pwdInput1").keyup(function(h){

        var val3=$("#pwdInput1").val();
        if (h.keyCode==8&&val3=="") {

           $("#pwdInput1").css("background-image",'url("css/images/9.jpg")');
        }
        else{$("#pwdInput1").css("background-image","none");};
        
    });

        var i=3;
      $("#prevtheme").click(function(){
         if (i>1) {
            $("#mainBg").removeClass("mainBgstyle" + i);
            $("#mainCnt").removeClass("mainCntstyle" + i);
            i--;
            
            $("#mainBg").addClass("mainBgstyle" + i);
            $("#mainCnt").addClass("mainCntstyle" + i);

         };
      });
        $("#nexttheme").click(function(){
      if (i<6) {
            $("#mainBg").removeClass("mainBgstyle" + i);
            $("#mainCnt").removeClass("mainCntstyle" + i);
            i++;
            
            $("#mainBg").addClass("mainBgstyle" + i);
            $("#mainCnt").addClass("mainCntstyle" + i);

         };
      });


};

function checktext(){
    var val=$("#idInput").val();

        if(val==""){
            $("#idInput").css("background-image",'url("css/images/10.jpg")');
        }
            else{
            $("#idInput").css("background-image","none");
            }
    var val1=$("#idInput1").val();

        if(val1==""){
            $("#idInput1").css("background-image",'url("css/images/7.jpg")');
        }
            else{
            $("#idInput1").css("background-image","none");
            }
    var val2=$("#pwdInput").val();

        if(val2==""){
            $("#pwdInput").css("background-image",'url("css/images/9.jpg")');
        }
            else{
            $("#pwdInput").css("background-image","none");
            }
    var val3=$("#pwdInput1").val();

        if(val3==""){
            $("#pwdInput1").css("background-image",'url("css/images/9.jpg")');
        }
            else{
            $("#pwdInput1").css("background-image","none");
            }



}