"use strict";

window.renderStatistics = function(ctx, names, times) {
  var height;
  var color;
  var i;
  var x = 150;

  ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
  ctx.fillRect(110, 20, 420, 270);
  ctx.fillStyle = "#fff";
  ctx.fillRect(100, 10, 420, 270);
  ctx.fillStyle = "#000";
  ctx.font = " 16px PT Mono";
  ctx.textBaseline = "hanging";
  ctx.fillText("Ура вы победили!", 150, 20);
  ctx.fillText("Список результатов:", 150, 40);
  var maxTime = Math.max.apply(null, times);

  for (i = 0; i < times.length; i++) {
    var height = Math.round((times[i] * 150) / maxTime);
    var saturation = Math.round(Math.random() * 100) + "%";

    if (names[i] === "Вы") {
      color = "rgba(255, 0, 0, 1)";
    } else {
      color = "hsl(230," + saturation + ", 50%)";
    }

    ctx.fillStyle = color;
    ctx.fillRect(x, 250 - height, 40, height);
    x = x + 90;
    ctx.fillStyle = "#000";
    ctx.textBaseline = "alphabetic";
    ctx.fillText(Math.round(times[i]), x - 90, 250 - height - 10);
    ctx.textBaseline = "hanging";
    ctx.fillText(names[i], x - 90, 260);
    console.log(color);
  }
};
