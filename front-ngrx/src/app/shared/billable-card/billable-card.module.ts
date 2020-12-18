import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillableCardComponent } from './billable-card.component';

@NgModule({
  declarations: [BillableCardComponent],
  imports: [
    CommonModule,
  ],
  exports: [BillableCardComponent],
})
export class BillableCardModule { }
