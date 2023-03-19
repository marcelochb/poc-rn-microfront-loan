import React, { useCallback } from 'react'
import { ThemeBase } from '@poc/theme'
import { LoanListTemplate } from '@poc/templates'
import { LoanEntity, useLoanListController } from '@poc/core'
import { useNavigation } from '@react-navigation/native'
import { NAVIGATOR_CONSTANTS } from '../../constants'
import IconPlus from '../../assets/Icons/iconPlus.svg';
import { useSelector } from 'react-redux'
import { IGlobalState } from '@poc/interfaces'

export const LoanListScreen = () => {
  const theme = useSelector((state:IGlobalState) => state.theme.value);
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
      theme={theme} 
      listData={data} 
      error={error}
      loading={loading}
      callBack={navigateToDetail}
      IconAddButton={IconPlus}
      navigateToCreate={navigateToCreate}
    />
  )
}