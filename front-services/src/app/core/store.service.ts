import { BehaviorSubject } from 'rxjs';

export abstract class StoreService<T> {

  protected store: BehaviorSubject<T>;

  protected constructor(initialState: T) {
    this.store = new BehaviorSubject<T>(initialState);
  }

  public getSnapshot(): T {
    return this.store.getValue();
  }

}
