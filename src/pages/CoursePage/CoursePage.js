import React, { useState, useEffect } from 'react';
import './CoursePage.css';
import VideoContainer from '../../components/VideoContainer/VideoContainer';
import ContentContainer from '../../components/ContentContainer/ContentContainer';
import {dummyData, DummyUser} from '../../dummyData';
import QuizContainer from '../../components/QuizContainer/QuizContainer';
import UserContainer from '../../components/UserContainer/UserContainer';
import CountDownContainer from '../../components/CountDownContainer/CountDownContainer';

const CoursePage = (props) => {
    const [courseData,setCourseData] = useState(null);
    const [userData,setUserData] = useState(null);
    const [selectedContent, setSelectedContent] = useState(null); 
    const [lockedContent, setLockedContent] = useState(false); 
    useEffect(()=>{
        setCourseData(dummyData);
        setSelectedContent(dummyData[0].modules[0].contents[0]);
        setUserData(DummyUser);
    },[]);
    const contentHandler = (module,content) => {
        if(module.status==="unlocked"){
            setSelectedContent(content);
            setLockedContent(false);
        }
        else{
            setSelectedContent(null);
            setLockedContent(true);
        }
    }
    return (
        <div className="course-container">
            <div className="container-fluid">
               {
                   userData &&
                   <UserContainer userData={userData}/>
               }
            </div>
            {
                courseData ?
                <div className="container pt-5">
                <div className="row">
                    <div className="col-md-8">
                       {
                           selectedContent && selectedContent.category === "video" && 
                           <VideoContainer selectedVideo={selectedContent} />
                       }
                       {
                           selectedContent && selectedContent.category === "quiz" && 
                           <QuizContainer selectedQuiz={selectedContent}/>
                       }
                       {
                           lockedContent &&
                           <CountDownContainer/>
                       }
                    </div>
                    <div className="col-md-4">
                       <ContentContainer courseData={courseData} contentHandler={contentHandler} userData={userData} />
                    </div>
                </div>
            </div>
               
            :
            <div className="container pt-5">
            <div className="row">
                <h3>loading...</h3>
            </div>
        </div>
            }
        </div>
    );
};

export default CoursePage;