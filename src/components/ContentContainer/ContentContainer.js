import React from 'react';
import './ContentContainer.scss';
import dotSign from '../../assets/icons/dot-icon.png';
import checkedSign from '../../assets/icons/checked-sign.png';
import lockSign from '../../assets/icons/lock-sign.png';
import roundedLockSign from '../../assets/icons/rounded-lock-sign.png';

const ContentContainer = ({ courseData, contentHandler, userData }) => {
    return ( <>
        <h5 className="font-weight-bold d-none d-md-block">Course content</h5>
        {
        courseData.map(milestone =>
            <div id={`accordion${milestone.id}`} className="content-container bg-white p-2 mb-2" key={milestone.id}>
                    {/* // Milestone Button Starts Here */}
               <div className="milestone">
                    <button className="btn btn-block" data-toggle="collapse" data-target={`#milestone${milestone.id}`}>
                        <div className="d-flex justify-content-between font-weight-bold">
                            <p className="mb-0"> {milestone.title} </p>
                            {
                                milestone.status === "unlocked" ?
                                <span className="fa fa-plus"></span>
                                :
                                <img src={lockSign} alt="lock-sign"/>
                            }
                        </div>
                        <div className="text-left text-muted">
                            <small>55min</small>
                            <span className="mx-1"><img className="img-fluid" src={dotSign} alt="dot-sign" /></span>
                            <small>5 module</small>
                        </div>
                    </button>
               </div>
                {/* // Milestone Button Ends Here */}
                <div id={`milestone${milestone.id}`} className="collapse pl-3 pb-5 milestone-collapse" data-parent={`#accordion${milestone.id}`}>
                        {
                        milestone.modules.map(module => 
                            <div key={module.id}>
                                {/* // Module Button Starts Here */}
                                <div className="module">
                                    <button className="btn btn-block" data-toggle="collapse" data-target={`#module${module.id}`} aria-expanded="true" aria-controls="collapseOne">
                                        <div className="d-flex justify-content-between font-weight-bold">
                                            <div className="text-left">
                                                <p className="mb-0"> {module.title}</p>
                                                <small className="text-muted">5min</small>
                                                <span className="px-1"><img className="img-fluid" src={dotSign} alt="dot-sign" /></span>
                                                <small className="text-muted">1/2</small>
                                            </div>
                                            <div>
                                                <span className="fa fa-angle-up ml-3"></span>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                                {/* // Module Button Ends Here */}
                                <div id={`module${module.id}`} className="collapse pl-3">
                                    {
                                    module.contents.map((content,index) =>
                                            /* Module Content Starts Here */
                                            <li style={{cursor:'pointer'}} onClick={()=>contentHandler(module,content)} className="list-unstyled mb-2" key={content.id}>
                                                {
                                                    module.status === "unlocked" ?
                                                    <span ><img width="20" className="img-fluid" src={checkedSign} alt="checked-sign" /></span>
                                                    :
                                                    <span ><img width="20" className="img-fluid" src={roundedLockSign} alt="checked-sign" /></span>
                                                }
                                                <span className="pl-3">
                                                    {index+1+". "+content.title}
                                                </span>
                                            </li>
                                            /* Module Content Ends Here */
                                        )
                                    }
                                </div>
                            </div>
                            )
                        }
                </div>
            </div>
            )
        }
    </>);
};

export default ContentContainer;