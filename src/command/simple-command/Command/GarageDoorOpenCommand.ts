import { GarageDoor } from '../Receiver/GarageDoor';
import { ICommand } from './ICommand';

export class GarageDoorOpenCommand implements ICommand {
	constructor(private garageDoor: GarageDoor) {}

	execute(): void {
		this.garageDoor.open();
	}
}
