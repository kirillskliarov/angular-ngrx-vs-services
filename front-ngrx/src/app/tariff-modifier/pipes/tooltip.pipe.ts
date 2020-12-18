import { Pipe, PipeTransform } from '@angular/core';
import { NonUserTariffModifier } from '../../models/non-user-tariff-modifier';

@Pipe({
  name: 'tooltip'
})
export class TooltipPipe implements PipeTransform {

  transform(value: NonUserTariffModifier): string | null {
    if (value.isUser) {
      return 'You already have this subscription activated';
    }

    if (!value.compatibleWithTariff) {
      return 'Tariff modifier is not compatible with your tariff';
    }

    return null;
  }

}
