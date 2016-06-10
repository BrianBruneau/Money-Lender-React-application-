const React = require('react');
const Link = require('react-router').Link;

const Lend = React.createClass({
  getInitialState: function() {
    return {searchTerm: '', results: []};
  },
  componentWillMount: function() {
    fetch(`/api/borrows`)
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
    const results = this.state.results.map((borrow, idx) => {
    return (
      <div className="form-style-5" key={idx}>
        <h2>{borrow.user_id} needs &nbsp;<Link to={`/ShowBorrow/${borrow._id}`} >{borrow.amount}</Link>&nbsp;, or less.</h2>
        <button className="loan_button"><Link to={`/ShowBorrow/${borrow._id}`}> LoanShark it</Link> </button>
      </div>
    );
  });

    return (
      <div>
        <h1 className="borrow_title">Lend your money!</h1>
        <div>{results}</div>
      </div>
    );
  }
})

module.exports = Lend;