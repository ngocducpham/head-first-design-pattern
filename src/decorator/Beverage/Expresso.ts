import { Beverage } from '../Beverage/Beverage';

export class Expresso extends Beverage {
  description = 'Expresso';
  cost(): number {
    return 0.1;
  }
}
