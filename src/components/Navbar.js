import React, { Component } from 'react';
import logo from '../logo.png';



class Navbar extends Component {

  render() {
    
    return (
      <div>
        <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex text-center">
              <div className="content mr-auto ml-auto">
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={logo} className="App-logo" alt="logo" width="200" height="200"/>
                </a>
                <h1>Exchange dApp</h1>
                <nav><p><b>Account:</b> {this.props.account}</p></nav>
               
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
