import { Loan } from '../types/loan';

const API_URL = 'https://loanapp.free.beeceptor.com/loanApp';

export async function fetchLoans(): Promise<Loan[]> {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error('Failed to fetch loans');
  }

  const data: Loan[] = await response.json();
  return data;
}
