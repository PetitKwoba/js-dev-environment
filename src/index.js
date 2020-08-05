import './index.css';
import numeral from 'numeral';

const coursevalue = numeral(1000).formart('$0,0.00');


//eslint-disable-next-line no-console
console.log(`I would pay ${coursevalue} for this awesome course!`);