import React from "react";
import { navigate } from "gatsby";

import { AuthProvider } from "react-use-auth";
import MainPage from "./components/MainPage";

export const wrapRootElement = ({ element }) => (
  <AuthProvider
    navigate={navigate}
    auth0_domain="dev-kp94a8ym.eu.auth0.com "
    auth0_client_id="2ovlQwH1W1l3nk5i395YygOXf0xNb9J0"
  >
    {element}
  </AuthProvider>
); 
