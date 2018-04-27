(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global['random-dog-name'] = factory());
}(this, (function () { 'use strict';

    var dognames = ['Ruffles', 'Snuffles', 'Snowey', 'Edgar', 'Abomination', 'RoboDog'];

    const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

    const getRandomItem = array => array[getRandomNumber(0, array.length)];

    var index = (() => getRandomItem(dognames));

    return index;

})));
