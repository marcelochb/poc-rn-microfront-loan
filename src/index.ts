import { IMicrofont } from "@poc/interfaces";
import { NAVIGATOR_CONSTANTS } from "./constants";
import { Route } from "./routes";
import { LoanDetailScreen, LoanListScreen } from "./screens";

export const LoanStack:IMicrofont = {
  stack: {
    component: Route,
    name: NAVIGATOR_CONSTANTS.STACK_NAME
  },
  screens: [
    {
      component: LoanListScreen,
      name: NAVIGATOR_CONSTANTS.LIST_SCREEN_NAME,
      title: NAVIGATOR_CONSTANTS.LIST_SCREEN_TITLE
    },
    {
      component: LoanDetailScreen,
      name: NAVIGATOR_CONSTANTS.DETAIL_SCREEN_NAME,
      title: NAVIGATOR_CONSTANTS.DETAIL_SCREEN_TITLE
    }
  ]
}
