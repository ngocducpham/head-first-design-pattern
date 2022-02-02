import { Beverage } from '../Beverage/Beverage';

export class HouseBlend extends Beverage {
  description = 'HouseBlend';

  cost(): number {
    return 0.2;
  }
}
