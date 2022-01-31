import { RubberDuck } from './Duck/RubberDuck';
import { FlyWithRocket } from './FlyBehavior/FlyWithRocket';
import { FlyWithWing } from './FlyBehavior/FlyWithWing';
import { Quack } from './QuackBehavior/Quack';

let flyWithWing = new FlyWithWing();
let quack = new Quack();
let rubberDuck = new RubberDuck(flyWithWing, quack);

rubberDuck.performFly();
rubberDuck.performQuack();

let flyWithRocket = new FlyWithRocket();
rubberDuck.changeFlyBehavior(flyWithRocket);

rubberDuck.performFly();
