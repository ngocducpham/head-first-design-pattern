import { IFlyBehavior } from './IFlyBehavior';

export class FlyWithWing implements IFlyBehavior {
  fly(): void {
    console.log('Fly with wing');
  }
}
