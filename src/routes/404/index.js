import React from 'react';
import logo from './../../assets/logo.svg';

class NotFound extends React.Component {
  backToHome = () => {
    this.props.history.push('/');
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Page not found 404.</p>
          <a className="App-link" onClick={this.backToHome.bind(this)}>
            Go to Home
          </a>
        </header>
      </div>
    );
  }
}

export default NotFound;
