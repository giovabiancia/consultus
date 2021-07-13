import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AboutPage from "../../page/AboutPage";
import Home from "../../page/Home";
import HomeV2 from "../../page/Home-v2";
import PricingPage from "../../page/PricingPage";
import ProjectPage from "../../page/ProjectPage";
import ServiceDetails from "../../page/ServiceDetails";
import ServicePage from "../../page/ServicePage";
import TeamDetails from "../../page/ProfiloUtente";
import TeamPage from "../../page/TeamPage";
import ErrorPage from "../../page/Error.jsx";
import ContactPage from "../../page/ContactPage";
import BlogDetails from "../../page/BlogDetails";
import Request from "../../page/Request";
import { RegistrationStepProvider } from "../../context/RegistrationStepContext";
import { RequestContext, RequestProvider } from "../../context/RequestContext";
import ProfiloUtente from "../../page/ProfiloUtente";
import {
  ConsultantStepContext,
  ConsultantStepProvider,
} from "../../context/ConsultantStepContext";
import RegistrationConsultant from "../../page/RegistrationConsultant";
import { ConsultantProvider } from "../../context/ConsultantContext";
import { ProfileProvider } from "../../context/ProfileContext";
import UpdateProfile from "../../page/UpdateProfile";
import { RisultatiProvider } from "../../context/RisultatiContext";
import ProfiloConsulente from "../../page/ProfiloConsulente";
import CreaArticolo from "../../page/CreaArticolo";
import { BlogProvider } from "../../context/BlogContext";
import ModificaArticolo from "../../page/ModificaArticolo";
import SignUp from "../../page/SignUp";
import { useAuthentication } from "../../hooks/useAuthentication";
import BlogPage from "../../page/BlogPage";
import { SubscriptionProvider } from "../../context/SubsriptionContext";

function AppRoute() {
  const auth = useAuthentication();

  return (
    <BrowserRouter>
      <SubscriptionProvider>
        <BlogProvider>
          <RisultatiProvider>
            <ProfileProvider>
              <ConsultantProvider>
                <ConsultantStepProvider>
                  <RequestProvider>
                    <RegistrationStepProvider>
                      <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/request" exact component={Request} />
                        <Route path="/iscriviti" exact component={SignUp} />
                        <Route
                          path="/registrazione-consulente"
                          exact
                          component={
                            auth.loggedIn ? RegistrationConsultant : SignUp
                          }
                        />
                        <Route path="/home-v2" exact component={HomeV2} />
                        <Route path="/about" exact component={AboutPage} />
                        <Route path="/service" exact component={ServicePage} />
                        <Route
                          path="/service-details"
                          exact
                          component={ServiceDetails}
                        />
                        <Route path="/project" exact component={ProjectPage} />
                        <Route path="/blog" exact component={BlogPage} />
                        <Route path="/team" exact component={TeamPage} />
                        <Route path="/risultati" exact component={TeamPage} />
                        <Route
                          path="/profilo"
                          exact
                          component={ProfiloUtente}
                        />
                        <Route
                          path="/crea-articolo"
                          exact
                          component={CreaArticolo}
                        />
                        <Route
                          path="/consulente/:nome"
                          exact
                          render={() => {
                            return <ProfiloConsulente />;
                          }}
                        />
                        <Route
                          path="/modifica-profilo"
                          exact
                          component={UpdateProfile}
                        />
                        <Route
                          path="/modifica-articolo"
                          exact
                          component={ModificaArticolo}
                        />
                        <Route path="/pricing" exact component={PricingPage} />
                        <Route path="/contact" exact component={ContactPage} />
                        <Route
                          path="/blog-details/:ome"
                          exact
                          component={BlogDetails}
                        />
                        <Route path="*" exact component={ErrorPage} />
                      </Switch>
                    </RegistrationStepProvider>
                  </RequestProvider>
                </ConsultantStepProvider>
              </ConsultantProvider>
            </ProfileProvider>
          </RisultatiProvider>
        </BlogProvider>
      </SubscriptionProvider>
    </BrowserRouter>
  );
}
export default AppRoute;
