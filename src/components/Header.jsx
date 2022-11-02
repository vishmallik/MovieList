import React from "react";
import SideBar from "./SideBar";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebar: false,
    };
  }
  handleClick = () => {
    this.setState((prevState) => {
      return { sidebar: !prevState.sidebar };
    });
  };
  render() {
    return (
      <div className="bg">
        <div className="container header">
          {this.state.sidebar ? (
            <i className="fas fa-circle-xmark" onClick={this.handleClick}></i>
          ) : (
            <i className="fas fa-bars" onClick={this.handleClick}></i>
          )}

          <h1>🍿 MovieXone 🍿</h1>
          {this.state.sidebar ? <SideBar handler={this.handleClick} /> : null}
        </div>
      </div>
    );
  }
}

export default Header;
