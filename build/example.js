(function () {
    'use strict';

    var dognames = ['Ruffles', 'Snuffles', 'Snowey', 'Edgar Alan Poe', 'Abomination', 'RoboDog', 'Thanos', 'Rocket', 'Groot', 'Terminator', 'BatDog', 'Krypto', 'Tuffy', 'Rahul Gandhi', 'Husky', 'Hooch', 'Dipshit', 'Tommy', 'Anubis Cruger', 'Datadog'];

    var getRandomNumber = function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    };

    var getRandomItem = function getRandomItem(array) {
        return array[getRandomNumber(0, array.length)];
    };

    var getRandomDogname = (function () {
        return getRandomItem(dognames);
    });

    var setCss = function setCss($el, style) {
        return Object.keys(style).forEach(function (key) {
            return $el.style[key] = style[key];
        });
    };
    var setText = function setText($el, text) {
        return $el.textContent = text;
    };

    var renderDogname = function renderDogname($el) {
        return function () {
            return setText($el, 'My dog is called: ' + getRandomDogname());
        };
    };

    setCss(document.body, {
        textAlign: 'center',
        fontFamily: 'sans-serif'
    });

    // Heading
    var $heading = document.createElement('h2');
    setCss($heading, {});

    // Button
    var $btn = document.createElement('button');
    setText($btn, 'That name sucks!!');
    setCss($btn, {
        textAlign: 'center',
        outline: 'none',
        border: '1px solid #eee',
        padding: '.5em 1em',
        fontSize: '1.1em',
        backgroundColor: '#5180e9',
        color: '#fff',
        cursor: 'pointer'
    });

    $btn.addEventListener('click', renderDogname($heading));
    renderDogname($heading)();

    // Append
    document.body.appendChild($btn);
    document.body.appendChild($heading);

}());
