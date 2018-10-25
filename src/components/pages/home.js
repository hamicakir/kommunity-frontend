import React from 'react';
import { withNamespaces } from 'react-i18next';

import Header from '@/components/common/header';
import FindCommunities from '@/components/common/find-communities';
import Footer from '@/components/common/footer';

class Home extends React.Component {
  render() {
    const { t, i18n } = this.props;
    return (
      <div>
        <Header />
        <div className="home">
          { t('hello')}
          <button onClick={() => i18n.changeLanguage('tr-TR')}>Türkçe</button>
          <button onClick={() => i18n.changeLanguage('en-US')}>English</button>
      </div>
        <FindCommunities/>
        <Footer/>
      </div>
    );
  }
}

export default withNamespaces("translations")(Home);
