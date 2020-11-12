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
import MatchingPage from './pages/MatchingPage'
import BackUserPage from './pages/BackUserPage';

const App = () => {
  return (
    <>
      <Route component={MainPage} path="/" exact/>
      <Route component={LoginPage} path="/login"/>
      <Route component={MarryLoginPage} path="/marrylogin"/>
      <Route component={RegistPage} path="/register"/>
      <Route component={FindPwPage} path="/findPw"/>
      <Route component={ChangePwPage} path="/changePw"/>
      <Route component={GramPage} path="/gram_main"/>
      <Route component={BadBoardPage} path="/board_bad"/>
      <Route component={FaqPage} path="/FAQ"/>
      <Route component={WorkPage} path="/work"/>
      <Route component={MatchingPage} path="/match"/>
      <Route component={BackUserPage} path="/back"/>
    </>
  )
}

export default App;
