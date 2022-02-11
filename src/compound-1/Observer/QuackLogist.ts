import { IObserver } from './IObserver';
import { IQuackObservable } from './IQuackObservable';

export class QuackLogist implements IObserver {
	observable: IQuackObservable | undefined;

	update(meesage: string): void {
		console.log(meesage, 'just quacked');
	}

	subscribe(observable: IQuackObservable): void {
		observable.subscribe(this);
	}

	unsubscribe(): void {
		this.observable?.unsubscribe();
	}
}
