import { IObserver } from './IObserver';

export interface IQuackObservable {
	subscribe(observer: IObserver): void;
	unsubscribe(): void;
	notify(): void;
}
