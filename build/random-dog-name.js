(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global['random-dog-name'] = factory());
}(this, (function () { 'use strict';

    var dognames = ['Ruffles', 'Snuffles', 'Snowey', 'Edgar Alan Poe', 'Abomination', 'RoboDog', 'Thanos', 'Rocket', 'Groot', 'Terminator', 'BatDog', 'Krypto', 'Tuffy', 'Rahul Gandhi', 'Husky', 'Hooch', 'Dipshit', 'Tommy', 'Anubis Cruger', 'Datadog'];

    var getRandomNumber = function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    };

    var getRandomItem = function getRandomItem(array) {
        return array[getRandomNumber(0, array.length)];
    };

    var index = (function () {
        return getRandomItem(dognames);
    });

    return index;

})));
