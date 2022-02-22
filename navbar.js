$(document).ready(function(){
    /* function called when you click of the button */
    $(".side-menu").click(function(){
        
        /* this if else to change the text in the button */
        if($(".side-menu").text() == "☰"){
         $(".side-menu").text("🞬");
        }else{
          $(".side-menu").text("☰");
        }
      
      /* this function toggle the visibility of our "li" elements */
      $("nav > a").toggle("fast");
    });
  });