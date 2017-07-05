import React from 'react';
import * as Cookies from 'js-cookie';
import { connect } from 'react-redux';
import QuestionPage from './question-page/question-page';
import LoginPage from './login-page/Login-page';
import { createUser } from '../actions';


class App extends React.Component {
  // constructor (props) {
  //   super(props);
  //   this.state = {
  //     currentUser: null
  //   };
  // }

  componentDidMount () {
    // Job 4: Redux-ify all of the state and fetch calls to async actions.
    const accessToken = Cookies.get('accessToken');
    if (accessToken) {
      fetch('/api/me', {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
        .then(res => {
          if (!res.ok) {
            if (res.status === 401) {
              // Unauthorized, clear the cookie and go to
              // the login page
              Cookies.remove('accessToken');
              return;
            }
            throw new Error(res.statusText);
          }
          return res.json();
        })
        .then(currentUser =>
          this.props.dispatch(createUser(currentUser))
        );
    }
  }

  render () {
    if (!this.props.currentUser) {
      return <LoginPage />;
    }
    return (<div>
    <QuestionPage />
    </div>);
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.currentUser
});

export default connect(mapStateToProps)(App);
