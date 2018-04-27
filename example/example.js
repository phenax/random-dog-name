
import getRandomDogname from '../src';


const setCss = ($el, style) =>
    Object.keys(style)
        .forEach(key => $el.style[key] = style[key]);;

const setText = ($el, text) =>
    $el.textContent = text;

const renderDogname = $el => () =>
    setText($el, `My dog is called: ${getRandomDogname()}`);


setCss(document.body, {
    textAlign: 'center',
    fontFamily: 'sans-serif',
});

// Heading
const $heading = document.createElement('h2');
setCss($heading, {});

// Button
const $btn = document.createElement('button');
setText($btn, 'That name sucks!!');
setCss($btn, {
    textAlign: 'center',
    outline: 'none',
    border: '1px solid #eee',
    padding: '.5em 1em',
    fontSize: '1.1em',
    backgroundColor: '#5180e9',
    color: '#fff',
    cursor: 'pointer',
});

$btn.addEventListener('click', renderDogname($heading));
renderDogname($heading)();


// Append
document.body.appendChild($btn);
document.body.appendChild($heading);
