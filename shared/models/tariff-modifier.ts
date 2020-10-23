export interface TariffModifier {
  id: string;
  label: string;
  description: string;
  allowedOnTariffs: string[];
}
