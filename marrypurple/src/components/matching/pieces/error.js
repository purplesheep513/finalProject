import React from 'react';
import '../../../lib/styles/matching.scss';
import Personality from './Personality';
// import ProfilePic from './pieces/ProfilePic';
import imgA from '../../../lib/images/images/annonymous.png';

const Error = () => {
    return (
    <>
        <div className="match_1">
            <a href="/back"><div></div></a>
            <a href="#aaa"><div></div></a>
            <a href="#aaa"><div></div></a>
            <a href="#aaa"><div></div></a>
        </div>
        <div className="match_2">
            <a href="#aaa"><div className="match_2_pre"></div></a>
            <a href="#aaa"><div className="match_2_next"></div></a>
            {/* <div id="match_2_photo"><ProfilePic pics={profile_pic}/></div> */}
            <div id="match_2_photo"><img src={imgA} alt="프로필사진"/></div>
            <div id="cantFindUser">사용자를 찾을 수 없습니다</div>
        </div>
        <div>
        </div>
    </>
);
};

export default Error;