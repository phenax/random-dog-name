(function () {
    'use strict';

    var dognames = ['Ruffles', 'Snuffles', 'Snowey', 'Edgar Alan Poe', 'Abomination', 'RoboDog', 'Thanos', 'Rocket', 'Groot', 'Terminator', 'BatDog', 'Krypto', 'Tuffy', 'Rahul Gandhi', 'Husky', 'Hooch', 'Dipshit', 'Tommy', 'Anubis Cruger'];

    var getRandomNumber = function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    };

    var getRandomItem = function getRandomItem(array) {
        return array[getRandomNumber(0, array.length)];
    };

    var getRandomDogname = (function () {
        return getRandomItem(dognames);
    });

    var $heading = document.createElement('h2');
    $heading.style.textAlign = 'center';

    var $btn = document.createElement('button');
    $btn.textContent = 'That name sucks';

    document.body.appendChild($btn);
    document.body.appendChild($heading);

    var renderDogname = function renderDogname() {
        return $heading.textContent = 'My dog is called: ' + getRandomDogname();
    };

    $btn.addEventListener('click', renderDogname);
    renderDogname();

}());
