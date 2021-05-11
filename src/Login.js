import React, {useState} from 'react'
import './Login.css'
import {Link, useHistory} from 'react-router-dom'
import {auth} from './firebase'

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password).then(auth => {
            history.push('/')
        }).catch(error => alert(error.message))

        // some fancy firebase login
    }

    const register = e => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password).then((auth) =>{
            //it successfully created a new user with email and password
            if(auth){
                history.push('/')
            }
        }).catch(error => alert(error.message))

        // some fancy firebase register
    }


    return (
        <div className="login">
            <Link to ="/">
                <img 
                className="login_logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                />
            </Link>

            <div className="login_container">
                <h1>Sign-In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>

                    <button className="login_signinButton" type="submit" onClick={signIn}>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the AMAZON CLONE Conditions of use & Sale, Please see our Privacy Notice,
                    our Cookies Notice and our Sponsered Ads Notice.
                </p>

                <button className="login_registerButton" onClick={register}>Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
