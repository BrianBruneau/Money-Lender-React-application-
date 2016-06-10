const React = require('react');
const Link = require('react-router').Link;

const Home = React.createClass({
  render: function() {
    return (
      <div>
      <div>
          <button id="loan_btn" type="button" className="btn btn-default"><Link to={`/Lend`}>Loan</Link></button>

            <button id="request_btn" type="button" className="btn btn-default"><Link to={`/Borrow`}>Request a Loan</Link></button>
      </div>
      </div>
    );
  }
})

module.exports = Home;