const React = require('react');
const ReactDOM = require('react-dom');
const Home = require('./components/Home');
const About = require('./components/About')
const Router = require('react-router').Router;
const Route = require('react-router').Route;
const Link = require('react-router').Link;
const browserHistory = require('react-router').browserHistory;


const App = React.createClass({
  render: function() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Signup" component={Signup} />
      </Router>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('container'));
