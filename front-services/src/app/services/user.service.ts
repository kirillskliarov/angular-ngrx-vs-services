import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tariff } from '../models/tariff';
import { TariffModifier } from '../models/tariff-modifier';
import { Subscription } from '../models/subscription';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userPath = `${environment.host}/user`;

  constructor(
    private httpClient: HttpClient,
  ) {
  }

  public getUserPhoneList(): Observable<string[]> {
    return this.httpClient.get<string[]>(`${this.userPath}/phones/list`);
  }

  public getUserTariff(phone: string): Observable<Tariff> {
    const params = { phone };
    return this.httpClient.get<Tariff>(`${this.userPath}/tariff`, { params });
  }

  public getUserTariffModifierList(phone: string): Observable<TariffModifier[]> {
    const params = { phone };
    return this.httpClient.get<TariffModifier[]>(`${this.userPath}/tariff-modifiers`, { params });
  }

  public getUserSubscriptionList(phone: string): Observable<Subscription[]> {
    const params = { phone };
    return this.httpClient.get<Subscription[]>(`${this.userPath}/subscriptions`, { params });
  }

  public changeUserTariff(phone: string, id: string): Observable<void> {
    return this.httpClient.post<void>(
      `${this.userPath}/tariff`,
      { id },
      { params: { phone } }
    );
  }

  public deleteUserTariffModifier(phone: string, id: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.userPath}/tariff-modifiers`, {
      params: {
        phone,
        id,
      },
    });
  }

  public addUserTariffModifier(phone: string, id: string): Observable<void> {
    return this.httpClient.post<void>(
      `${this.userPath}/tariff-modifiers`,
      { id },
      { params: { phone } }
    );
  }

  public deleteUserSubscription(phone: string, id: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.userPath}/subscriptions`, {
      params: {
        phone,
        id,
      },
    });
  }

  public addUserSubscription(phone: string, id: string): Observable<void> {
    return this.httpClient.post<void>(
      `${this.userPath}/subscriptions`,
      { id },
      { params: { phone } }
    );
  }
}
