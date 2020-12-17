import { StandardEntity } from "./base/sys$StandardEntity";
import { Transaction } from "./vabanque_Transaction";
import { AccountType } from "../enums/enums";
export class Account extends StandardEntity {
  static NAME = "vabanque_Account";
  name?: string | null;
  income?: Transaction[] | null;
  outcome?: Transaction[] | null;
  type?: AccountType | null;
  description?: string | null;
  incomeTotal?: number | null;
  outcomeTotal?: number | null;
}
export type AccountViewName =
  | "_base"
  | "_local"
  | "_minimal"
  | "account-with-transactions-view";
export type AccountView<V extends AccountViewName> = V extends "_base"
  ? Pick<Account, "id" | "name" | "type" | "description">
  : V extends "_local"
  ? Pick<Account, "id" | "name" | "type" | "description">
  : V extends "_minimal"
  ? Pick<Account, "id" | "name">
  : V extends "account-with-transactions-view"
  ? Pick<
      Account,
      | "id"
      | "name"
      | "type"
      | "description"
      | "income"
      | "outcome"
      | "incomeTotal"
      | "outcomeTotal"
    >
  : never;
