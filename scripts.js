//user-interface
$(document).ready(function(){
  $("form").submit(function(event){
      event.preventDefault();
    $(".container").hide();
    $(".answers").show();
    var firstname=$("input#firstname").val();
    var lastname=$("input#lastname").val();
    var color=$("input#color").val();
    var hobby=$("input#hobby").val();
    $(".fullnames").text(firstname + " " + lastname);
    $(".rangi").text(color);
    $(".kitu").text(hobby);
  });
});
