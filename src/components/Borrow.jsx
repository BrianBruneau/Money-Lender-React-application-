const React = require('react');

const Borrow = React.createClass({
  getInitialState: function() {
            return {amount: '', payback: '', user: ''};
  },
  handleAmount: function(event) {
    this.setState({amount: event.target.value});
  },
  handlePayback: function(event) {
    this.setState({payback: event.target.value});
  },
  handleUser: function(event) {
    this.setState({user: event.target.value});
  },
  handleRedirect: function(res){
      if( res.status === 200 ){
          // redirect here
          window.location.href = '/Lend';
      }else {
        console.log(err);
      }

  },
  consoleLog: function(event) {
    fetch('/api/borrows', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      user_id: this.state.user,
      amount: this.state.amount,
      pb_date: this.state.payback
    })
  }).then(this.handleRedirect) 
  },

  render: function() {
    return (
      <div>
        <h1 className="borrow_title"> Apply for a loan.</h1>
        <form className="form-style-4">
          <input className="borrow_form"
            placeholder="Username"
            type="text"
            value={this.state.user}
            onChange={this.handleUser}
          />
          <br>
          </br>
          <input className="borrow_form"
            placeholder="amount needed"
            type="text"
            value={this.state.amount}
            onChange={this.handleAmount}
          />
          <br>
          </br>
          <input className="borrow_form"
            placeholder="payback date"
            type="text"
            value={this.state.payback}
            onChange={this.handlePayback}
          />
          
          <button className="borrow_submit" type="button" onClick={this.consoleLog}>Submit</button>
          </form>
      </div>
    );
  }
})

module.exports = Borrow;