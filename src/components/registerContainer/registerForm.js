import React from 'react';
import '../loginContainer/Form.scss';
import arrowRight from '../../assets/icons/arrow-right.png';


const registerForm = () => {
    return (
        <form className="register-form">
            <h2 className="form-title mb-4">Register</h2>
            <div className="form-group">
                <label htmlFor="inputName">Name</label>
                <input type="text" className="form-control" id="inputName" name="name" />
            </div>
            <div className="form-group">
                <label htmlFor="inputEmail">Email</label>
                <input type="email" className="form-control" id="inputEmail" name="email" />
            </div>
            <div className="form-group">
                <label htmlFor="inputPhone">Phone No.</label>
                <input type="tel" className="form-control" id="inputPhone" name="phone" />
            </div>
            <div className="form-group">
                <label htmlFor="inputPassword">Password</label>
                <input type="password" className="form-control" id="inputPassword" name="password" />
            </div>
            <button type="submit" className="btn btn-block">Register <span className="arrow-right"><img src={arrowRight} alt="" /></span></button>
        </form>
    );
};

export default registerForm;