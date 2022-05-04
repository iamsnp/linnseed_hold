import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1,
  };

  incrementCount = () => {
    console.log("Increment  count");
  };
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.incrementCount()}
          className="btn btn-secondary btn-sm"
        >
          Incement
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";

    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
