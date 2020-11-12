import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tariff } from '../models/tariff';
import { TariffModifier } from '../models/tariff-modifier';

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
}
