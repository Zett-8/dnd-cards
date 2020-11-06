import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import ErrorBoundary from './hocs/errorBoundary'
import Page404 from './components/404'

import LandingContainer from './containers/landing'
import VerticalListContainer from './containers/vertical'
import HorizontalListContainer from './containers/horizontal'

export default () => (
  <ErrorBoundary>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingContainer} />
        <Route exact path="/vertical" component={VerticalListContainer} />
        <Route exact path="/horizontal" component={HorizontalListContainer} />
        <Route component={Page404} />
      </Switch>
    </BrowserRouter>
  </ErrorBoundary>
)
