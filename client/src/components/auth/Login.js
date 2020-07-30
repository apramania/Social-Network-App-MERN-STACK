import React, { Fragment, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { loginUser } from '../../actions/auth'
// import axios from 'axios'

const Login = ({ loginUser, isAuthenticated }) => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const { email, password } = formData

    const onChange = e => setFormData({ ...formData, [e.target.name] : e.target.value })

    const onSubmit = async e => {
        e.preventDefault()
        loginUser(email, password)
    }

    //Redirect if authenticated
    if(isAuthenticated){
        return <Redirect to="/dashboard" />
    }

    return (
        <Fragment>
            <h1 className="large text-primary">Log In</h1>
            <p className="lead"><i className="fas fa-user"></i> Log In To Your Account</p>
            <form className="form" onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                <input type="email" placeholder="Email Address" name="email" value = {email} onChange = {e => onChange(e)} />
                </div>
                <div className="form-group">
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value = {password} 
                    onChange = {e => onChange(e)}
                    minLength="6"
                />
                </div>
                <input type="submit" className="btn btn-primary" value="Log In" />
            </form>
            <p className="my-1">
               Don't have an account? <Link to="/register">Sign Up</Link>
            </p>
        </Fragment>
    )
}


// "i am an instructor at apratimdas18 "
// i have done this project using react  
// { 
//     public static void main 
// } 

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
}

const mapStateToProps = state=> ({
    isAuthenticated : state.auth.isAuthenticated
})

export default connect(mapStateToProps, { loginUser })(Login)
