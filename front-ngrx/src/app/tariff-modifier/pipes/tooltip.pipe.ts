import { Pipe, PipeTransform } from '@angular/core';
import { NonUserTariffModifier } from '../../models/non-user-tariff-modifier';

@Pipe({
  name: 'tooltip'
})
export class TooltipPipe implements PipeTransform {

  transform(value: NonUserTariffModifier): string | null {
    if (value.isUser) {
      return 'У вас уже подключен этот тарифный модификатор'; // TODO: translate
    }

    if (!value.compatibleWithTariff) {
      return 'Тарифный модификатор не совместим с вашим тарифом'; // TODO: translate
    }

    return null;
  }

}
