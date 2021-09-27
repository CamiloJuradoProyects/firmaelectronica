$(document).ready(function(){
  $(".hide").hide();
  
  $(".marker-Integridad").click(function(){
      $(".hide").hide();
    $(".Integridad-txt").fadeIn(300);
   $("iframe").each(function() {
     var src= $(this).attr('src');
        $(this).attr('src',src);
    
     });
     });        
    $(".marker-Autenticidad").click(function(){
        $(".hide").hide();
    $(".Autenticidad-txt").fadeIn(300);
      $("iframe").each(function() {
     var src= $(this).attr('src');
        $(this).attr('src',src);
    
     });
  });
  
    $(".marker-NoRepudio").click(function(){
        $(".hide").hide();
    $(".NoRepudio-txt").fadeIn(300);
      $("iframe").each(function() {
     var src= $(this).attr('src');
        $(this).attr('src',src);
    
     });
  });
  
    $(".marker-Disponibilidad").click(function(){
        $(".hide").hide();
    $(".Disponibilidad-txt").fadeIn(300);
      $("iframe").each(function() {
     var src= $(this).attr('src');
        $(this).attr('src',src);
    
     });
  });
});