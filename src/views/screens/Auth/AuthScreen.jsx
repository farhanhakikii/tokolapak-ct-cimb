import React from 'react'
import TextField from '../../components/TextField/TextField'
import './AuthScreen.css'
import '../../components/Button/Button.css'
import { connect } from 'react-redux';
import { registerHandler, loginHandler, userKeepLogin, logoutHandler } from "../../../redux/actions";
import cookie from 'universal-cookie'

const cookieObject = new cookie()
class AuthScreen extends React.Component{
    state = {
        isReg: true,
        fullName: "",
        username: "",
        password: "",
        role: "",
    }
    inputHandler = (e,field) => {
        this.setState({[field]: e.target.value})
    }
    loginPage = () => {
        this.setState({ isReg: false })
    }
    regPage = () => {
        this.setState({ isReg: true })
    }
    registerHandler = () => {
        const { username, password, fullName, role } = this.state
        const dataregis = { username, password, fullName, role }
        this.props.registerHandler(dataregis)
    }
    loginHandler = () => {
        const {username,password} = this.state
        const datalogin = {
            username,
            password
        }
        this.props.loginHandler(datalogin)
    }

    render() {
        return (
            <>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-5">
                        <button onClick={this.regPage} className="btnhead mr-3">Register</button>
                        <button onClick={this.loginPage} className="btnhead">Login</button>
                    </div>
                </div>
            </div>
            {
                this.state.isReg?
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-5">
                            <h3>Register</h3>
                            <p className="mt-4">
                                You will get the best recommendation for rent<br/>house in near of you
                            </p>
                            <TextField onChange={(e) => this.inputHandler(e,"fullName")} placeholder="Name" className="mt-5"/>    
                            <TextField onChange={(e) => this.inputHandler(e,"username")} placeholder="Username" className="mt-2"/>
                            <TextField onChange={(e) => this.inputHandler(e,"password")} placeholder="Password" className="mt-2"/>
                            <TextField onChange={(e) => this.inputHandler(e,"role")} placeholder="Role" className="mt-2"/>
                            <div className="d-flex justify-content-center">
                                <button onClick={this.registerHandler} className="custon-btn custom-btn-contained p-2 mt-5 align-self-center">Register</button>                        
                            </div>
                        </div>
                        <div className="col-7 d-flex justify-content-center">
                            <h3>Image</h3>
                        </div>
                    </div>
                </div> 
                :
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-5">
                            <h3>Log In</h3>
                            <p className="mt-4">
                                Welcome back,<br/>Please login to your account
                            </p>
                            <TextField onChange={(e) => this.inputHandler(e,"username")} placeholder="Username" className="mt-5"/>
                            <TextField onChange={(e) => this.inputHandler(e,"password")} placeholder="Password" className="mt-2"/>
                            <div className="d-flex justify-content-center">
                                <button onClick={this.loginHandler} className="custon-btn custom-btn-contained p-2 mt-5 align-self-center">Login</button>                        
                            </div>
                        </div>
                        <div className="col-7 d-flex justify-content-center">
                            <h3>Image</h3>
                        </div>
                    </div>
                </div>
            }
            </>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps,{registerHandler,loginHandler})(AuthScreen)
