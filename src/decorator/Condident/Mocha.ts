import { Beverage } from '../Beverage/Beverage';
import { CondimentBeverage } from '../Condident/CondimentBeverage';

export class Mocha extends CondimentBeverage {
  beverage: Beverage;

  constructor(beverage: Beverage) {
    super();

    this.beverage = beverage;
  }

  getDescription(): string {
    return this.beverage.getDescription() + ', Mocha';
  }
  cost(): number {
    return this.beverage.cost() + 0.1;
  }
}
