import React from 'react';
import winnerTrophy from '../../assets/winner-trophy.svg';
import './QuizResultContainer.scss';

const QuizResultContainer = () => {
    return (
        <div className="bg-white p-4 my-4 text-center rounded shadow quiz-result-container">
            <div>
                <img className="img-fluid" src={winnerTrophy} alt="winner-trophy"/>
            </div>
            <div className="d-flex justify-content-center my-4">
                <div className="ques-ans mx-3">
                <p className="py-3">5/12</p>
                <p>Questions Answered</p>
                </div>
                <div className="score mx-3">
                <p className="py-3">50</p>
                <p>Your Score</p>
                </div>
            </div>
            <div  className="d-flex justify-content-center">
                <button className="btn text-white py-2 retake-button">Retake</button>
                <button className="btn text-white py-2 next-button">Next</button>
            </div>
        </div>
    );
};

export default QuizResultContainer;