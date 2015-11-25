import React from 'react';

import Stories from './Stories';

var stories = [
  {'title': 'Story with a cool title', 'text': 'A story also needs text so here it is.'},
  {'title': 'Another story with a title', 'text': 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata.'}
];

export default class App extends React.Component {
  render(){
    return (
      <div className="AppContainer">
        <p>App</p>
        <Stories stories={stories} />
      </div>
    );
  }
};
