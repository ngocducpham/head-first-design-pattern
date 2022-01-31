import { IObserver } from '../Observer/IObserver';

export interface ISubject {
  subscribe(observer: IObserver): void;
  unsubscribe(observer: IObserver): void;
  notifyObserver(): void;
}
