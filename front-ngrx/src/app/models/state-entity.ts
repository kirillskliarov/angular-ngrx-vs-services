import { EntityStatus } from './entity-status';

export interface StateEntity<T> {
  status: EntityStatus;
  value: T;
}
