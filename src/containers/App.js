import React from 'react';

import Stories from '../components/Stories';

export default class App extends React.Component {
  render(){
    return (
      <div className="AppContainer">
        <p>App</p>
        <Stories />
      </div>
    );
  }
};
