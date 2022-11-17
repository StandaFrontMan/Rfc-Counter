import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


export function UserGreeting(props) {
  return (
    <div>
        <h1>Wellcome back !</h1>
    </div>
  )
}

export function GuestGreeting(props) {
  return (
    <div>
        <h1>Please, Sign In !</h1>
    </div>
  )
}



const LoginInButton = (props) => {
    return (
        <button onClick={props.onClick}>
            LogIn
        </button>
    )
}

const LogOutButton = (props) => {
    return (
        <button onClick={props.onClick}>
            LogOut
        </button>
    )
}


class LogInControl extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogInClick = this.handleLogInClick.bind(this);
        this.handleLogOutClick = this.handleLogOutClick.bind(this);
        this.state = {
            isLoggedIn: false,
        }
    }

    handleLogInClick() {
        this.setState({
            isLoggedIn: true,
        })
    }

    handleLogOutClick() {
        this.setState({
            isLoggedIn: false,
        })
    }

  render() {

    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
        button = <LogOutButton onClick={this.handleLogOutClick}/>
    } else {
        button = <LoginInButton onClick={this.handleLogInClick}/>
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn}/>
        {button}
      </div>
    )
  }
}



const Greeting = (props) => {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />
    } else {
        return <GuestGreeting />
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<LogInControl/>)
