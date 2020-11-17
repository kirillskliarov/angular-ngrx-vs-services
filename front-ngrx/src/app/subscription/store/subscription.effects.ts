import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { filter, map, switchMap, withLatestFrom } from 'rxjs/operators';
import { UserService } from '../../services/user.service';
import { UserFacadeService } from '../../services/user-facade.service';
import { SubscriptionService } from '../services/subscription.service';
import { Subscription } from '../../models/subscription';
import {
  loadAllSubscriptionList,
  loadAllSubscriptionListSuccess,
  loadUserSubscriptionList,
  loadUserSubscriptionListSuccess
} from './subscription.actions';

@Injectable()
export class SubscriptionEffects {

  public loadUserSubscriptionList$ = createEffect(() => this.actions$.pipe(
    ofType(loadUserSubscriptionList),
    withLatestFrom(this.userFacadeService.activePhone$.pipe(
      filter((activePhone) => activePhone !== null),
    )),
    switchMap(([_, activePhone]) => this.userService.getUserSubscriptions(activePhone).pipe(
      map((subscriptionList: Subscription[]) => loadUserSubscriptionListSuccess({ subscriptionList })),
    )),
  ));

  public loadAllSubscriptionList$ = createEffect(() => this.actions$.pipe(
    ofType(loadAllSubscriptionList),
    switchMap(() => this.subscriptionService.getAllSubscriptionList().pipe(
      map((subscriptionList: Subscription[]) => loadAllSubscriptionListSuccess({ subscriptionList })),
    )),
  ));

  constructor(
    private actions$: Actions,
    private userService: UserService,
    private userFacadeService: UserFacadeService,
    private subscriptionService: SubscriptionService,
  ) {
  }
}
