import React from 'react';
import Axios from 'axios';

class App extends React.Component {

  constructor(props) {
    super(props)
    const boardPosts = [];

    for (let i = 0; i < 10; i++) {
        boardPosts.push({
            authored_by: boardPosts.authored_by,
        });
    }

    this.state = { boardPosts };
}

async componentDidMount() {
  const {data} = await Axios.get('http://localhost:3000/api/board_posts');
  this.setState({boardPosts: data});
  console.log(this.state.boardPosts);
 }


  render() {
     return (<div className="App">
        <div id="app">
      <div class="site-main">
        {/* <!-- header --> */}
      <div class="header">
        <div class="container">
          <div class="row">
  
            <div class="col-sm-12">
              <h1 class="site-title"><a href="/">Fake Reddit 📍 board</a><span>. exclusive</span></h1>
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
              <li><a href="https://sleepy-dawn-59018.herokuapp.com">Return to Fake Reddit</a></li>
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

                <div class="col-md-12">
                  <article class="post">
                    <div class="news-container">
                      <span class="news-category"><a href="archive.html">Travel</a></span>
                      <h2 class="news-title"><a href="single.html">Make good relationship with our partner</a></h2>
                      <span class="news-date">August 22, 2016</span>
                      <div class="news-image">
                        <img src="img/amalia-image-blog-03.jpg" alt="" />
                      </div>
                      <div class="news-entry">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis lectus metus, at posuere neque. Sed pharetra nibh eget orci convallis at posuere leo convallis. Sed blandit augue vitae augue scelerisque bibendum. Vivamus sit amet libero turpis, non venenatis urna. In blandit, odio convallis suscipit venenatis, ante ipsum cursus augue...</p>
                      </div>
                      <div class="news-footer">
                        <ul>
                          <li><i class="fa fa-calendar-check-o"></i> 3 min read</li>
                          <li><i class="fa fa-comments-o"></i> <a href="">3 comments</a></li>
                          <li><i class="fa fa-fire"></i> 32K Views</li>
                        </ul>
                      </div>
                    </div>
                  </article>
                </div>

                <div class="col-md-12">
                  <article class="post">
                    <div class="news-container">
                      <span class="news-category"><a href="archive.html">Travel</a></span>
                      <h2 class="news-title"><a href="single.html">Choose a good place to your startup office</a></h2>
                      <span class="news-date">July 17, 2016</span>
                      <div class="news-image">
                        <img src="img/amalia-image-blog-04.jpg" alt=""></img>
                      </div>
                      <div class="news-entry">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis lectus metus, at posuere neque. Sed pharetra nibh eget orci convallis at posuere leo convallis. Sed blandit augue vitae augue scelerisque bibendum. Vivamus sit amet libero turpis, non venenatis urna. In blandit, odio convallis suscipit venenatis, ante ipsum cursus augue...</p>
                      </div>
                      <div class="news-footer">
                        <ul>
                          <li><i class="fa fa-calendar-check-o"></i> 2 min read</li>
                          <li><i class="fa fa-comments-o"></i> <a href="">0 comments</a></li>
                          <li><i class="fa fa-fire"></i> 910 Views</li>
                        </ul>
                      </div>
                    </div>
                  </article>
                </div>

                <div class="col-md-12">
                  <article class="post">
                    <div class="news-container">
                      <span class="news-category"><a href="archive.html">Travel</a></span>
                      <h2 class="news-title"><a href="single.html">How to have a holiday nature in the Paris</a></h2>
                      <span class="news-date">August 22, 2016</span>
                      <div class="news-image">
                        <img src="img/amalia-image-blog-05.jpg" alt=""></img>
                      </div>
                      <div class="news-entry">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis lectus metus, at posuere neque. Sed pharetra nibh eget orci convallis at posuere leo convallis. Sed blandit augue vitae augue scelerisque bibendum. Vivamus sit amet libero turpis, non venenatis urna. In blandit, odio convallis suscipit venenatis, ante ipsum cursus augue...</p>
                      </div>
                      <div class="news-footer">
                        <ul>
                          <li><i class="fa fa-calendar-check-o"></i> 3 min read</li>
                          <li><i class="fa fa-comments-o"></i> <a href="">3 comments</a></li>
                          <li><i class="fa fa-fire"></i> 32K Views</li>
                        </ul>
                      </div>
                    </div>
                  </article>
                </div>

                <div class="col-md-12">
                  <nav class="navigation pagination navigation-centered" role="navigation">
                      <h2 class="screen-reader-text">Posts navigation</h2>
                      <div class="nav-links">
                        <span class="page-numbers current">1</span>
                        <a class="page-numbers" href="#">2</a>
                        <a class="next page-numbers" href="#">Next</a>
                      </div>
                  </nav>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
      {/* <div>
      {this.state.boardPosts.map((boardPost, index) => (
        <p>Hello, {boardPost.authored_by}!</p>
    ))}
      </div> */}
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
      </div>
  )
      }
    }

export default App;