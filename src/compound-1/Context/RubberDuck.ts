import { IQuackBehavior } from '../Behaviors/IQuackBehavior';
import { IObserver } from '../Observer/IObserver';

export class RubberDuck implements IQuackBehavior {
	observer: IObserver | undefined;

	subscribe(observer: IObserver): void {
		if (this.observer == undefined) this.observer = observer;
	}

	unsubscribe(): void {
		if (this.observer != undefined) this.observer = undefined;
	}

	notify(): void {
		this.observer?.update('Rubber Duck');
	}
	quack(): void {
		console.log('Squeak');
		this.notify();
	}
}
