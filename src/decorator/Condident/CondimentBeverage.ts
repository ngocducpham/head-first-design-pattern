import { Beverage } from '../Beverage/Beverage';

export abstract class CondimentBeverage extends Beverage {
  abstract getDescription(): string;
}
