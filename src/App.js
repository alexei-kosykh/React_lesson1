import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }
  indexAdd = () => {
    this.setState({
      index: ++this.state.index,
    });
  };
  indexSubtract = () => {
    this.setState({
      index: --this.state.index,
      index: this.state.index === -1 ? 0 : this.state.index,
    });
  };
  indexDump = () => {
    this.setState({
      index: 0,
    });
  };

  render() {
    return (
      <div className="wrapper">
        <div className="counter">
          <div className="counter-text">{this.state.index}</div>
        </div>
        <div className="buttons">
          <div onClick={this.indexAdd} className="button button-green">
            <img className="button-image-size" src="/images/plus.png" />
          </div>
          <div onClick={this.indexDump} className="button button-yellow">
            <img className="button-image-size" src="/images/process.png" />
          </div>
          <div onClick={this.indexSubtract} className="button button-red">
            <img className="button-image-size" src="/images/minus.png" />
          </div>
        </div>
      </div>
    ); // JSX - это отдельный синтаксис
  }
}

export default App;
