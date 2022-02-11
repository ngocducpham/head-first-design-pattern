import { IQuackObservable } from './IQuackObservable';

export interface IObserver {
	update(meesage: string): void;
	subscribe(observable: IQuackObservable): void;
	unsubscribe(): void;
}
