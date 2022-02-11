import { IQuackBehavior } from '../Behaviors/IQuackBehavior';
import { QuackCouter } from '../Decorator/QuackCouter';
import { DuckFactory } from './DuckFactory';
import { IDuckFactory } from './IDuckFactory';

export class CoutingDuckFactory implements IDuckFactory {
	private duckFactory: DuckFactory;

	constructor() {
		this.duckFactory = new DuckFactory();
	}

	createMallardDuck(): IQuackBehavior {
		return new QuackCouter(this.duckFactory.createMallardDuck());
	}
	createRedHeadDuck(): IQuackBehavior {
		return new QuackCouter(this.duckFactory.createRedHeadDuck());
	}
	createDuckCall(): IQuackBehavior {
		return new QuackCouter(this.duckFactory.createDuckCall());
	}
	createRubberDuck(): IQuackBehavior {
		return new QuackCouter(this.duckFactory.createRubberDuck());
	}
}
