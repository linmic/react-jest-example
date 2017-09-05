import React, { Component } from 'react';
import B from './B';

class A extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showTitle: false,
    };
  }

  foo() {
    console.log('foo');
  }

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
