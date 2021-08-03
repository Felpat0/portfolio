import React, { useState } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import { Stores } from "../types";
import { StoresContext } from "../contexts";
import { UserDataStore } from "../stores/UserDataStore";

import "../i18n";
import { Home } from "./Home";

import theme from "../ChakraUI/theme";
import Fonts from "../components/Fonts";
import { Projects } from "./Projects";

export const Root: React.FC = () => {
  const [stores] = useState<Stores>(() => {
    const root: Stores = {} as Stores;

    root.userData = new UserDataStore(root);

    return root;
  });

  return (
    <StoresContext.Provider value={stores}>
      <ChakraProvider theme={theme}>
        <Fonts />
        <Router>
          <Route exact path={"/"} component={Home} />
          <Route exact path={"/projects"} component={Projects} />
        </Router>
      </ChakraProvider>
    </StoresContext.Provider>
  );
};
