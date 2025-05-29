import { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom/cjs/react-router-dom.min';
import { AuthContext } from '../contexts/AuthContext';

export default function PrivateRoute({ children, ...rest }) {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <Route {...rest}>{isLoggedIn ? children : <Redirect to="/login" />}</Route>
  );
}
