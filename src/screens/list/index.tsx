import React from 'react'
import { ThemeBase } from '@poc/theme'
import { LoanListTemplate } from '@poc/templates'
import { useLoanListController } from '@poc/core'

export const LoanList = () => {
  const {getController, handleController} = useLoanListController();
  return (
    <LoanListTemplate 
      theme={ThemeBase.Midway} 
      loans={getController.loans} 
      error={getController.error}
      loading={getController.loading}
      errorText={'Tivemos um problema de comunicação'}
      navigateToDetail={handleController.navigateToDetail}
    />
  )
}
