import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tariff } from '../../models/tariff';

@Injectable()
export class SubscriptionService {

  constructor(private httpClient: HttpClient) { }

  public getAllSubscriptionList(): Observable<Tariff[]> {
    return this.httpClient.get<Tariff[]>('http://localhost:6020/subscription/list');
  }
}
