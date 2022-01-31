import { IFlyBehavior } from '../FlyBehavior/IFlyBehavior';
import { IQuackBehavior } from '../QuackBehavior/IQuackBehavior';

export abstract class Duck {
  protected quackBehavior: IQuackBehavior;
  protected flyBehavior: IFlyBehavior;

  constructor(flyBehavior: IFlyBehavior, quackBehavior: IQuackBehavior) {
    this.quackBehavior = quackBehavior;
    this.flyBehavior = flyBehavior;
  }

  swim() {
    console.log("I'm swming");
  }

  performQuack() {
    this.quackBehavior.quack();
  }

  performFly() {
    this.flyBehavior.fly();
  }

  changeFlyBehavior(flyBehavior: IFlyBehavior): void {
    this.flyBehavior = flyBehavior;
  }

  changeQuackBehavior(quackBehavior: IQuackBehavior) {
    this.quackBehavior = quackBehavior;
  }

  abstract display(): void;
}
