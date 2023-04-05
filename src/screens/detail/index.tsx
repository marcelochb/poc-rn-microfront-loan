import React from 'react';
import { ThemeBase } from '@poc/theme';
import { LoanDetailTemplate } from '@poc/templates';
import { useLoanDetailController } from '@poc/core';
import { useSelector } from 'react-redux';
import { IGlobalState } from '@poc/interfaces';

export const LoanDetailScreen = () => {
  const theme = useSelector((state:IGlobalState) => state.theme.value);
  const {loading,error,data} = useLoanDetailController();
  return (
    <LoanDetailTemplate 
      theme={theme}
      loading={loading}
      error={error}
      data={data}
    />
  );
};
