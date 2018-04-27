(function () {
    'use strict';

    var dognames = ['Ruffles', 'Snuffles', 'Snowey', 'Edgar', 'Abomination', 'RoboDog'];

    const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

    const getRandomItem = array => array[getRandomNumber(0, array.length)];

    var getRandomDogname = (() => getRandomItem(dognames));

    const $heading = document.createElement('h2');
    $heading.style.textAlign = 'center';

    const $btn = document.createElement('button');
    $btn.textContent = 'That name sucks';

    document.body.appendChild($btn);
    document.body.appendChild($heading);

    const renderDogname = () => $heading.textContent = `My dog is called: ${getRandomDogname()}`;

    $btn.addEventListener('click', renderDogname);
    renderDogname();

}());
