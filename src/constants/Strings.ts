export const Texts = {
  amount: 'Amount: ₹',
  interest: 'Interest:',
  type: 'Type: ',
  resend: 'Resend: ',
  lowToHigh: 'Rate low to high',
  highToLow: 'Rate high to low',
  loanAmount: 'Loan Amount: ₹',
  interestRate: 'Interest Rate:',
  loanType: 'Loan Type:',
  retry: 'Retry',
} as const;
export type TextType = (typeof Texts)[keyof typeof Texts];
