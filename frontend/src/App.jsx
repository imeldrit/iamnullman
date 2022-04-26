import React, { useEffect, lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Loading from "./components/loading/loading";
import FourOhFourPage from "./components/404/404";
import Navbar from "../src/components/navbar/navbar";
import { initNewLanguage } from "./helpers/initNewLanguage";
import Aos from "aos";
import "aos/dist/aos.css";

const IndexPage = lazy(() => import("./pages/index/index"));
const PartnerPage = lazy(() => import("./pages/partners/partners"));
const Projects = lazy(() => import("./pages/projects/projects"));

export default function App() {
const [loading, setLoading] = React.useState(true);

useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    initNewLanguage(localStorage.getItem("language") || "en");
  }, []);
setTimeout(() => {
    setLoading(false);
}, 2000);
    useEffect(() => { }, []);


        return (<>
            <Router>
                <HelmetProvider>
                    <Suspense fallback={<Loading />}>
                       <Navbar />
                        {loading ? <Loading /> : (
                        <Switch>
                            <Route
                                path='/'
                                exact
                                component={IndexPage}
                            />
                            <Route
                            path='/partners'
                            exact
                            component={PartnerPage}
                            />
                            <Route
                            path='/projects'
                            exact
                            component={Projects}
                            />
                            <Route component={FourOhFourPage} />
                        </Switch>
                        )}
                    </Suspense>
                </HelmetProvider>
            </Router>
        </>);
   
};