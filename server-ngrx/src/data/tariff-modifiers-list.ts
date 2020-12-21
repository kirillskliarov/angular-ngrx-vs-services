import { TariffModifier } from '../models/tariff-modifier';
import { TARIFF_LIST } from './tariff-list';

export const TARIFF_MODIFIERS_LIST: ReadonlyArray<TariffModifier> = [
  {
    id: '0',
    label: 'Unlim internet',
    description: 'Unlimited internet',
    fee: 500,
    allowedOnTariffs: [
      TARIFF_LIST[0].id,
      TARIFF_LIST[1].id,
      TARIFF_LIST[2].id,
      TARIFF_LIST[3].id,
    ],
  },
  {
    id: '1',
    label: 'Unlim minutes',
    description: 'Unlimited minutes',
    fee: 500,
    allowedOnTariffs: [
      TARIFF_LIST[0].id,
      TARIFF_LIST[1].id,
      TARIFF_LIST[2].id,
      TARIFF_LIST[3].id,
    ],
  },
  {
    id: '2',
    label: 'Minutes 100',
    description: '100 minutes',
    fee: 100,
    allowedOnTariffs: [
      TARIFF_LIST[0].id,
    ],
  },
  {
    id: '3',
    label: 'Minutes 500',
    description: '500 minutes',
    fee: 150,
    allowedOnTariffs: [
      TARIFF_LIST[0].id,
    ],
  },
  {
    id: '4',
    label: 'Minutes 1000',
    description: '1000 minutes',
    fee: 250,
    allowedOnTariffs: [
      TARIFF_LIST[0].id,
    ],
  },
  {
    id: '5',
    label: 'Minutes unlim',
    description: 'Unlimited minutes',
    fee: 500,
    allowedOnTariffs: [
      TARIFF_LIST[0].id,
    ],
  },
  {
    id: '6',
    label: 'Internet 5Gb',
    description: 'Traffic 5Gb',
    fee: 100,
    allowedOnTariffs: [
      TARIFF_LIST[0].id,
    ],
  },
  {
    id: '7',
    label: 'Internet 10Gb',
    description: 'Traffic 10Gb',
    fee: 150,
    allowedOnTariffs: [
      TARIFF_LIST[0].id,
    ],
  },
  {
    id: '8',
    label: 'Internet 20Gb',
    description: 'Traffic 10Gb',
    fee: 250,
    allowedOnTariffs: [
      TARIFF_LIST[0].id,
    ],
  },
];

export const TARIFF_MODIFIERS_MAP: ReadonlyMap<string, TariffModifier> = (new Map<string, TariffModifier>())
  .set('0', TARIFF_MODIFIERS_LIST[0])
  .set('1', TARIFF_MODIFIERS_LIST[1])
  .set('2', TARIFF_MODIFIERS_LIST[2])
  .set('3', TARIFF_MODIFIERS_LIST[3])
  .set('4', TARIFF_MODIFIERS_LIST[4])
  .set('5', TARIFF_MODIFIERS_LIST[5])
  .set('6', TARIFF_MODIFIERS_LIST[6])
  .set('7', TARIFF_MODIFIERS_LIST[7])
  .set('8', TARIFF_MODIFIERS_LIST[8])
;
