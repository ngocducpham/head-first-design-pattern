import { LightOnCommand } from './Command/LightOnCommand';
import { SimpleRemoteControl } from './Invoker/SimpleRemoteControl';
import { Light } from './Receiver/Light';

let light = new Light();
let lightOn = new LightOnCommand(light);
let remote = new SimpleRemoteControl();

remote.setCommand(lightOn);
remote.buttonWasPressed();
