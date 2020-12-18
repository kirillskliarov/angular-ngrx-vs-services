import { NavLink } from '../models/nav-link';
import { ROOT, SUBSCRIPTIONS, TARIFF_MODIFIERS } from './links';

export const NAV_LINKS: ReadonlyArray<NavLink> = [
  {
    link: `/${ROOT}`,
    label: 'Tariffs',
  },
  {
    link: `/${TARIFF_MODIFIERS}`,
    label: 'Tariff modifiers',
  },
  {
    link: `/${SUBSCRIPTIONS}`,
    label: 'Subscriptions',
  },
];
