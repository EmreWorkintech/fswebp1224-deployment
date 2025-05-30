import React from 'react';
import './index.css';
import LoginForm from './components/LoginForm';
import Header from './components/Header';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';
import { Switch, Route } from 'react-router-dom';
import { AuthContextProvider } from './contexts/AuthContext';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Header />
        <Switch>
          <PrivateRoute exact path="/">
            <FriendsList />
          </PrivateRoute>
          <Route path="/login">
            <LoginForm />
          </Route>
          <PrivateRoute exact path="/friends">
            <FriendsList />
          </PrivateRoute>
          <PrivateRoute path="/friends/add">
            <AddFriend />
          </PrivateRoute>
        </Switch>
      </AuthContextProvider>
    </div>
  );
}

export default App;
