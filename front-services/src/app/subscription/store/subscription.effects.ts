import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, switchMap, withLatestFrom } from 'rxjs/operators';
import { UserService } from '../../services/user.service';
import { UserFacadeService } from '../../services/user-facade.service';
import { SubscriptionService } from '../services/subscription.service';
import { Subscription } from '../../models/subscription';
import {
  addUserSubscriptionAction,
  addUserSubscriptionSuccessAction,
  deleteUserSubscriptionAction,
  deleteUserSubscriptionSuccessAction,
  loadAllSubscriptionListAction,
  loadAllSubscriptionListSuccessAction,
  loadUserSubscriptionListAction,
  loadUserSubscriptionListSuccessAction,
} from './subscription.actions';

@Injectable()
export class SubscriptionEffects {

  public loadUserSubscriptionListEffect$ = createEffect(() => this.actions$.pipe(
    ofType(loadUserSubscriptionListAction),
    withLatestFrom(this.userFacadeService.userActivePhone$),
    switchMap(([, activePhone]) => this.userService.getUserSubscriptionList(activePhone).pipe(
      map((userSubscriptionList: Subscription[]) => loadUserSubscriptionListSuccessAction({ userSubscriptionList })),
    )),
  ));

  public loadAllSubscriptionListEffect$ = createEffect(() => this.actions$.pipe(
    ofType(loadAllSubscriptionListAction),
    switchMap(() => this.subscriptionService.getAllSubscriptionList().pipe(
      map((allSubscriptionList: Subscription[]) => loadAllSubscriptionListSuccessAction({ allSubscriptionList })),
    )),
  ));

  public addUserSubscriptionEffect$ = createEffect(() => this.actions$.pipe(
    ofType(addUserSubscriptionAction),
    withLatestFrom(this.userFacadeService.userActivePhone$),
    switchMap(([{ id }, activePhone]) => this.userService.addUserSubscription(activePhone, id).pipe(
      mergeMap(() => {
        return [
          addUserSubscriptionSuccessAction(),
          loadUserSubscriptionListAction(),
        ];
      }),
    )),
  ));

  public deleteUserSubscriptionEffect = createEffect(() => this.actions$.pipe(
    ofType(deleteUserSubscriptionAction),
    withLatestFrom(this.userFacadeService.userActivePhone$),
    switchMap(([{ id }, activePhone]) => this.userService.deleteUserSubscription(activePhone, id).pipe(
      mergeMap(() => {
        return [
          deleteUserSubscriptionSuccessAction(),
          loadUserSubscriptionListAction(),
        ];
      }),
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
