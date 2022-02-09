import { GumballMachine } from '../Context/GumballMachine';
import { IGumballState } from './IGumballState';

export class SoldState implements IGumballState {
	constructor(private gumballMachine: GumballMachine) {}

	insertQuater(): void {
		console.log("Please wait, we're already giving you a gumball");
	}

	ejectQuater(): void {
		console.log('Sorry, you already turned the crank');
	}

	turnCrank(): void {
		console.log("Turning twice doesn't get you another gumball!");
	}

	dispense(): void {
		if (this.gumballMachine.numberGumballs > 0) {
			this.gumballMachine.setState(this.gumballMachine.noQuaterState);
			this.gumballMachine.releaseBall();
			this.gumballMachine.numberGumballs--;
		} else {
			console.log('Oops, out of gumballs!');
			this.gumballMachine.setState(this.gumballMachine.hasQuaterState);
			this.gumballMachine.ejectQuater();
			this.gumballMachine.setState(this.gumballMachine.soldOutState);
		}
	}
}
