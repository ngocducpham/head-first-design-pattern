import { Light } from '../Receiver/Light';
import { ICommand } from './ICommand';

export class LightOnCommand implements ICommand {
	constructor(private light: Light) {}

	execute(): void {
		this.light.on();
	}
}
