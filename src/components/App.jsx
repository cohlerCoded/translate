import React, { Component } from "react";
import ColorContext from "../contexts/ColorContext";
import LanguageContext from "../contexts/LanguageContext";
import UserCreate from "./UserCreate";

class App extends Component {
  state = { language: "english" };
  onLanguageChange = (language) => {
    this.setState({ language });
  };
  componentDidMount() {
    console.log(this.state);
  }
  componentDidUpdate() {
    console.log(this.state);
  }
  render() {
    return (
      <div className="ui container">
        <div className="item">
          Select a language:
          <i
            onClick={() => this.onLanguageChange("english")}
            className="flag us"
          />
          <i
            onClick={() => this.onLanguageChange("dutch")}
            className="flag nl"
          />
        </div>
        <LanguageContext.Provider value={this.state.language}>
          <ColorContext.Provider value="red">
            <UserCreate />
          </ColorContext.Provider>
        </LanguageContext.Provider>
      </div>
    );
  }
}

export default App;
