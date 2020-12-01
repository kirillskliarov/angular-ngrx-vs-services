export interface UserTariffModifier {
  readonly id: string;
  readonly label: string;
  readonly description: string;
  readonly fee: number;
  readonly allowedOnTariffs: string[];
  isUser: boolean;
  compatibleWithTariff: boolean;
}
