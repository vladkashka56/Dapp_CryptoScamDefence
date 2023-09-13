import { createContext } from "react";

const AppContext = createContext({
  topAppMenu: 0,
  topMenuChangeHandler: () => {},
});
export { AppContext };
