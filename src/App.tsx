import React, { useEffect, useContext, createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useMediaQuery } from 'react-responsive'
import "./App.css";

import FilterIcon from "./Components/Res/filter.svg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";

import Layout from "./Components/Layout/Layout";
import PageHeader from "./Components/PageHeader/PageHeader";
import PageFooter from "./Components/PageFooter/PageFooter";
import Slider from "./Components/Slider/Slider";
import Calendar from "./Components/Calendar/Calendar";
import Events from "./Components/Events/Events";
import Map from "./Components/Map/Map";

import MainPage  from "./Pages/MainPage";
import LoginPage  from "./Pages/LoginPage";
import EventPage  from "./Pages/EventPage";
import AboutPage from "./Pages/AboutPage";
import TravelPage from "./Pages/TravelPage";

type AppState = {
  logged: boolean;
  isBigScreen?: boolean;
  isTabletOrMobile?: boolean;
  isPortrait?: boolean;
  isRetina?: boolean;
};

const AppContext = React.createContext<AppState>({ logged: false });

function Team13App() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

  var [appstate, SetAppState] = useState<AppState>({ logged: false, isBigScreen: isBigScreen, isTabletOrMobile: isTabletOrMobile, isPortrait: isPortrait, isRetina: isRetina });

  useEffect(() => {
    document.title = "Team 13";
  }, []);

  return (
    <AppContext.Provider value={appstate}>
      <Layout
        pageHeader={<PageHeader fixed transaprent />}
        pageFooter={<PageFooter />}
      >
        
          <Routes> 
            <Route path="/" element={<MainPage />}></Route>
            <Route path="/Login" element={<LoginPage />}></Route>
            <Route path="/About" element={<AboutPage />}></Route>

            <Route path="/Event" element={<EventPage />}>
              <Route path=":id" element={<EventPage />}></Route>
            </Route>

            <Route path="/Travel" element={<TravelPage />}>
              <Route path=":id" element={<TravelPage />}></Route>
            </Route>
          </Routes> 
        
      </Layout>
    </AppContext.Provider>
  );
}

export default Team13App;
export { AppContext };
export type { AppState };
