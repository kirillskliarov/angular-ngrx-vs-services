import { EntityStatus } from './entity-status';

export interface EntityState<T> {
  status: EntityStatus;
  value: T;
  error: any;
}
