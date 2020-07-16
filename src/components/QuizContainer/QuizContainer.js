import React, { useState } from 'react';
import './QuizContainer.scss';
import CheckMarkQuizBlock from '../CheckMarkQuizBlock/CheckMarkQuizBlock';
import QuizResultContainer from '../QuizResultContainer/QuizResultContainer';

const QuizContainer = ({ selectedQuiz }) => {
    const [submitQuiz, setSubmitQuiz] = useState(false);
    const quizSubmitHandler = () => {
        setSubmitQuiz(true);
    }
    return (
        <>
            {
                !submitQuiz ?
                   <>
                       {
                            selectedQuiz.quizQuestion.map((quiz) =>
                            <div className="bg-white p-4 my-4" key={quiz.id}>
                                {
                                    quiz.type === "checkMark" &&
                                    <CheckMarkQuizBlock quiz={quiz} />
                                }
                            </div>
                        )
                       }
                   <div className="text-right continue-block">
                   <button onClick={quizSubmitHandler} className="btn text-white">Continue</button> 
                   </div>
                   </>
                :
                <QuizResultContainer />
            }
        </>
    );
};

export default QuizContainer;