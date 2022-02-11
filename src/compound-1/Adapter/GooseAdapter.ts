import { IQuackBehavior } from '../Behaviors/IQuackBehavior';
import { Goose } from '../Context/Goose';
import { IObserver } from '../Observer/IObserver';

export class GooseAdapter implements IQuackBehavior {
	observer: IObserver | undefined;

	constructor(private goose: Goose) {}

	subscribe(observer: IObserver): void {
		if (this.observer == undefined) this.observer = observer;
	}

	unsubscribe(): void {
		if (this.observer != undefined) this.observer = undefined;
	}

	notify(): void {
		this.observer?.update('Goose');
	}

	quack(): void {
		this.goose.hook();
		this.notify();
	}
}
