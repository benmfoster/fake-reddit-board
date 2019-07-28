import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div id="app">
    <div class="site-main">
      {/* <!-- header --> */}
    <div class="header">
      <div class="container">
        <div class="row">

          <div class="col-sm-8">
            <h1 class="site-title"><router-link to="/">Fake Reddit</router-link><span>.</span></h1>
            <p class="site-description">Misanthropes pile-driving the internet.</p>
          </div>
          {/* <!-- .col-sm-6 --> */}

        </div>
        {/* <!-- .row --> */}
      </div>
      {/* <!-- .container --> */}
    </div>
    {/* <!-- .header --> */}
    {/* <!-- navbar --> */}
    <nav class="navbar navbar-default">
      <div class="container">
        {/* <!-- Brand and toggle get grouped for better mobile display --> */}
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#amalia-navbar-collapse" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          {/* <!-- .navbar-toggle --> */}
        </div>
        {/* <!-- .navbar-header --> */}

        {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
        <div class="collapse navbar-collapse" id="amalia-navbar-collapse">
          <ul class="nav navbar-nav">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Github <span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a href="https://github.com/benmfoster/fake_reddit_vue">Frontend Repository (Vue.js)</a></li>
                <li><a href="https://github.com/benmfoster/fake_reddit">Backend Repository (Ruby on Rails)</a></li>
              </ul>
              <li class="cta"><a href="https://benmfoster.github.io">About Me</a></li>
          </ul>
          {/* <!-- .navbar-nav --> */}
        </div> {/* <!-- .navbar-collapse --> */}
      </div>
      {/* <!-- .container --> */}
    </nav>
    {/* <!-- .navbar --> */}
    <router-view></router-view>
    <div class="footer">
      <div class="container">
        <div class="row">

          <div class="col-md-4">
            <h3>Fake Reddit Board<span>.</span></h3>
          </div>
          {/* <!-- .col-md-4 --> */}

        </div>
        {/* <!-- .row --> */}
      </div>
      {/* <!-- .container --> */}
    </div>
    {/* <!-- .footer --> */}
  </div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
    </div>
  );
}

export default App;
