import React, { useCallback } from 'react'
import { ThemeBase } from '@poc/theme'
import { LoanListTemplate } from '@poc/templates'
import { LoanEntity, useLoanListController } from '@poc/core'
import { useNavigation } from '@react-navigation/native'
import { NAVIGATOR_CONSTANTS } from '../../constants'

export const LoanListScreen = () => {
  const navigation = useNavigation<any>();
  const navigateToDetail = useCallback(
      (item:LoanEntity) => {
      navigation.navigate(NAVIGATOR_CONSTANTS.DETAIL_SCREEN_NAME, {id: item.id});
    },[]
  )
  const {getController} = useLoanListController();
  return (
    <LoanListTemplate 
      theme={ThemeBase.Midway} 
      listData={getController.data} 
      error={getController.error}
      loading={getController.loading}
      callBack={(it:LoanEntity) =>navigateToDetail(it)}
    />
  )
}