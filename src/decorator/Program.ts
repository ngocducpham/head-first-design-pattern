import { Expresso } from './Beverage/Expresso';
import { Milk } from './Condident/Milk';
import { Mocha } from './Condident/Mocha';

let expresso = new Expresso();
let milk = new Milk(expresso);
let mocha = new Mocha(milk);

console.log(mocha.getDescription(), mocha.cost().toFixed() + '$');
