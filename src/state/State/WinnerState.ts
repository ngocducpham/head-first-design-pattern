import { GumballMachine } from '../Context/GumballMachine';
import { IGumballState } from './IGumballState';

export class WinnerState implements IGumballState {
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
		if (this.gumballMachine.numberGumballs > 1) {
			console.log("YOU'RE A WINNER! You get two gumballs for your quarter");
			this.gumballMachine.releaseBall();
			this.gumballMachine.numberGumballs -= 2;
			this.gumballMachine.setState(this.gumballMachine.noQuaterState);
		} else {
			this.gumballMachine.setState(this.gumballMachine.soldState);
			this.gumballMachine.soldState.dispense();
		}
	}
}
