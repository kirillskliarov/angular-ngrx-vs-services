import { Tariff } from '../models/tariff';

export const TARIFF_LIST: ReadonlyArray<Tariff> = [
  {
    id: '0',
    label: 'Simple',
    description: 'Without fee',
    fee: 0,
  },
  {
    id: '1',
    label: '100 + Internet 5Gb',
    description: '100 minutes and traffic 5Gb',
    fee: 175,
  },
  {
    id: '2',
    label: '500 + Internet 10Gb',
    description: '500 minutes and traffic 10Gb',
    fee: 250,
  },
  {
    id: '3',
    label: '1000 + Internet 20',
    description: '1000 minutes and traffic 20Gb',
    fee: 400,
  },
  {
    id: '4',
    label: 'Unlimited',
    description: 'Full unlim',
    fee: 850,
  },
];

export const TARIFF_MAP: ReadonlyMap<string, Tariff> = (new Map<string, Tariff>())
  .set('0', TARIFF_LIST[0])
  .set('1', TARIFF_LIST[1])
  .set('2', TARIFF_LIST[2])
  .set('3', TARIFF_LIST[3])
  .set('4', TARIFF_LIST[4])
;
