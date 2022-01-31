import { IObserver } from '../Observer/IObserver';
import { ISubject } from '../Subject/ISubject';

export class WeatherData implements ISubject {
  private observers: IObserver[] = [];
  private tempereture!: number;
  private humidity!: number;
  private pressure!: number;

  subscribe(observer: IObserver): void {
    if (this.observers.includes(observer)) {
      console.log('Was an observer');
      // throw new Error('Was an observer');
    } else this.observers.push(observer);
  }
  unsubscribe(observer: IObserver): void {
    if (this.observers.includes(observer)) {
      this.observers = this.observers.filter((item) => item != observer);
    } else {
      // throw new Error('Not yet an observer');
      console.log('Not yet an observer');
    }
  }
  notifyObserver(): void {
    for (const observe of this.observers) {
      observe.update([this.tempereture, this.humidity, this.pressure]);
    }
  }
  setMeasurements(tempereture: number, humidity: number, pressure: number) {
    this.tempereture = tempereture;
    this.humidity = humidity;
    this.pressure = pressure;

    this.notifyObserver();
  }
}
