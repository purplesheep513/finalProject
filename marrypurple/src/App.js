import React from 'react';
import { Route } from 'react-router-dom';
import GramPage from './pages/GramPage';
import BadBoardPage from './pages/BadBoardPage';
import FaqPage from './pages/FaqPage';
import WorkPage from './pages/WorkPage';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import MarryLoginPage from './pages/MarryLoginPage';
import RegistPage from './pages/RegistPage';
import FindPwPage from './pages/FindPwPage';
import ChangePwPage from './pages/ChangePwPage';


const App = () => {
  return (
    <>
      <Route component={MainPage} path="/" exact/>
      <Route component={LoginPage} path="/login"/>
      <Route component={MarryLoginPage} path="/marrylogin"/>
      <Route component={RegistPage} path="/regist"/>
      <Route component={FindPwPage} path="/findPw"/>
      <Route component={ChangePwPage} path="/changePw"/>
      <Route component={GramPage} path="/gram_main"/>
      <Route component={BadBoardPage} path="/board_bad"/>
      <Route component={FaqPage} path="/FAQ"/>
      <Route component={WorkPage} path="/work"/>
    </>
  )
}

export default App;
