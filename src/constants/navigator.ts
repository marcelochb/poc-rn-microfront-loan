export type ModelOfLoanScreens = {
  list: string;
  detail: string;
}
export type ModelOfLoanNavigator = {
  name: string;
  screens: ModelOfLoanScreens;
}
export const LOAN_STACK:ModelOfLoanNavigator = {
  name: 'LoanStack',
  screens: {
    list: 'LoanList',
    detail: 'LoanDetail'
  }
}