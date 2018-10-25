import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';

import Home from '@/components/pages/home';
import Login from '@/components/pages/login';
import Logout from '@/components/pages/logout';
import MemberProfile from '@/components/pages/member-profile';
import CommunityList from '@/components/pages/communities';
import i18n from '@/configs/i18n';
import '@/css';

const App = () => (
  <I18nextProvider i18n={i18n}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/logout" component={Logout} />
      <Route exact path="/member/profile" component={MemberProfile} />
      <Route exact path="/communities" component={CommunityList} />
    </Switch>
  </I18nextProvider>
);

export default App;
