import { OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { Component } from '@angular/core';

@Component({
  template: '',
})
export abstract class BaseComponent implements OnDestroy {

  protected destroy$: Subject<void> = new Subject<void>();

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
