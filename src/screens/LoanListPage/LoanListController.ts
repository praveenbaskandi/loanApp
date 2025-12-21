import { useMemo, useCallback, useState, useEffect } from 'react';
import { Loan } from '../../types/loan';
import { fetchLoans } from '../../services/loanApi';

interface LoanListControllerReturn {
  sortByInterestAscending: () => void;
  sortInterestDescending: () => void;
  loans: Loan[];
  loading: boolean;
  error: string | null;
  selectedBtn: number | null;
  setSelectedBtn: (num: number) => void;
  loadLoans: () => void;
}

export function useLoanListController(): LoanListControllerReturn {
  const [loans, setLoans] = useState<Loan[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedBtn, setSelectedBtn] = useState<number | null>(0);

  const loadLoans = useCallback(async (): Promise<void> => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchLoans();
      setLoans(data);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  }, []);

  const sortByInterestAscending = useCallback((): void => {
    setLoans(prev => [...prev].sort((a, b) => a.interestRate - b.interestRate));
  }, []);

  const sortInterestDescending = useCallback((): void => {
    setLoans(prev => [...prev].sort((a, b) => b.interestRate - a.interestRate));
  }, []);

  useEffect(() => {
    loadLoans();
  }, []);

  return useMemo(
    () => ({
      sortByInterestAscending,
      sortInterestDescending,
      loans,
      loading,
      error,
      selectedBtn,
      setSelectedBtn,
      loadLoans,
    }),
    [
      sortByInterestAscending,
      sortInterestDescending,
      loans,
      loading,
      error,
      selectedBtn,
      setSelectedBtn,
      loadLoans,
    ],
  );
}
