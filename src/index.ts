import { IMicrofont } from "@poc/interfaces";
import { NAVIGATOR_CONSTANTS } from "./constants";
import { Route } from "./routes";
import { screens } from "./screens";

export const LoanStack:IMicrofont = {
  stack: {
    component: Route,
    name: NAVIGATOR_CONSTANTS.STACK_NAME
  },
  initialRoute: NAVIGATOR_CONSTANTS.LIST_SCREEN_NAME,
  screens
}
