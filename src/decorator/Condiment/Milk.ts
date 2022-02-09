import { Beverage } from '../Beverage/Beverage';
import { CondimentBeverage } from './CondimentBeverage';

export class Milk extends CondimentBeverage {
	beverage: Beverage;

	constructor(beverage: Beverage) {
		super();

		this.beverage = beverage;
	}

	getDescription(): string {
		return this.beverage.getDescription() + ', Milk';
	}
	cost(): number {
		return this.beverage.cost() + 0.1;
	}
}
