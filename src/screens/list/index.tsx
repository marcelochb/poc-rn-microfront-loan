import React, { useCallback } from 'react'
import { ThemeBase } from '@poc/theme'
import { LoanListTemplate } from '@poc/templates'
import { LoanEntity, useLoanListController } from '@poc/core'
import { useNavigation } from '@react-navigation/native'
import { NAVIGATOR_CONSTANTS } from '../../constants'
import iconPlus from '../../assets/Icons/iconPlus.svg';

export const LoanListScreen = () => {
  const navigation = useNavigation<any>();
  const navigateToDetail = useCallback(
      (item:LoanEntity) => {
      navigation.navigate(NAVIGATOR_CONSTANTS.DETAIL_SCREEN_NAME, {id: item.id});
    },[]
  )
  const navigateToCreate = useCallback(
      () => {
      navigation.navigate(NAVIGATOR_CONSTANTS.CREATE_SCREEN_NAME);
    },[]
  )
  const {data,error,loading} = useLoanListController();
  return (
    <LoanListTemplate 
      theme={ThemeBase.Midway} 
      listData={data} 
      error={error}
      loading={loading}
      callBack={navigateToDetail}
      IconAddButton={iconPlus}
      navigateToCreate={navigateToCreate}
    />
  )
}