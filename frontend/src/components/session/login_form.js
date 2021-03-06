import React from 'react';
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push('/tweets');
    }

    this.setState( {errors: nextProps.errors } );
  }

  update(field) {
    return event =>
      this.setState({
        [event]: event.currentTarget.value
      });
  }

  handleSubmit(event) {
    event.preventDefault();

    let user = {
      email:    this.state.email,
      password: this.state.password
    };

    this.props.login(user);
  }

  renderErrors() {
    return (
      <ul>
        {Object.keys(this.state.errors).map( (error_key, i) => (
          <li key={`error-${i}`}>
            {this.state.errors[error_key]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        <fom onSubmit={this.handleSubmit}>
          <div>
            <input type="text"
                   value={this.state.email}
                   onChange={this.update('email')}
                   placeholder="Email" />
            <br/>
            <input type="password"
                   value={this.state.password}
                   onChange={this.update('password')}
                   placeholder="Password"/>
            <br/>
            <input type="submit" value="Submit" />
            {this.renderErrors() /* again! this is called with `this` 
                                    so why did we bind it? */ }
          </div>
        </fom>
      </div>
    )
  }
}

export default withRouter(LoginForm);