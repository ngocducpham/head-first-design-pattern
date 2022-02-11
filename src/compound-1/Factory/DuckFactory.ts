import { IQuackBehavior } from '../Behaviors/IQuackBehavior';
import { DuckCall } from '../Context/DuckCall';
import { MallardDuck } from '../Context/MallardDuck';
import { ReadHeadDuck } from '../Context/ReadHeadDuck';
import { RubberDuck } from '../Context/RubberDuck';
import { IDuckFactory } from './IDuckFactory';

export class DuckFactory implements IDuckFactory {
	createMallardDuck(): IQuackBehavior {
		return new MallardDuck();
	}
	createRedHeadDuck(): IQuackBehavior {
		return new ReadHeadDuck();
	}
	createDuckCall(): IQuackBehavior {
		return new DuckCall();
	}
	createRubberDuck(): IQuackBehavior {
		return new RubberDuck();
	}
}
