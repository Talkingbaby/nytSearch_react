import React from 'react';
import NavBar from './NavBar';
import Body from './body/Body';

export default class App extends React.Component {
  render() {
    return (
        <div>
            <NavBar />
            <Body />
        </div>
    );
  }
}