export type ModelOfLoanScreens = {
  list: string;
  detail: string;
}
export type ModelOfLoanNavigator = {
  stack: string;
  title: string;
  screens: ModelOfLoanScreens;
}
export const LOAN_NAVIGATORS:ModelOfLoanNavigator = {
  stack: 'LoanStack',
  title: 'Empréstimo',
  screens: {
    list: 'LoanList',
    detail: 'LoanDetail'
  }
}