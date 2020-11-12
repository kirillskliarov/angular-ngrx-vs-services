export interface TariffModifier {
  readonly id: string;
  readonly label: string;
  readonly description: string;
  readonly fee: number;
  readonly allowedOnTariffs: string[];
}
