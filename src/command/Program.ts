/*
import { LightOnCommand } from './Command/LightOnCommand';
import { SimpleRemoteControl } from './Invoker/SimpleRemoteControl';
import { Light } from './Receiver/Light';

let light = new Light();
let lightOn = new LightOnCommand(light);
let remote = new SimpleRemoteControl();

remote.setCommand(lightOn);
remote.buttonWasPressed();
*/

import { GarageDoorOpenCommand } from './Command/GarageDoorOpenCommand';
import { LightOnCommand } from './Command/LightOnCommand';
import { MacroCommand } from './Command/MacroCommand';
import { RemoteControl } from './Invoker/RemoteControl';
import { GarageDoor } from './Receiver/GarageDoor';
import { Light } from './Receiver/Light';

let light = new Light();
let lightOn = new LightOnCommand(light);
let garageDoor = new GarageDoor();
let garageDoorOpen = new GarageDoorOpenCommand(garageDoor);
let remote = new RemoteControl();

remote.setCommand(lightOn, 1);
remote.setCommand(garageDoorOpen, 2);

remote.onButtonPushed(1);
remote.onButtonPushed(2);
remote.onButtonPushed(2);
remote.onButtonPushed(2);
remote.onButtonPushed(1);
remote.onButtonPushed(10);
remote.undoButtonPushed();
remote.undoButtonPushed();
remote.undoButtonPushed();
remote.undoButtonPushed();
remote.undoButtonPushed();
remote.undoButtonPushed();
remote.undoButtonPushed();
remote.undoButtonPushed();
remote.undoButtonPushed();

console.log('\n\n ---Macro Command---');

let macro = new MacroCommand([lightOn, lightOn, garageDoorOpen, lightOn, garageDoorOpen]);

remote.setCommand(macro, 3);
remote.onButtonPushed(3);
remote.undoButtonPushed();
