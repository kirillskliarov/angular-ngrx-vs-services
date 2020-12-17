import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tariff } from '../models/tariff';
import { TariffModifier } from '../models/tariff-modifier';
import { Subscription } from '../models/subscription';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private httpClient: HttpClient,
  ) {
  }

  public getPhones(): Observable<string[]> {
    return this.httpClient.get<string[]>('http://localhost:5000/user/phones/list');
  }

  public getActivePhone(): Observable<string> {
    return this.httpClient.get<string>('http://localhost:5000/user/phones/default');
  }

  public getUserTariff(phone: string): Observable<Tariff> {
    const params = { phone };
    return this.httpClient.get<Tariff>('http://localhost:5000/user/tariff', { params });
  }

  public getUserTariffModifiers(phone: string): Observable<TariffModifier[]> {
    const params = { phone };
    return this.httpClient.get<TariffModifier[]>('http://localhost:5000/user/tariff-modifiers', { params });
  }

  public getUserSubscriptions(phone: string): Observable<Subscription[]> {
    const params = { phone };
    return this.httpClient.get<Subscription[]>('http://localhost:5000/user/subscriptions', { params });
  }

  public changeUserTariff(phone: string, id: string): Observable<void> {
    return this.httpClient.post<void>(
      'http://localhost:5000/user/tariff',
      { id },
      { params: { phone } }
    );
  }

  public deleteUserTariffModifier(phone: string, id: string): Observable<void> {
    return this.httpClient.delete<void>('http://localhost:5000/user/tariff-modifiers', {
      params: {
        phone,
        id,
      },
    });
  }

  public addUserTariffModifier(phone: string, id: string): Observable<void> {
    return this.httpClient.post<void>(
      'http://localhost:5000/user/tariff-modifiers',
      { id },
      { params: { phone } }
    );
  }

  public deleteUserSubscription(phone: string, id: string): Observable<void> {
    return this.httpClient.delete<void>('http://localhost:5000/user/subscriptions', {
      params: {
        phone,
        id,
      },
    });
  }

  public addUserSubscription(phone: string, id: string): Observable<void> {
    return this.httpClient.post<void>(
      'http://localhost:5000/user/subscriptions',
      { id },
      { params: { phone } }
    );
  }
}
