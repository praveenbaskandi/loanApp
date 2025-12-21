import { Loan } from '../types/loan';

const API_URL = 'https://mp4c5ca707a83a11041d.free.beeceptor.com/datav1';

export async function fetchLoans(): Promise<Loan[]> {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error('Failed to fetch loans');
  }

  const data: Loan[] = await response.json();
  return data;
}
