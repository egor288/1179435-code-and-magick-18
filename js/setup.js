
'use strict';

function getRandomInRange(max) {
  return Math.floor(Math.random() * (max + 1));
}

function getPlayer() {
  var player = {};


  player['name'] =
    names[getRandomInRange(names.length - 1)] +
    ' ' +
    sernames[getRandomInRange(sernames.length - 1)];

  player['coatColor'] = colors[getRandomInRange(colors.length - 1)];

  player['eyesColor'] = eyes[getRandomInRange(eyes.length - 1)];


  return player;
}


var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document
  .querySelector('#similar-wizard-template')
  .content.querySelector('.setup-similar-item');

var names = [
  'Иван',
  'Хуан Себастья',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];

var sernames = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];

var colors = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var eyes = ['black', 'red', 'blue', 'yellow', 'green'];



var wizardsArray = [];

for (var i = 0; i < 4; i++) {
  wizardsArray.push(getPlayer());
}

function renderWizard(wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
}

var fragment = document.createDocumentFragment();
for (i = 0; i < wizardsArray.length; i++) {

  fragment.appendChild(renderWizard(wizardsArray[i]));
}
similarListElement.appendChild(fragment);


userDialog.querySelector('.setup-similar').classList.remove('hidden');

