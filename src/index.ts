import { IMicrofont } from "@poc/interfaces";
import { Route } from "./routes";
import { LoanDetailScreen, LoanListScreen } from "./screens";

export const LoanStack:IMicrofont = {
  stack: {
    component: Route,
    name: 'LoanStack'
  },
  screens: [
    {
      component: LoanListScreen,
      name: 'LoanList',
      title: 'Empréstimos'
    },
    {
      component: LoanDetailScreen,
      name: 'LoanDetail',
      title: 'Detalhes do empréstimo'
    }
  ]
}
