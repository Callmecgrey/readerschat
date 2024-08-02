import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages';
import LoginPage from './pages/login';
import SignupPage from './pages/signup';
import ChatPage from './pages/chat';
import FindReadersPage from './pages/find-readers';
import UploadStatusPage from './pages/upload-status';
import RateNovelPage from './pages/rate-novel';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/chat" component={ChatPage} />
        <Route path="/find-readers" component={FindReadersPage} />
        <Route path="/upload-status" component={UploadStatusPage} />
        <Route path="/rate-novel" component={RateNovelPage} />
      </Switch>
    </Router>
  );
};

export default App;
