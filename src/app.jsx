const React = require('react');
const ReactDOM = require('react-dom');
const Home = require('./components/Home');
const Borrow = require('./components/Borrow');
const ShowBorrow = require('./components/ShowBorrow');
const Loan = require('./components/Lend');
const MyLoans = require('./components/MyLoans');
const Signup = require('./components/Signup');
const Router = require('react-router').Router;
const Route = require('react-router').Route;
const Link = require('react-router').Link;
const browserHistory = require('react-router').browserHistory;


const App = React.createClass({
  render: function() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Home} />
        <Route path="/Borrow" component={Borrow} />
        <Route path="/ShowBorrow/:id" component={ShowBorrow} />
        <Route path="/Lend" component={Loan} />
        <Route path="/MyLoans" component={MyLoans} />
        <Route path="/Signup" component={Signup} />
      </Router>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('container'));
