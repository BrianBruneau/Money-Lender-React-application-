const React = require('react');
var Modal = require('react-bootstrap').Modal;
var Button = require('react-bootstrap').Button;

const ShowBorrow = React.createClass({
  getInitialState: function() {
    return {results: [], amount: '\$', client_id: '', user_id: '', borrow_id: ''};
  },
  handleAmount: function(event) {
    this.setState({amount: event.target.value});
  },
  handleUser: function(event) {
    this.setState({user_id: event.target.value});
  },
  lendSuccess: function(event) {
    console.log("thisOne:",this.props.params.id)
    fetch('/api/loans', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      user_id: this.state.user_id,
      client_id: this.state.client_id,
      borrow_id: this.state.borrow_id,
      amount: this.state.amount
    })
  })
  },
  componentWillMount: function() {
    fetch(`/api/borrows`)
      .then(response => {
        response.json().then(data => {
          this.setState({borrow_id: this.props.params.id})
          this.setState({client_id: data[0].user_id})
          var that = this;
          this.setState({results: data.filter(function(el){
            if (el._id == that.props.params.id) {
              return true;
            } else {
              return false;
            }
          })});
        });
      }).catch(error => {
        this.setState({results: null});
      });
  },
    close(){
    this.setState({ showModal: false });
  },
    show(){
    this.setState({ showModal: true });
  },

  render: function() {
    console.log("haha",this.state.results[0])
    const results = this.state.results.map((borrow, idx) => {
    return (
      <div className="well" key={idx}>
        <h2>User: &nbsp;{borrow.user_id}</h2>
        <h2>Amount needed: &nbsp;{borrow.amount}</h2>
        <h3>Payback date: &nbsp;{borrow.pb_date}</h3>
         <button onClick={this.show}>Choose amount to Lend.</button>
      </div>
    );
  });

    return (
      <div>
        <h1 id="aboutdot">show</h1>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Input amount to Lend.</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
            <input
                placeholder="username"
                type="text"
                value={this.state.user_id}
                onChange={this.handleUser}
              />
            <input
                placeholder="$$"
                type="text"
                value={this.state.amount}
                onChange={this.handleAmount}
              />
              <button type="button" onClick={this.lendSuccess}>Submit</button>
              </div>

          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
        <div>
        {results}


        </div>
      </div>
    );
  }
})

module.exports = ShowBorrow;