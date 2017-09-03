import React, { Component } from 'react';

class A extends Component {
  foo() {
    console.log('foo');
  }

  render() {
    return (
      <div>
        <button className="btn-foo" onClick={this.foo}>click me</button>
      </div>
    );
  }
}

export default A;
