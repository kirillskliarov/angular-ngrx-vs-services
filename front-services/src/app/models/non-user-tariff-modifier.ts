import { TariffModifier } from './tariff-modifier';

export interface NonUserTariffModifier extends TariffModifier {
  isUser: boolean;
  compatibleWithTariff: boolean;
}
