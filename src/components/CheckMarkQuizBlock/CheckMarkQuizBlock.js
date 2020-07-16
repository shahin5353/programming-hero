import React from 'react';
import './CheckMarkQuizBlock.scss';

const CheckMarkQuizBlock = ({quiz}) => {
    return (
        
            <div>
                <h5 className="text-center mb-4">{quiz.title}</h5>
                <form>
                    <div className="row">
                        {
                            quiz.option.map(option =>
                                <div className="col-lg-6 quiz-box" key={option.key}>
                                    <div className="form-group">
                                        <div className="form-check bg-light py-2 rounded checkbox">
                                            <input className="mx-2" name={quiz.id} value={option.key} type="checkbox" id={option.key}/>
                                            <label className="form-check-label ml-5" for={option.key}>{option.value}</label>
                                        </div>
                                    </div>
                                </div> 
                            )
                        }
                    </div>
                </form>
            </div>
       
    );
};

export default CheckMarkQuizBlock;