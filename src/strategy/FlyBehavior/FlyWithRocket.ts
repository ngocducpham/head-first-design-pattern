import { IFlyBehavior } from './IFlyBehavior';

export class FlyWithRocket implements IFlyBehavior {
  fly(): void {
    console.log('Put rocket on the butt');
  }
}
