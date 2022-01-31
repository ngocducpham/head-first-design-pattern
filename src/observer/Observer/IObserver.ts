import { ISubject } from '../Subject/ISubject';

export interface IObserver {
  update(data: number[]): void;
  subscribe(subject: ISubject): void;
  unsubscribe(subject: ISubject): void;
}
