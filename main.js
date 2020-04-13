$(document).ready(function(){
  console.log('hello');
  $("a").draggable();
  height = $("#mainImg").width();
  $("#asLink").css("top", height/4.3);
  $("#asLink").css("left", height/2.67);
});
