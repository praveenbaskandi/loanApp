import { Loan } from "../types/loan";

export type RootStackParamList = {
  Loans: undefined;
  LoanDetail: {
    loan: Loan;
  };
};
