import { IDisplayElement } from '../Observer/IDisplayElement';
import { IObserver } from '../Observer/IObserver';
import { ISubject } from '../Subject/ISubject';

export class ForecastDisplay implements IObserver, IDisplayElement {
  private tempereture!: number;
  private humidity!: number;
  private pressure!: number;

  display(): void {
    console.log(
      'Forecast Display:',
      this.tempereture,
      'C -',
      this.humidity,
      '% -',
      this.pressure,
      'atm'
    );
  }
  update(data: number[]): void {
    [this.tempereture, this.humidity, this.pressure] = data;

    this.display();
  }
  subscribe(subject: ISubject): void {
    subject.subscribe(this);
  }
  unsubscribe(subject: ISubject): void {
    subject.unsubscribe(this);
  }
}
