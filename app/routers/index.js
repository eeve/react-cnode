import React from 'react';
import { render } from 'react-dom';
import { Route, IndexRoute } from 'react-router';

import App from '../containers/Cnode';
import Detail from '../containers/Detail';

export default (
	<Route path ='/'>
	  <IndexRoute component={App} />
	  <Route path="detail/:id" component={Detail} />
  </Route>
)
