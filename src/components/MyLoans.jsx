const React = require('react');
const Link = require('react-router').Link;

const Loan = React.createClass({
  getInitialState: function() {
    return {searchTerm: '', results: []};
  },
  componentWillMount: function() {
    fetch(`/api/loans`)
      .then(response => {
        response.json().then(data => {
          console.log(data);
          this.setState({results: data});
        });
      }).catch(error => {
        this.setState({results: null});
      });
  },
  render: function() {
    const results = this.state.results.map((loan, idx) => {
    return (

      <div className="form-style-5 well" key={idx}>
        <h2>You Lent:&nbsp;{loan.amount} to {loan.client_id} on account of: <Link to={`/ShowBorrow/${loan.borrow_id}`}>{loan.borrow_id}</Link> </h2>
      </div>
    );
  });

    return (
      <div>
        <h1 className="aboutdot">Your loans!</h1>
        <div>{results}</div>
      </div>
    );
  }
})

module.exports = Loan;