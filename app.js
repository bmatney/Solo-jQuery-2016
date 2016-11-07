// Global Variables

var i = 0;

$(document).ready(function () {
  console.log("It's working!");
  $(".color-button").on("click", function(){
    var value;
    switch ($(".color-button").index(this)) {
      case 0:
        value = (".color-button").data("red");
        break;
      case 1:

          break;
      default:

    }
  });

});
