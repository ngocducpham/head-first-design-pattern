import { ICommand } from '../Command/ICommand';

export class RemoteControl {
	private slot: ICommand[];
	private undoSlot: ICommand[];

	constructor() {
		this.slot = new Array<ICommand>(8);
		this.undoSlot = [];
	}

	setCommand(command: ICommand, slot: number) {
		this.slot[slot] = this.slot[slot] ?? command;
	}

	onButtonPushed(slot: number) {
		let command = this.slot[slot];

		if (command) {
			command.execute();
			this.undoSlot.push(command);
		}
	}

	undoButtonPushed() {
		let command = this.slot.pop();

		command?.undo();
	}
}
