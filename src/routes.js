import React from 'react';
import { Route } from 'react-router';
import { Switch } from 'react-router-dom';
import { lazyRender } from '@dealersocket/react-common';

export const Routes = () => {
  const profile = lazyRender(() => import('./components/profile/profile.container'), 'ProfileContainer');
  const dashboard = lazyRender(() => import('./components/dashboard/dashboard.container'), 'DashboardContainer');

  return(
    <div className='main-content'>
      <Switch>
        <Route path="/dashboard" component={ dashboard }></Route>
        <Route path="/profile" component={ profile }></Route>
      </Switch>
    </div>
  )
}