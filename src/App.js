import React from 'react';
import Axios from 'axios';

class App extends React.Component {

  constructor(props) {
    super(props)
    const boardPosts = [];
    const user = {};
    const newBoardPost = {};
    this.state = { boardPosts, user, newBoardPost, value: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteBoardPost = this.deleteBoardPost.bind(this);
}

handleChange(event) {
  this.setState({value: event.target.value});
}

handleSubmit(event) {
  console.log(this.state.value);
  event.preventDefault();
  var params = {
    text: this.state.value,
    user_id: localStorage.getItem('current_user_id')
  }
  Axios.post('http://sleepy-dawn-59018.herokuapp.com/api/board_posts', params).then(response => {
    console.log("Success!", response.data);
    this.setState({newBoardPost: response.data});
  }).catch(error => {
    this.errors = error.response.data.errors;
    this.status = error.response.status;
  });
}

deleteBoardPost(post, i) {
  Axios.delete('http://sleepy-dawn-59018.herokuapp.com/api/board_posts/' + post.id).then(response => {
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

async componentDidMount() {
  const [firstResponse, secondResponse] = await Promise.all([
    Axios.get('http://sleepy-dawn-59018.herokuapp.com/api/board_posts'),
    Axios.get('http://sleepy-dawn-59018.herokuapp.com/api/users/' + localStorage.getItem('current_user_id'))
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
                  <textarea type="text" class="input-lg form-control" rows="10" placeholder="Consume the internet. " value={this.state.value} onChange={this.handleChange} />
                  <div class="news-footer">
                <input type="submit" value="Submit" class="btn btn-primary btn-lg" />
                </div>
              </form>

              
                  <div class="col-md-12">
                    <article class="post">
                      <div class="news-container">
                      <span class="news-category">
                          <a href={'https://sleepy-dawn-59018.herokuapp.com/users/' + this.state.newBoardPost.user_id}>       
                            {this.state.newBoardPost.authored_by} 
                          </a>
                      </span>
                        <span class="news-date">{this.state.newBoardPost.created_at}</span>
                          <div class="news-entry">
                            <p>{this.state.newBoardPost.text}</p>
                          </div>
                      </div>
                      {this.deleteButton(this.state.newBoardPost)}            
                    </article>
                  </div>
                
                {this.state.boardPosts.map((boardPost, i) => (
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
    }

export default App;