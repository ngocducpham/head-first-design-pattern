import { GumballMachine } from '../Context/GumballMachine';
import { IGumballState } from './IGumballState';

export class NoQuaterState implements IGumballState {
	constructor(private gumballMachine: GumballMachine) {}

	insertQuater(): void {
		console.log('You inserted a quarter');
		this.gumballMachine.setState(this.gumballMachine.hasQuaterState);
	}

	ejectQuater(): void {
		console.log("You haven't inserted a quarter");
	}

	turnCrank(): void {
		console.log("You turned, but there's no quarter");
	}

	dispense(): void {
		console.log('You need to pay first');
	}
}
