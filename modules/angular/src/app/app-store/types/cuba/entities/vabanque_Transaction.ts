import { StandardEntity } from "./base/sys$StandardEntity";
import { Account } from "./vabanque_Account";
export class Transaction extends StandardEntity {
  static NAME = "vabanque_Transaction";
  date?: any | null;
  name?: string | null;
  description?: string | null;
  confirmed?: boolean | null;
  time?: any | null;
  sum?: number | null;
  from?: Account | null;
  to?: Account | null;
}
export type TransactionViewName = "_base" | "_local" | "_minimal";
export type TransactionView<V extends TransactionViewName> = V extends "_base"
  ? Pick<
      Transaction,
      "id" | "name" | "date" | "description" | "confirmed" | "time" | "sum"
    >
  : V extends "_local"
  ? Pick<
      Transaction,
      "id" | "date" | "name" | "description" | "confirmed" | "time" | "sum"
    >
  : V extends "_minimal"
  ? Pick<Transaction, "id" | "name">
  : never;
