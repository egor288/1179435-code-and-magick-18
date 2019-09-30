"use strict";

window.renderStatistics = function(ctx, names, times) {
  var heightOfGekstogram;
  var color;
  var i;
  var xOfBar = 150;
  var WINDOWWIGHT = 420;
  var WINDOWHIGHT = 270;
  var PAINTINGX = 100;
  var PAINTINGY = 10;
  var TEXTX = 150;
  var TEXTY = 20;
  var EMTSPACEWIGHT = 90;
  var GROUNDOFBAR = 250;
  var GEKSTOGRAMHEIGHT = 40;

  ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
  ctx.fillRect(PAINTINGX + 10, PAINTINGY + 10, WINDOWWIGHT, WINDOWHIGHT);
  ctx.fillStyle = "#fff";
  ctx.fillRect(PAINTINGX, PAINTINGY, WINDOWWIGHT, WINDOWHIGHT);
  ctx.fillStyle = "#000";
  ctx.font = " 16px PT Mono";
  ctx.textBaseline = "hanging";
  ctx.fillText("Ура вы победили!", TEXTX, TEXTY);
  ctx.fillText("Список результатов:", TEXTX, TEXTY + 20);
  var maxTime = Math.max.apply(null, times);

  for (i = 0; i < times.length; i++) {
    var heightOfGekstogram = Math.round((times[i] * 150) / maxTime);
    var saturation = Math.round(Math.random() * 100) + "%";

    if (names[i] === "Вы") {
      color = "rgba(255, 0, 0, 1)";
    } else {
      color = "hsl(230," + saturation + ", 50%)";
    }

    ctx.fillStyle = color;
    ctx.fillRect(
      xOfBar,
      GROUNDOFBAR - heightOfGekstogram,
      GEKSTOGRAMHEIGHT,
      heightOfGekstogram
    );
    xOfBar = xOfBar + EMTSPACEWIGHT;
    ctx.fillStyle = "#000";
    ctx.textBaseline = "alphabetic";
    ctx.fillText(
      Math.round(times[i]),
      xOfBar - EMTSPACEWIGHT,
      GROUNDOFBAR - heightOfGekstogram - 10
    );
    ctx.textBaseline = "hanging";
    ctx.fillText(names[i], xOfBar - EMTSPACEWIGHT, GROUNDOFBAR + 10);
  }
};
