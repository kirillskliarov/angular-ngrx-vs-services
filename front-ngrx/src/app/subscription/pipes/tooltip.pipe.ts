import { Pipe, PipeTransform } from '@angular/core';
import { UserTariffModifier } from '../../models/user-tariff-modifier';
import { UserSubscription } from '../../models/user-subscription';

@Pipe({
  name: 'tooltip'
})
export class TooltipPipe implements PipeTransform {

  transform(value: UserSubscription): string | null {
    if (value.isUser) {
      return 'У вас уже подключен этот тарифный модификатор'; // TODO: translate
    }

    return null;
  }

}
