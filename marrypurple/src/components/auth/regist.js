import React from 'react';
import { Link } from 'react-router-dom';
import '../../lib/styles/regist.scss'
import rLogo from '../../lib/img/rLogo.png';

const Register = ({type,form,onSubmit,error,onChange,fileSelectHandler}) => {
    console.log(form)
    return(
    <div id="wrapM">
        <div>{error}</div>
        <div id="container">
            <div id="Rheader">
                    <a><Link to="/" className="rLogo"><img src={rLogo} alt="회원가입로고"/></Link></a>
            </div>
            <div className="rContainer">
                <div className="regiT">
                    <h1>계정 만들기</h1>
                </div>
            <form onSubmit={onSubmit} method="post" action="/api/auth" enctype="multipart/form-data">
                <div className="regiId">
                    <p><span className="idText">아이디</span></p>
                    <div>
                        <div className="inputId">
                            <input  
                                className="flexS" 
                                type="text" 
                                name="user_email"  
                                placeholder="이메일 주소(아이디)" 
                                value={form.user_email}
                                onChange={onChange}
                                />
                        </div>
                        <input 
                            className="getE" 
                            type="button" 
                            name="idCheck" 
                            value="인증 받기"
                        />
                    </div>
                </div> 
                <div className="regiId">
                    <div className="inputId">
                        <input className="reNum" type="text" name="chkNum" placeholder="인증번호"/>
                    </div>
                    <input className="getE" type="button" name="Check" value="인증"/>
                </div>
                <div className="regiPw">
                    <p><span>비밀번호</span></p>
                    <div className="inputId inputPw">
                        <input 
                            type="password" 
                            name="user_pw" 
                            placeholder="비밀번호" 
                            onChange={onChange}
                            value={form.user_pw}
                        />
                    </div>
                </div>
                <div className="regiId regiGender">
                    <div className="inputG radio_area">
                        <p>성별</p>
                        <input 
                        className="css-radio" 
                        type="radio" 
                        name="user_gender" 
                        onChange={onChange}
                        value={"male"}
                        id="mmm_lbl"/><label for="mmm_lbl">남</label>
                        <input 
                        className="css-radio" 
                        value={"female"} 
                        type="radio" 
                        name="user_gender" 
                        onChange={onChange}  
                        id="www_lbl" /><label for="www_lbl">여</label>
                    </div>
                    <div className="inputG">
                        <p>나이</p>
                        <input className="getAge" 
                        value={form.user_age} 
                        type="text"
                        name="user_age" 
                        onChange={onChange}  placeholder="나이"/>
                    </div>
                </div>
                <div className="regiPro">
                    <div className="inputPro">
                    <p className="picName"><span>프로필 사진</span></p>
                        <input type="file" 
                        name="profile_pic" 
                        onChange={fileSelectHandler}
                        value={form.profile_pic} 
                        />
                    </div>
                    <div className="inputPro inputPro2"> 
                        <p><span>닉네임</span></p>
                        <input 
                        className="getNick" 
                        value={form.user_nick} 
                        type="text"
                        name="user_nick" 
                        onChange={onChange} placeholder="닉네임"/>
                    </div>
                </div>
                <div className="regiId regiGo">
                    {/* <input type="submit" name="regi" value="가입하기"/> */}
                    <button>가입하기</button>
                </div>
            </form>
                <div className="regiId regiBack">
                    <p><a> <Link to="/login">이미 가입하셨다면? 로그인하세요.</Link></a></p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Register;