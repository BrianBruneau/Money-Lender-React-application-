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
      <div className="well" key={idx}>
        <h2>Lend:&nbsp;<Link to={`/ShowBorrow/${borrow._id}`} >{borrow.amount}</Link>&nbsp; or less</h2>
        <button onClick={this.deleteTask}> delete task </button>
      </div>
    );
  });

    return (
      <div>
        <h1 id="">Lend your money!</h1>
        <div>{results}</div>
      </div>
    );
  }
})

module.exports = Lend;