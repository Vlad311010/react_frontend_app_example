import Index from "./components/pages/Index";
import Login from "./components/pages/Login";
import MyHeroes from "./components/pages/MyHeroes";
import HeroesShop from "./components/pages/HeroesShop";
import Inventory from "./components/pages/Inventory";
import Shop from "./components/pages/Shop";
import Registraion from "./components/pages/Registration"

import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageContainer from "./components/PageContainer";
import { UserContext } from "./components/UserContext";
import RoutingUtils from "./RoutingUtils";

import "./css/styles.css";
import "./css/bootstrap/css/bootstrap.css";
import "./css/bootstrap/css/bootstrap-reboot.css"
import "./css/bootstrap/css/bootstrap-utilities.css"
import "./css/bootstrap-icons/font/bootstrap-icons.css"
import "./css/bootstrap/js/bootstrap.bundle.min.js"
import { useState } from "react";
import Game from "./components/pages/Game.js";


export default function App() {
  const [user, setUser] = useState("");
  const [ap, setAP] = useState(0);
  const [money, setMoney] = useState(0);

  return (
    <>
      <UserContext.Provider value = {{ user, ap, money, setUser, setAP, setMoney }}>
        <BrowserRouter>
          <Routes>

            <Route path={RoutingUtils.ToIndex} element={
              <PageContainer showNavbar={true} authorizedOnly={false}
                pageComponent={() => <Index />}
              />}
            />

            <Route path={RoutingUtils.ToLogin} element={  
              <PageContainer showNavbar={false} authorizedOnly={false}
                pageComponent={() => <Login />}
              />}
            />

            <Route path={RoutingUtils.ToRegistration} element={  
              <PageContainer showNavbar={true} authorizedOnly={false}
                pageComponent={() => <Registraion />}
              />}
            />

            
            <Route path={RoutingUtils.ToHeroes} element={  
              <PageContainer showNavbar={true} authorizedOnly={true}
                pageComponent={() => <MyHeroes />}
              />}
            />

            <Route path={RoutingUtils.ToHeroesShop} element={  
              <PageContainer showNavbar={true} authorizedOnly={true}
                pageComponent={() => <HeroesShop />}
              />}
            />

            <Route path={RoutingUtils.ToInventory} element={  
              <PageContainer showNavbar={true} authorizedOnly={true}
                pageComponent={() => <Inventory />}
              />}
            />

            <Route path={RoutingUtils.ToShop} element={  
              <PageContainer showNavbar={true} authorizedOnly={true}
                pageComponent={() => <Shop />}
              />}
            />

            <Route path={RoutingUtils.ToGame} element={  
              <PageContainer showNavbar={true} authorizedOnly={true}
                pageComponent={() => <Game />}
              />}
            />

          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}


