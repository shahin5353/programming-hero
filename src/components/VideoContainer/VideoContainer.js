import React from 'react';
import './VideoContainer.scss';
import copyrightImg from '../../assets/copyright-claim.png';
import warningIcon from '../../assets/icons/ic_warning_24px.png'

const VideoContainer = ({selectedVideo}) => {
    return (
        <>
            <div className="embed-responsive embed-responsive-16by9 video-block">
                <iframe onClick={()=>document.getElementById('play').style.display='none'} id="player" title="video" className="embed-responsive-item" src={selectedVideo.link} allowFullScreen></iframe>
            </div>
            <div className="row mt-4 mx-0">
                <div className="col-7 pt-2 pl-0"><h5 className="mb-0">{selectedVideo.title}</h5></div>
                <div className="col-5 p-0 text-right">
                    <button className="btn px-1 px-sm-3 px-lg-4 px-xl-5 prev-btn mr-2">Previous</button>
                    <button className="btn px-1 px-sm-3 px-lg-4 px-xl-5 next-btn">Next</button>
                </div>
            </div>
            <div className="mt-4">
                <p className="text-justify pr-5 text-muted">{selectedVideo.desc}</p>
            </div>
            <div className="copyright mb-3 mb-md-0">
                <button type="button" className="btn text-danger" data-toggle="modal" data-target="#copyrightModal">
                    <img src={warningIcon} alt=""/>
                    <span> Copy Write Warning</span>
                </button>
            </div>
            <div className="modal fade" id="copyrightModal" tabIndex="-1" role="dialog">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <img className="img-fluid" src={copyrightImg} alt="" />
                </div>
            </div>
        </>
    );
};

export default VideoContainer;