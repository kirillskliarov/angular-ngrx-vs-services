export interface Billable {
  readonly id: string;
  readonly label: string;
  readonly description: string;
  readonly fee: number;
}
