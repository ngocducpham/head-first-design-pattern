import { Light } from '../Receiver/Light';
import { ICommand } from './ICommand';

export class LightOnCommand implements ICommand {
	constructor(private light: Light) {}
	undo(): void {
		this.light.off();
	}

	execute(): void {
		this.light.on();
	}
}
