const React = require('react');

const Signup = React.createClass({
        getInitialState: function() {
            return {username: '', password: '', role: ''};
          },
          handleUsername: function(event) {
            this.setState({username: event.target.value});
          },
          handlePassword: function(event) {
            this.setState({password: event.target.value});
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
              role: this.state.role
            })
          })
          },
          render: function() {
            return (
              <div>
              <h1>Signup</h1>
              <form>
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
              
              <button type="button" onClick={this.consoleLog}>Submit</button>
              </form>
              </div>
            );
          }
})

module.exports = Signup;