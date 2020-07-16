import React from 'react';
import './Form.scss';
import arrowRight from '../../assets/icons/arrow-right.png';
import { Link } from 'react-router-dom';


const LoginForm = () => {
    return (
        <form className="login-form">
            <h2 className="form-title mb-4">Login</h2>
            <div className="form-group">
                <label htmlFor="inputEmailOrPhone">Email Or Phone No.</label>
                <input type="text" className="form-control" id="inputEmailOrPhone" name="emailOrPhone" required />
            </div>
            <div className="form-group">
                <label htmlFor="inputPassword">Password</label>
                <input type="password" className="form-control" id="inputPassword" name="password" required />
            </div>
            <div className="form-row mb-2">
                <div className="form-group">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="rememberCheck" name="remember" />
                        <label className="form-check-label text-muted" htmlFor="rememberCheck">
                            Remember Me
                        </label>
                    </div>
                </div>
                <Link className="font-weight-bold ml-auto" to="/login"><u>Forgot Password</u></Link>
            </div>
            <button type="submit" className="btn btn-block">Login<span className="arrow-right"><img src={arrowRight} alt="" /></span></button>
        </form>
    );
};

export default LoginForm;