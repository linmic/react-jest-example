import React, { Component } from 'react';
import B from './B';

class A extends Component {
  state = {
    count: 0,
    showTitle: false,
  };

  foo = () => {
    this.setState(state => ({ count: state.count + 1 }));
  };

  render() {
    const { bar } = this.props;
    const { showTitle } = this.state;
    const titleStyle = showTitle ? undefined : { display: 'none' };

    return (
      <div>
        <h1 style={titleStyle}>title</h1>
        <button className="btn-foo" onClick={this.foo}>click me</button>
        <button className="btn-bar" onClick={bar}>click me</button>
        <B />
      </div>
    );
  }
}

export default A;
