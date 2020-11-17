import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TariffModifier } from '../../models/tariff-modifier';

@Injectable()
export class TariffModifierService {

  constructor(private httpClient: HttpClient) { }

  public getAllTariffModifierList(): Observable<TariffModifier[]> {
    return this.httpClient.get<TariffModifier[]>('http://localhost:5000/tariff-modifier/list');
  }
}
