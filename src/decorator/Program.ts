import { Expresso } from './Beverage/Expresso';
import { Milk } from './Condident/Milk';
import { Mocha } from './Condident/Mocha';

let expresso = new Expresso();
let condiment1 = new Milk(expresso);
let condiment2 = new Mocha(condiment1);

console.log(condiment2.getDescription(), mocha.cost().toFixed(1) + '$');
