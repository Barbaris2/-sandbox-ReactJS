import React, { Fragment, Component, Suspense } from 'react';

import Contacts from './components/Contacts';

const Profile = React.lazy(() => import('./components/Profile'));

class App extends Component {
  state = {
    showProfile: false
  };

  showProfileToggle = () => {
    this.setState(({ showProfile }) => ({
      showProfile: !showProfile
    }));
  };

  render() {
    const { showProfile } = this.state;

    return (
      <Fragment>
        <button onClick={this.showProfileToggle}>Toggle Profile</button>
        {showProfile ? (
          <Suspense fallback={<div>Loading...</div>}>
            <Profile />
          </Suspense>
        ) : (
          <Contacts />
        )}
      </Fragment>
    );
  }
}

export default App;
