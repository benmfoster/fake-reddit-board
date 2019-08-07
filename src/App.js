import React from 'react';
import Axios from 'axios';

class App extends React.Component {

  constructor(props) {
    super(props)
    const boardPosts = [];
    const user = {};
    const newBoardPosts = [];
    const email = '';
    const password = '';
    const boardPostText = '';
    const isLoggedIn = false;
    const isGuest = false;
    this.state = { email, password, boardPosts, user, newBoardPosts, boardPostText, isLoggedIn, isGuest };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.deleteBoardPost = this.deleteBoardPost.bind(this);
}

handleChange(event) {
  const name = event.target.name;
  this.setState({[name]: event.target.value});
}

handleSubmit(event) {
  event.preventDefault();
  var params = {
    text: this.state.boardPostText,
    user_id: localStorage.getItem('current_user_id')
  }
  Axios.post('https://sleepy-dawn-59018.herokuapp.com/api/board_posts', params).then(response => {
    console.log("Success!", response.data);
    const posts = this.state.newBoardPosts;
    posts.unshift(response.data);
    this.setState({newBoardPosts: posts});
  });
}

handleLogin(event) {
  event.preventDefault();
  var params = {
    email: this.state.email,
    password: this.state.password
  };
  Axios.post("https://sleepy-dawn-59018.herokuapp.com/api/sessions", params).then(response => {
            Axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
            localStorage.setItem('jwt', response.data.jwt);
            localStorage.setItem('current_user_id', response.data.user_id);
            this.setState({isLoggedIn: true})
            this.fetch();
          })
}

deleteBoardPost(post, i) {
  Axios.delete('https://sleepy-dawn-59018.herokuapp.com/api/board_posts/' + post.id).then(response => {
    console.log("Success!", response.data);
    let arr = this.state.boardPosts;
    arr.splice(i, 1);
    this.setState({boardPosts: arr});
  });
}

deleteButton(post, i) {
  if(localStorage.getItem('current_user_id') == post.user_id) {
    return (<div class="news-footer">
    <button value="Delete" class="btn btn-danger"
    onClick={() => { this.deleteBoardPost(post, i) }} />
    </div>);
  } else {
    return null;
  }
}

displayNewBoardPosts() {
  if (this.state.newBoardPosts.length > 0) {
    return (
      this.state.newBoardPosts.map((boardPost, i) => (
        <div class="col-md-12">
          <article class="post">
            <div class="news-container">
            <span class="news-category">
                <a href={'https://sleepy-dawn-59018.herokuapp.com/users/' + boardPost.user_id}> 
                <img src={boardPost.user_picture} class="author-image" alt="" /><br />        
                  {boardPost.authored_by} 
                </a>
            </span>
              <span class="news-date">{boardPost.created_at}</span>
                <div class="news-entry">
                  <p>{boardPost.text}</p>
                </div>
            </div>
            {this.deleteButton(boardPost, i)}            
          </article>
        </div>
      ))
    )
  }
}

continueAnyway() {
  this.setState({isLoggedIn: true, isGuest: true})
  this.fetch();
}

login() {
  return (
    <div>  
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalCenterTitle">Fake Reddit Board 👑 Login</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
              <div class="login">
    <div class="container col-xs-12">
      <form onSubmit={this.handleLogin}>
        <div class="form-group" onSubmit={this.handleLogin}>
          <label>Email:</label>
          <input type="email" class="form-control" placeholder="email." name="email" value={this.state.email} onChange={this.handleChange} />
        </div>
        <div class="form-group">
          <label>Password:</label>
          <input type="password" class="form-control" placeholder="password." name="password" value={this.state.password} onChange={this.handleChange} />
        </div>
        <input type="submit" class="btn btn-primary" value="Submit"/>
      </form>
    </div>
  </div>
              </div>
              <div class="modal-footer">
                <a href="https://sleepy-dawn-59018.herokuapp.com"><button type="button" class="btn btn-secondary" data-dismiss="modal">Back to Fake Reddit (Signup)</button></a>&nbsp;&nbsp;&nbsp;&nbsp;
                <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={() => { this.continueAnyway() }}>Continue Anway</button>
              </div>
            </div>
          </div>
        
        </div>
 
  )
}

logout() {
  localStorage.removeItem("jwt");
  localStorage.removeItem("current_user_id");
}

componentWillMount() {
  if(localStorage.getItem('jwt')) {
    this.setState({isLoggedIn: true,})
    this.fetch();
  }
 }

fetch() {
  Axios.get('https://sleepy-dawn-59018.herokuapp.com/api/board_posts').then(response => {
    this.setState({
      boardPosts: response.data.reverse(),
    });  
 });
  if(this.state.isLoggedin == true && this.state.isGuest == false) {
    Axios.get('https://sleepy-dawn-59018.herokuapp.com/api/users/' + localStorage.getItem('current_user_id')).then(response => {
      this.setState({
        user: response.data,
      });
    });
  }
 }

 mainPage() {
   return (
    <div className="App">
    <div id="app">
  <div class="site-main">


  <div class="topbar">
    <div class="container">
      <div class="row">
        <div class="col-sm-6">
          <ul class="social-icon">
            <li class="hvr-wobble-vertical"><a href="/">👑</a></li>
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
          <h1 class="site-title"><a href="/">Fake Reddit <span class="hvr-wobble-vertical">📍</span> board</a><span>.</span> <span class="hvr-wobble-vertical">🐋</span></h1>
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
            <li class={(this.state.isGuest ? 'hidden' : 'cta')}><a href={'https://sleepy-dawn-59018.herokuapp.com/users/' + this.state.user.id}>My Profile</a></li>
            <li class={(this.state.isGuest ? 'hidden' : 'cta')} onClick={() => { this.logout() }}><a href="https://sleepy-dawn-59018.herokuapp.com/logout">Logout</a></li>
          <li class={(this.state.isGuest ? 'cta' : 'hidden')} onClick={() => { this.setState({ isGuest: false }) }}><a href='/'>Login</a></li>
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Github <span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><a href="https://github.com/benmfoster/fake-reddit-board">Frontend Repository (React.js)</a></li>
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
              <textarea type="text" class="input-lg form-control" rows="10" placeholder="Consume the internet. " name="boardPostText" value={this.state.boardPostText} onChange={this.handleChange} />
              <div class="news-footer">
            <input type="submit" value="Submit" class="btn btn-primary btn-lg" />
            </div>
          </form>

              {this.displayNewBoardPosts()}
            
            {this.state.boardPosts.map((boardPost, i) => (
              <div class="col-md-12">
                <article class="post">
                  <div class="news-container">
                  <span class="news-category">
                    
                      <a href={'https://sleepy-dawn-59018.herokuapp.com/users/' + boardPost.user_id}>
                        
                      <img src={boardPost.user_picture} class="author-image" alt="" /><br />  
                        {boardPost.authored_by} 
                      </a>
  
                  </span>
                  <br />
                    <span class="news-date">{boardPost.created_at}</span>
                      <div class="news-entry">
                        <p>{boardPost.text}</p>
                      </div>
                  </div>
                  {this.deleteButton(boardPost, i)}            
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


  render() {
    if(this.state.isLoggedIn || this.state.isGuest) {
      return this.mainPage();
    } else {
      return this.login();
    }
  }

}
    

export default App;