const React = require('react');

const Signup = React.createClass({
        getInitialState: function() {
            return {username: '', password: ''};
          },
          handleUsername: function(event) {
            this.setState({username: event.target.value});
          },
          handlePassword: function(event) {
            this.setState({password: event.target.value});
          },
          handleRedirect: function(res){
            if( res.status === 200 ){
                // redirect here
                window.location.href = '/';
            }else {
              console.log(err);
            }

          },
          consoleLog: function(event) {
            fetch('/api/users', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              name: this.state.username,
              password: this.state.password,
            })
          }).then(this.handleRedirect)
          },
          render: function() {
            return (
              <div>
              <h1 className='borrow_title'>Signup</h1>
              <form className='form-style-4'>
              <input
                placeholder="Username"
                type="text"
                value={this.state.username}
                onChange={this.handleUsername}
              />
              <br>
              </br>
              <input
                placeholder="Password"
                type="text"
                value={this.state.password}
                onChange={this.handlePassword}
              />
              
              <button className="borrow_submit"  type="button" onClick={this.consoleLog}>Submit</button>
              </form>
              </div>
            );
          }
})

module.exports = Signup;