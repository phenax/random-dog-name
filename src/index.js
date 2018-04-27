
import dognames from './dognames';

const getRandomNumber = (min, max) =>
    Math.floor(Math.random() * (max - min)) + min;

const getRandomItem = array =>
    array[getRandomNumber(0, array.length)];

export default () => getRandomItem(dognames);
