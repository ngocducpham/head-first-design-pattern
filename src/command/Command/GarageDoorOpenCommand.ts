import { GarageDoor } from '../Receiver/GarageDoor';
import { ICommand } from './ICommand';

export class GarageDoorOpenCommand implements ICommand {
	constructor(private garageDoor: GarageDoor) {}
	undo(): void {
		this.garageDoor.close();
	}

	execute(): void {
		this.garageDoor.open();
	}
}
