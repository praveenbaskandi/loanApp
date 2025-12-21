export type LoanType = "Secured" | "Unsecured";

export interface Loan {
  id: string;
  bankName: string;
  amount: number;
  interestRate: number;
  type: LoanType;
}
