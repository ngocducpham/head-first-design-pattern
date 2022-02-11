import { IQuackBehavior } from '../Behaviors/IQuackBehavior';
import { IObserver } from '../Observer/IObserver';

let cout = 0;

export class QuackCouter implements IQuackBehavior {
	private static couter: number = 0;

	constructor(private duck: IQuackBehavior) {}

	subscribe(observer: IObserver): void {
		this.duck.subscribe(observer);
	}

	unsubscribe(): void {
		this.duck.unsubscribe();
	}

	notify(): void {
		this.duck.notify();
	}

	quack(): void {
		this.duck.quack();
		QuackCouter.couter++;
	}

	static get totalQuack() {
		return this.couter;
	}
}
