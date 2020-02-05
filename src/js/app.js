import '../sass/main.scss';
import '../css/functions.css';
import '../static/kisuke-background.jpg';
import svgRuta from '../static/trevol.svg'

//Alertas
import { alertaSuccess } from './modules/alerts';
import { suma } from './functions/suma';

suma(2,2);

const svg = new Image()
svg.src = svgRuta;

document.getElementById('svg').appendChild(svg);


document.querySelector('.element').innerHTML = '<h1>New Html with js</h1>';