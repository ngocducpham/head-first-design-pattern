import { IQuackBehavior } from '../Behaviors/IQuackBehavior';

export interface IDuckFactory {
	createMallardDuck(): IQuackBehavior;
	createRedHeadDuck(): IQuackBehavior;
	createDuckCall(): IQuackBehavior;
	createRubberDuck(): IQuackBehavior;
}
