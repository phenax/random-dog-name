
import getRandomDogname from '../src';

const $heading = document.createElement('h2');
$heading.style.textAlign = 'center';

const $btn = document.createElement('button');
$btn.textContent = 'That name sucks';

document.body.appendChild($btn);
document.body.appendChild($heading);

const renderDogname = () =>
    $heading.textContent = `My dog is called: ${getRandomDogname()}`;

$btn.addEventListener('click', renderDogname);
renderDogname();
