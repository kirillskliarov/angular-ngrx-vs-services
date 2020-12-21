import { Observable, Subscriber } from 'rxjs';

export function filterNil<T>(): (source: Observable<T>) => Observable<T> {
  return (source: Observable<T>): Observable<T> => {
    return new Observable((subscriber: Subscriber<T>): void => {
      source.subscribe({
        next(value: T): void {
          if (value !== undefined && value !== null) {
            subscriber.next(value);
          }
        },
        error(error: Error): void {
          subscriber.error(error);
        },
        complete(): void {
          subscriber.complete();
        },
      });
    });
  };
}
