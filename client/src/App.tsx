import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages';
import LoginPage from './pages/login';
import SignupPage from './pages/signup';
import ChatPage from './pages/chat';
import FindReadersPage from './pages/find-readers';
import Feeds from './pages/feeds';
import RateNovelPage from './pages/rate-novel';
import MyFriendsPage from './pages/my-friends'; // Add this import
import ProfilePage from './pages/profile'; // Add this import

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/chat" component={ChatPage} />
        <Route path="/find-readers" component={FindReadersPage} />
        <Route path="/feeds" component={Feeds} />
        <Route path="/rate-novel" component={RateNovelPage} />
        <Route path="/my-friends" component={MyFriendsPage} /> {/* Add this route */}
        <Route path="/profile" component={ProfilePage} /> {/* Add this route */}
      </Switch>
    </Router>
  );
};

export default App;
