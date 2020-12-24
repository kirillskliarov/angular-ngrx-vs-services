import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TariffModifier } from '../../models/tariff-modifier';
import { environment } from '../../../environments/environment';

@Injectable()
export class TariffModifierService {

  private tariffModifierPath = `${environment.host}/tariff-modifier`;

  constructor(private httpClient: HttpClient) { }

  public getAllTariffModifierList(): Observable<TariffModifier[]> {
    return this.httpClient.get<TariffModifier[]>(`${this.tariffModifierPath}/list`);
  }
}
