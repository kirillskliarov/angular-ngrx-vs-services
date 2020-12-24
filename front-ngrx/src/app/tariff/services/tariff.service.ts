import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tariff } from '../../models/tariff';
import { environment } from '../../../environments/environment';

@Injectable()
export class TariffService {

  private tariffPath = `${environment.host}/tariff`;

  constructor(private httpClient: HttpClient) { }

  public getAllTariffList(): Observable<Tariff[]> {
    return this.httpClient.get<Tariff[]>(`${this.tariffPath}/list`);
  }
}
