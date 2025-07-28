import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      darkMode: false
    };
  }

  handleModeToggle = () => {
    this.setState(prevState => ({
      darkMode: !prevState.darkMode
    }));
  };

  render() {
    const { darkMode } = this.state;
    const modeClass = darkMode ? "dark" : "light";
    
    return (
      <div className={`App ${modeClass}`}>
        <button onClick={this.handleModeToggle}>
          {darkMode ? "Light" : "Dark"} Mode
        </button>
        {/* Rest of your app content */}
      </div>
    );
  }
}

export default App;