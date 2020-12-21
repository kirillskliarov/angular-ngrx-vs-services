import { Billable } from './billable';

export interface TariffModifier extends Billable {
  readonly allowedOnTariffs: string[];
}
