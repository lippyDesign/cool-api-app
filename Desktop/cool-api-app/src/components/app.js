import React, { Component } from 'react';

import Youtube from '../containers/youtube/Youtube';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>TRENDING NOW</h1>
        <h2>Here are today's most popular topics on social media</h2>
        <section>
          <Youtube />
        </section>
      </div>
    );
  }
}
