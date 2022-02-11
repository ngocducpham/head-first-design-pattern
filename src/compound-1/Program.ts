import { IQuackBehavior } from './Behaviors/IQuackBehavior';
import { DuckCall } from './Context/DuckCall';
import { Goose } from './Context/Goose';
import { GooseAdapter } from './Adapter/GooseAdapter';
import { IDuckFactory } from './Factory/IDuckFactory';
import { CoutingDuckFactory } from './Factory/CoutingDuckFactory';
import { QuackCouter } from './Decorator/QuackCouter';
import { Flock } from './Context/Flock';
import { QuackLogist } from './Observer/QuackLogist';

let duckFactory: IDuckFactory = new CoutingDuckFactory();

let mallarDuck = duckFactory.createMallardDuck();
let redHeadDuck = duckFactory.createRedHeadDuck();
let duckCall = duckFactory.createDuckCall();
let rubberDuck = duckFactory.createRubberDuck();
let goose = new GooseAdapter(new Goose());

let flockOfDuck = new Flock();
flockOfDuck.add(mallarDuck, redHeadDuck, duckCall, rubberDuck, goose);

let flock = new Flock();
flock.add(
	new GooseAdapter(new Goose()),
	new GooseAdapter(new Goose()),
	new GooseAdapter(new Goose()),
	flockOfDuck
);

simulate(flockOfDuck);
console.log('Flock of Goose and Duck');
let quackLogist = new QuackLogist();
flock.subscribe(quackLogist);
simulate(flock);

// simulate(mallarDuck);
// simulate(redHeadDuck);
// simulate(duckCall);
// simulate(rubberDuck);
// simulate(goose);

console.log('The Duck quacked:', QuackCouter.totalQuack, 'times');

function simulate(duck: IQuackBehavior) {
	duck.quack();
}
