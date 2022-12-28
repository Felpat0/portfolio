import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Home } from "./Home";

export const Root: React.FC = () => {
  return (
      <ChakraProvider>
        <Router>
          <Route exact path={"/"} component={Home} />
        </Router>
      </ChakraProvider>
  );
};
