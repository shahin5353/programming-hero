import React from 'react';
import './LoginPage.css';
import LoginForm from '../../components/loginContainer/LoginForm';
import manImg from '../../assets/man-front-laptop.png';
import leafImg from '../../assets/leaf.png';

const LoginPage = () => {
    return (
        <div className="container-fluid login-page">
            <div className="row">
                <div className="col-md-6 login-left-block mt-3">
                    <img className="leafImg" src={leafImg} alt=""/>
                    <LoginForm/>
                </div>
                <div className="col-md-6 login-right-block">
                    <img className="man-img img-fluid" src={manImg} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;