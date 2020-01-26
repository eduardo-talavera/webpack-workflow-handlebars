import './styles/main.scss';
import './static/kisuke-background.jpg';
import svgRuta from './static/trevol.svg'

const svg = new Image()
svg.src = svgRuta;

document.getElementById('svg').appendChild(svg);


document.querySelector('.element').innerHTML = '<h1>New Html with js</h1>';