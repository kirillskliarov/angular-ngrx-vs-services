import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tariff } from '../../models/tariff';

@Injectable()
export class TariffService {

  constructor(private httpClient: HttpClient) { }

  public getAllTariffList(): Observable<Tariff[]> {
    return this.httpClient.get<Tariff[]>('http://localhost:6010/tariff/list');
  }
}
