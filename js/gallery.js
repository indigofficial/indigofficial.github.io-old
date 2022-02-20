var angle = 0;
function galleryspin(sign) {
  spinner = document.querySelector("#spinner");
  if (!sign) {
    angle = angle - 45;
  } else {
    angle = angle + 45;
  }
  spinner.setAttribute(
    "style",
    "-webkit-transform: rotateY(" +
      angle +
      "deg); -moz-transform: rotateY(" +
      angle +
      "deg); transform: rotateY(" +
      angle +
      "deg);"
  );
}

console.log(
  "Hello there! I see you've decided to open up the console! Well, I hope you have an amazing, happy day! - Indigo <3"
);
