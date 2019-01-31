import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import myComponent from './myComponent';
import myOtherComponent from './myOtherComponent';

function App(){
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={myComponent} />
        <Route path='/myOtherComponent' component={myOtherComponent} />
      </Switch>
    </div>
  );
}

export default App;