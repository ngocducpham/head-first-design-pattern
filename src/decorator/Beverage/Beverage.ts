export abstract class Beverage {
  protected description: string = 'Unknow';

  getDescription(): string {
    return this.description;
  }

  abstract cost(): number;
}
