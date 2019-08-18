import React, {Component} from "react";
import '../styles/App.scss';
import RegistrationForm from "./form";
import Information from "./information";

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      next: false,
    }
  }

  componentWillMount() {
  }

  onNext = () => {
    this.setState({next: true});
  };

  render() {
    return (
      <div className="app-container">
        <div className="header">
          <div className="logo"/>
        </div>
        <div className="main">
          {!this.state.next ?
            <Information onNext={this.onNext}/>
            :
            <RegistrationForm/>
          }
        </div>
      </div>
    );
  }
}
