import { Pipe, PipeTransform } from '@angular/core';
import { UserTariffModifier } from '../../models/user-tariff-modifier';

@Pipe({
  name: 'tooltip'
})
export class TooltipPipe implements PipeTransform {

  transform(value: UserTariffModifier): string {
    if (value.isUser) {
      return 'У вас уже подключен этот тарифный модификатор'; // TODO: translate
    }

    if (!value.compatibleWithTariff) {
      return 'Тарифный модификатор не совместим с вашим тарифом'; // TODO: translate
    }

    return null;
  }

}
