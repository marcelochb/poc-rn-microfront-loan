import React from 'react'
import { LoanCreateTemplate } from '@poc/templates'
import { ThemeBase } from '@poc/theme'
import { useLoanCreateController } from '@poc/core'
import { useNavigation } from '@react-navigation/native'

export const LoanCreateScreen = () => {
  const {data,error,loading,onChange,onSubmit} = useLoanCreateController();
  const navigation = useNavigation();
  return (
    <LoanCreateTemplate
      theme={ThemeBase.Midway}
      nameLabel='Nome'
      nameValue={data.name}
      nameChangeText={onChange('name')}
      typeLabel='Tipo'
      typeValue={data.type}
      typeChangeText={onChange('type')}
      amountLabel='Valor'
      amountValue={data.amount}
      amountChangeText={onChange('amount')}
      submitButtonLabel='Salvar'
      onSubmit={onSubmit}
      cancelButtonLabel='Agora não'
      onCancel={navigation.goBack}
      isLoading={loading}
    />
  )
}
