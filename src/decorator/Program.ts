import { Expresso } from './Beverage/Expresso';
import { Milk } from './Condiment/Milk';
import { Mocha } from './Condiment/Mocha';

let expresso = new Expresso();
let condiment1 = new Milk(expresso);
let condiment2 = new Mocha(condiment1);

console.log(condiment2.getDescription(), condiment2.cost().toFixed(1) + '$');
