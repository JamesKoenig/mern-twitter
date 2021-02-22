import React from 'react';
import { withRouter }  from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      handle: '',
      password: '',
      password2: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push('/login');
    }

    this.setState({errors: nextProps.errors});
  }

  update(field) {
    return event => this.setState({ 
      [field] : event.currentTarget.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    let { email, handle, password, password2 } = this.state;
    let user = {
      email, handle, password, password2
    }

    this.props.signup(user, this.props.history);
  }

  render() {
    return (
      <div className="signup-form-container">
        <form onSubmit={this.handleSubmit}>
          <div className="signup-form">
            <br/>
            <input type="text"
                   value={this.state.email}
                   onChange={this.update('email')}
                   placeholder="Email" />
            <br/>
            <input type="text"
                   value={this.state.handle}
                   onChange={this.update('email')}
                   placeholder="Email" />
            <br/>
            <input type="password"
                   value={this.state.password}
                   onChange={this.update('password')}
                   placeholder="Password" />
            <br/>
            <input type="password"
                   value={this.state.password2}
                   onChange={this.update('password2')}
                   placeholder="Confirm Password" />
            <br/>
            <input type="submit" value="Submit" />
            {this.renderErrors()}
          </div>
        </form>
      </div>
    )
  }
}

export defaault withRouter(SignupForm);