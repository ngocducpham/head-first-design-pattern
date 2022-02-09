import { GumballMachine } from '../Context/GumballMachine';
import { IGumballState } from './IGumballState';

export class HasQuaterState implements IGumballState {
	constructor(private gumballMachine: GumballMachine) {}

	insertQuater(): void {
		console.log("You can't insert another quarter");
	}

	ejectQuater(): void {
		console.log('Quarter returned');
		this.gumballMachine.setState(this.gumballMachine.noQuaterState);
	}

	turnCrank(): void {
		console.log('You turned...');
		if (this.random() != 1) this.gumballMachine.setState(this.gumballMachine.soldState);
		else this.gumballMachine.setState(this.gumballMachine.winnerState);
	}

	dispense(): void {
		console.log('No gumball dispensed');
	}

	private random(min = 1, max = 10): number {
		return Math.round(min - 0.5 + Math.random() * (max - min + 1));
	}
}
