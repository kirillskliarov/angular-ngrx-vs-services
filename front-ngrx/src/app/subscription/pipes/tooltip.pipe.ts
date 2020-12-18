import { Pipe, PipeTransform } from '@angular/core';
import { NonUserSubscription } from '../../models/non-user-subscription';

@Pipe({
  name: 'tooltip'
})
export class TooltipPipe implements PipeTransform {

  transform(value: NonUserSubscription): string | null {
    if (value.isUser) {
      return 'У вас уже подключен этот тарифный модификатор'; // TODO: translate
    }

    return null;
  }

}
