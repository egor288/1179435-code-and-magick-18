'use strict';

window.renderStatistics = function (ctx, names, times) {
  var X_OF_BAR = 150;
  var WINDOW_WIGHT = 420;
  var WINDOWHIGHT = 270;
  var PAINTINGX = 100;
  var PAINTINGY = 10;
  var TEXTX = 150;
  var TEXTY = 20;
  var EMT_SPACE_WIDTH = 90;
  var GROUND_OF_BAR = 250;
  var GEKSTOGRAM_HEIGHT = 40;
  var heightOfGekstogram;
  var colorOfWizard;
  var i;

  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(PAINTINGX + 10, PAINTINGY + 10, WINDOW_WIGHT, WINDOWHIGHT);
  ctx.fillStyle = '#fff';
  ctx.fillRect(PAINTINGX, PAINTINGY, WINDOW_WIGHT, WINDOWHIGHT);
  ctx.fillStyle = '#000';
  ctx.font = ' 16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', TEXTX, TEXTY);
  ctx.fillText('Список результатов:', TEXTX, TEXTY + 20);
  var maxTime = Math.max.apply(null, times);

  for (i = 0; i < times.length; i++) {
    heightOfGekstogram = Math.round((times[i] * 150) / maxTime);
    var saturation = Math.round(Math.random() * 100) + '%';

    if (names[i] === 'Вы') {
      colorOfWizard = 'rgba(255, 0, 0, 1)';
    } else {
      colorOfWizard = 'hsl(230,' + saturation + ', 50%)';
    }

    ctx.fillStyle = colorOfWizard;
    ctx.fillRect(
        X_OF_BAR,
        GROUND_OF_BAR - heightOfGekstogram,
        GEKSTOGRAM_HEIGHT,
        heightOfGekstogram
    );
    X_OF_BAR = X_OF_BAR + EMT_SPACE_WIDTH;
    ctx.fillStyle = '#000';
    ctx.textBaseline = 'alphabetic';
    ctx.fillText(
        Math.round(times[i]),
        X_OF_BAR - EMT_SPACE_WIDTH,
        GROUND_OF_BAR - heightOfGekstogram - 10
    );
    ctx.textBaseline = 'hanging';
    ctx.fillText(names[i], X_OF_BAR - EMT_SPACE_WIDTH, GROUND_OF_BAR + 10);
  }
};
