import { ICommand } from '../Command/ICommand';

export class SimpleRemoteControl {
	private slot: ICommand | undefined;

	setCommand(command: ICommand) {
		this.slot = command;
	}

	buttonWasPressed() {
		this.slot?.execute();
	}
}
