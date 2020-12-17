import { TariffModifier } from './tariff-modifier';

export interface UserTariffModifier extends TariffModifier{
  isUser: boolean;
  compatibleWithTariff: boolean;
}
