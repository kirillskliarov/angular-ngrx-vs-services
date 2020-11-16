import { pipe } from 'rxjs';
import { filter } from 'rxjs/operators';
import { StateEntity } from '../../models/state-entity';
import { EntityStatus } from '../../models/entity-status';

export function success<T extends StateEntity<unknown> = StateEntity<unknown>>() {
  return pipe(
    filter<T>(state => state.status === EntityStatus.SUCCESS),
  );
}
