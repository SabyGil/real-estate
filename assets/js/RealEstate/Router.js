import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';

export class Router extends Component = {
  render(){

  return(
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/realestate' component={RealEstate}/>
    </Switch>
    );
  }
}
// add a 404 page
//check if router is supposed to be inside jsx or outside
