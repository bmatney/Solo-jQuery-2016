// Global Variables

var numRed = 0;
var numYellow = 0;
var numGreen = 0;
var numBlue = 0;
var color;

$(document).ready(function () {
  $(".color-button").on("click", function () {
    color = $(this).data("color");
    colorFunction();
  });

});

function colorFunction() {
  switch (color) {
    case "red":
      numRed++;
      $("#red").text("Total red: " + numRed);
      makeBox();
      break;
    case "yellow":
      numYellow++;
      $("#yellow").text("Total yellow: " + numYellow);
      makeBox();
      break;
    case "green":
      numGreen++;
      $("#green").text("Total green: " + numGreen);
      makeBox();
      break;
    case "blue":
      numBlue++;
      $("#blue").text("Total blue: " + numBlue);
      makeBox();
      break;
  }
}

function makeBox() {
  $(".container").append('<div class="color-cube"></div>');
  var $el = $(".container").children().last();

  $el.append("<div class='color-cube  " + color + "'> </div>");
  $el.css("display", "inline-block");
}
