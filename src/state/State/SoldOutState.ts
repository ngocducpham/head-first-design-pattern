import { GumballMachine } from '../Context/GumballMachine';
import { IGumballState } from './IGumballState';

export class SoldOutState implements IGumballState {
	constructor(private gumballMachine: GumballMachine) {}

	insertQuater(): void {
		console.log("You can't insert a quarter, the machine is sold out");
	}

	ejectQuater(): void {
		console.log("You can't eject, you haven't inserted a quarter yet");
	}

	turnCrank(): void {
		console.log('You turned, but there are no gumballs');
	}

	dispense(): void {
		console.log('No gumball dispensed');
	}
}
