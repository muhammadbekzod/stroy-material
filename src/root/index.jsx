import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import {Container } from './style';
import Sidebar from '../components/Sidebar';
import { sidebar } from '../utils/sidebar';
import Notfound from '../components/Notfound';
import KundalikHForm from '../components/Form/KundalikHisobotForm/KundalikHForm';
import Generic from '../pages/Generic';


export const Root = () => {
  return (
    <Router>
      <Container>
        <Switch>
          {sidebar.map(({ id, path }) => (
            <Route key={id} path={path} component={Sidebar} />
          ))}
        </Switch>

        <Switch>
          {sidebar.map(({ id, path, Component }) => (
            <Route  key={id} path={path} component={Component} />
          ))}
          <Route exact path='/'>
            <Redirect  to='/kundalik' />
          </Route>
          <Route path='/kundalikform' component={KundalikHForm} />
          <Route path='/nasiyaform' component={Generic}/>
          <Route path='/hisobotform' component={Generic}/>
          <Route path='*' component={Notfound} />
        </Switch>
      </Container>
    </Router>
  );
};
export default Root;
