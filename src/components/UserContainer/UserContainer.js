import React from 'react';
import { Link } from 'react-router-dom';
import './UserContainer.scss';

const UserContainer = ({userData}) => {
    return (
        <div className="container pt-3 user-container">
           <div className="d-flex justify-content-between">
               <div className="mt-lg-3">
                    <h3 className="align-self-center mb-0">Complete Web Development Course with Jhankar Mahbub</h3>
               </div>
              
                <div className="d-flex align-items-center">
                <div className="mr-5 d-none d-md-block">
               <div className="progress" style={{width: "10vw",height:"14px"}}>
                    <div className="progress-bar bg-success rounded" role="progressbar" style={{width: "45%"}} aria-valuenow="45" aria-valuemin="0" aria-valuemax="100"></div>     
                </div>
                <small className="text-muted">Progress(45%)</small>
               </div>
               <Link className="ml-5">
                    <img height="50" src={userData.photoUrl} alt="user-img"/>
               </Link>
               </div>
           </div>
        </div>
    );
};

export default UserContainer;