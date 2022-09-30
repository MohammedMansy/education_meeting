
 $(window).ready(function(){
  $("#renderPage").fadeOut(500,function(){
    $("body").css("overflow","auto");
  });
 });
 
 
 let myServiceTop = $("#myNav").offset().top;
    $(window).scroll(function(){
        if($(window).scrollTop() > 100 )
        {
            $("#myNav").css({
                backgroundColor : "#a12c2f"
            })
        } else{
            $("#myNav").css({
                backgroundColor : "rgba(250,250,250,0.15)"
            })
        }
    })


$("#myNav a").on("click",function(){
   $(this).css("color","#f5a425");
})
    


$("a[href^='#']").click(function(){
   let linkattrb = $(this).attr("href");
   let secction = $(linkattrb).offset().top;
   $("html , body").animate({scrollTop:secction},1500);
})


$(window).scroll(function(){
  let myscrolling = $(window).scrollTop();
  if(myscrolling > 400 ){
    $("#goUp").fadeIn(500);
  }else{
    $("#goUp").fadeOut(500);
  }
})

$("#goUp").on("click",function(){
  $("html , body").animate({scrollTop:"0"},1500);
})

/* Page Meeting */

$(function(){
 // $(window).scroll(function(){
    let mywindow = $(window).innerHeight();
    $("#header-metting").innerHeight(mywindow - 200 );
 // })
  
});




