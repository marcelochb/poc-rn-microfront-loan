import React from 'react';
import { ThemeBase } from '@poc/theme';
import { LoanDetailTemplate } from '@poc/templates';
import { useLoanDetailController } from '@poc/core';

export const LoanDetailScreen = () => {
  const {getController} = useLoanDetailController();
  return (
    <LoanDetailTemplate 
      theme={ThemeBase.Midway}
      loading={getController.loading}
      error={getController.error}
      data={getController.data}
    />
  );
};
