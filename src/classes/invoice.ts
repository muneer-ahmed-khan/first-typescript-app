import { HasFormatter } from "../interfaces/HasFormatter.js";

export class Invoice implements HasFormatter {
  //   private client: string;
  //   public details: string;
  //   readonly amount: number;

  constructor(
    readonly client: string,
    public details: string,
    private amount: number
  ) {}

  format() {
    return `${this.client} owes £${this.amount} for ${this.details}`;
  }
}
