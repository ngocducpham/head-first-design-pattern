import { HasQuaterState } from '../State/HasQuaterState';
import { IGumballState } from '../State/IGumballState';
import { NoQuaterState } from '../State/NoQuaterState';
import { SoldOutState } from '../State/SoldOutState';
import { SoldState } from '../State/SoldState';
import { WinnerState } from '../State/WinnerState';

export class GumballMachine {
	private _state: IGumballState;
	private _hasQuaterState: HasQuaterState;
	private _noQuaterState: NoQuaterState;
	private _soldState: SoldState;
	private _soldOutState: SoldOutState;
	private _winnerState: WinnerState;

	private _numberGumballs: number;

	constructor(numberGumballs: number) {
		this._hasQuaterState = new HasQuaterState(this);
		this._noQuaterState = new NoQuaterState(this);
		this._soldState = new SoldState(this);
		this._soldOutState = new SoldOutState(this);
		this._winnerState = new WinnerState(this);

		this._numberGumballs = numberGumballs;
		if (numberGumballs > 0) this._state = this._noQuaterState;
		else this._state = this.soldOutState;
	}

	setState(state: IGumballState) {
		this._state = state;
	}

	insertQuater() {
		this._state.insertQuater();
	}

	ejectQuater() {
		this._state.ejectQuater();
	}

	turnCrank() {
		this._state.turnCrank();
		this._state.dispense();
	}

	releaseBall() {
		console.log('A gumball comes rolling out the slot...');

		if (this.numberGumballs <= 0) {
			this.setState(this.soldOutState);
		}
	}

	get noQuaterState() {
		return this._noQuaterState;
	}

	get hasQuaterState() {
		return this._hasQuaterState;
	}

	get soldState() {
		return this._soldState;
	}

	get soldOutState() {
		return this._soldOutState;
	}

	get winnerState() {
		return this._winnerState;
	}

	get numberGumballs() {
		return this._numberGumballs;
	}

	set numberGumballs(value) {
		this._numberGumballs = value;
	}
}
