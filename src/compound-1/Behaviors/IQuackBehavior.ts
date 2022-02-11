import { IQuackObservable } from '../Observer/IQuackObservable';

export interface IQuackBehavior extends IQuackObservable {
	quack(): void;
}
