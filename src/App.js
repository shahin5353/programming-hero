import React from 'react';
import { BrowserRouter as Router,Switch, Route, Redirect } from "react-router-dom";
import LoginPage from './pages/loginPage/LoginPage';
import registerPage from './pages/registerPage/registerPage';
import Header from './components/Header/Header';
import CoursePage from './pages/CoursePage/CoursePage';

function App() {
  const user = null;
  return (
    <Router>
       <Header/>
      <Switch>
       
          <Route exact path="/">
          {
          user ?
          <Redirect to="/course/programming-hero-bangla-web-course"/>
          :
          <Redirect to="/login"/>
          }
          </Route>
        
        <Route exact path="/login" component={LoginPage}/>
        <Route exact path="/register" component={registerPage}/>
        <Route exact path="/course/programming-hero-bangla-web-course" component={CoursePage}/>
      </Switch>
    </Router>
  );
}

export default App;
