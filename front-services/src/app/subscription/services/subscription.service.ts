import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tariff } from '../../models/tariff';
import { environment } from '../../../environments/environment';

@Injectable()
export class SubscriptionService {

  private subscriptionPath = `${environment.host}/subscription`;

  constructor(private httpClient: HttpClient) { }

  public getAllSubscriptionList(): Observable<Tariff[]> {
    return this.httpClient.get<Tariff[]>(`${this.subscriptionPath}/list`);
  }
}
