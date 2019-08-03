import React from 'react';
import Axios from 'axios';

class App extends React.Component {

  constructor(props) {
    super(props)
    const boardPosts = [];
    const user = {};
    this.state = { boardPosts, user, value: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange(event) {
  this.setState({value: event.target.value});
}

handleSubmit(event) {
  alert('Congratlations:' + this.state.value);
  event.preventDefault();
  var params = {
    text: this.state.value,
    user_id: localStorage.getItem('current_user_id')
  }
  Axios.post('http://localhost:3000/api/board_posts', params).then(response => {
    console.log("Success!", response.data);
  }).catch(error => {
    this.errors = error.response.data.errors;
    this.status = error.response.status;
  });
}

async componentDidMount() {
  const [firstResponse, secondResponse] = await Promise.all([
    Axios.get('http://localhost:3000/api/board_posts'),
    Axios.get('http://localhost:3000/api/users/' + localStorage.getItem('current_user_id'))
  ])
  this.setState({
    boardPosts: firstResponse.data.reverse(),
    user: secondResponse.data,
  });
  console.log(this.state.user)
 }


  render() {
     return (<div className="App">
        <div id="app">
      <div class="site-main">


      <div class="topbar">
        <div class="container">
          <div class="row">
            <div class="col-sm-6">
              <ul class="social-icon">
                <li><a href="/">👑</a></li>
              </ul>
            </div>

            <div class="col-sm-6">
              <ul class="topbar-menu">
                <li><a href="https://sleepy-dawn-59018.herokuapp.com">Return to Fake Reddit</a></li>
              </ul>
            </div>

          </div>
        </div>
      </div>


        {/* <!-- header --> */}
      <div class="header">
        <div class="container">
          <div class="row">
  
            <div class="col-sm-12">
              <h1 class="site-title"><a href="/">Fake Reddit 📍 board</a><span>. exclusive </span> 🐋</h1>
              <p class="site-description">Members-only pillorying topics of social interest.</p>
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
              <li class="cta"><a href={'https://sleepy-dawn-59018.herokuapp.com/users/' + this.state.user.id}>My Profile</a></li>
              <li class="cta"><a href="https://sleepy-dawn-59018.herokuapp.com/logout">Logout</a></li>
              <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Github <span class="caret"></span></a>
                <ul class="dropdown-menu">
                  <li><a href="https://github.com/benmfoster/fake_reddit_board">Frontend Repository (React.js)</a></li>
                  <li><a href="https://github.com/benmfoster/fake_reddit">Backend Repository (Ruby on Rails)</a></li>
                </ul>
              </li> 
              <li class="cta"><a href="https://benmfoster.github.io">About Me</a></li>
            </ul>
            {/* <!-- .navbar-nav --> */}
          </div> {/* <!-- .navbar-collapse --> */}
        </div>
        {/* <!-- .container --> */}
      </nav>
      {/* <!-- .navbar --> */}
     
      <div class="post-entry">
        <div class="container">
          <div class="row">

            
            <div class="col-md-8 col-md-offset-2">
              <div class="row">
              <form onSubmit={this.handleSubmit}>
                <label>
                  Name:
                  <textarea value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
              </form>

                
                        {this.state.boardPosts.map((boardPost) => (
                          <div class="col-md-12">
                            <article class="post">
                              <div class="news-container">
                              <span class="news-category">
                                  <a href={'https://sleepy-dawn-59018.herokuapp.com/users/' + boardPost.user_id}>       
                                    {boardPost.authored_by} 
                                  </a>
                              </span>
                                <span class="news-date">{boardPost.created_at}</span>
                                  <div class="news-entry">
                                    <p>{boardPost.text}</p>
                                  </div>
                              </div>
                            </article>
                          </div>
                        ))}
                      </div>
                      

              </div>
            </div>

          </div>
        </div>
      </div>
      <div class="footer">
        <div class="container">
          <div class="row">
  
            <div class="col-md-4">
              <h3>Fake Reddit<span>.</span></h3>
            </div>
            {/* <!-- .col-md-4 --> */}
  
          </div>
          {/* <!-- .row --> */}
        </div>
        {/* <!-- .container --> */}
      </div>
      {/* <!-- .footer --> */}
    </div>
      </div>
  )
      }
    }

export default App;