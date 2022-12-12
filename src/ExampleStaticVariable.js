import React from "react";

class Example extends React.Component {
    static email = "admin";

    state = {
        someStateData: 'World'
    };
// tao lop static user --> kt tren login --> trar ve tren header
  render() {
    const { someStateData } = this.state;
    // do work
    return <p>Hello {someStateData}</p>;
  }
}

export default Example