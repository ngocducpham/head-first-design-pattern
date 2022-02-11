import { IQuackBehavior } from '../Behaviors/IQuackBehavior';
import { IObserver } from '../Observer/IObserver';

export class Flock implements IQuackBehavior {
	observer: IObserver | undefined;
	quackers: IQuackBehavior[] = [];

	subscribe(observer: IObserver): void {
		this.quackers.forEach((quacker) => {
			quacker.subscribe(observer);
		});
	}

	unsubscribe(): void {
		this.quackers.forEach((quacker) => {
			quacker.unsubscribe();
		});
	}

	notify(): void {}

	add(...quacker: IQuackBehavior[]) {
		this.quackers.push(...quacker);
	}

	quack(): void {
		this.quackers.forEach((quacker) => {
			quacker.quack();
		});
	}
}
