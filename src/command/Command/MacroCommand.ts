import { ICommand } from './ICommand';

export class MacroCommand implements ICommand {
	constructor(private commands: ICommand[]) {}
	execute(): void {
		this.commands.forEach((command) => {
			command.execute();
		});
	}
	undo(): void {
		this.commands.forEach((command) => {
			command.undo();
		});
	}
}
