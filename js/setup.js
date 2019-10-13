'use strict';

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');


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

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});


var playerCoatColors = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];
var playerEyesColor = [
  'red',
  'orange',
  'yellow',
  'green',
  'lightblue',
  'blue',
  'purple'
];
var playerFireballColor = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];

var getRandomElement = function (array) {
  var randomElementIndex = Math.floor(Math.random() * array.length);
  return array[randomElementIndex];
};
var wizardElement = document.querySelector('.setup-wizard');

var wizardCoatElement = wizardElement.querySelector('.wizard-coat');
wizardCoatElement.addEventListener('click', function () {
  var newColor = getRandomElement(playerCoatColors);
  this.style.fill = newColor;
});
var wizardEyesElement = wizardElement.querySelector('.wizard-eyes');
wizardEyesElement.addEventListener('click', function () {
  var newColor = getRandomElement(playerEyesColor);
  this.style.fill = newColor;
});

var wizardFireballElement = document.querySelector('.setup-fireball-wrap');
wizardFireballElement.addEventListener('click', function () {

  var newColor = getRandomElement(playerFireballColor);
  this.style.background = newColor;
});
console.log(wizardElement);

