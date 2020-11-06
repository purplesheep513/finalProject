import React from 'react';
import { Link } from 'react-router-dom';
import '../../lib/styles/regist.scss'
import rLogo from '../../lib/img/rLogo.png';

const Regist = () => {
    return(
        <div id="wrapM">
        <div id="container">
            <div id="Rheader">
                    <a><Link to="/" class="rLogo"><img src={rLogo} alt="회원가입로고"/></Link></a>
            </div>
            <div class="rContainer">
                <div class="regiT">
                    <h1>계정 만들기</h1>
                </div>
            <form action="/regi" method="post">
                <div class="regiId">
                    <p><span class="idText">아이디</span></p>
                    <div>
                        <div class="inputId">
                            <input  class="flexS" type="text" name="userId" placeholder="이메일 주소(아이디)"/>
                        </div>
                        <input class="getE" type="button" name="idCheck" value="인증 받기"/>
                    </div>
                </div> 
                <div class="regiId">
                    <div class="inputId">
                        <input class="reNum" type="text" name="chkNum" placeholder="인증번호"/>
                    </div>
                    <input class="getE" type="button" name="Check" value="인증"/>
                </div>
                <div class="regiPw">
                    <p><span>비밀번호</span></p>
                    <div class="inputId inputPw">
                        <input type="password" name="userPw" placeholder="비밀번호"/>
                    </div>
                </div>
                <div class="regiId regiGender">
                    <div class="inputG radio_area">
                        <p>성별</p>
                        <input class="css-radio" type="radio" name="chk_gender"  id="mmm_lbl"/><label for="mmm_lbl">남</label>
                        <input class="css-radio" type="radio" name="chk_gender" id="www_lbl" /><label for="www_lbl">여</label>
                    </div>
                    <div class="inputG">
                        <p>나이</p>
                        <input class="getAge" type="text" name="age" placeholder="나이"/>
                    </div>
                </div>
                <div class="regiPro">
                    <div class="inputPro">
                        <input class="getP" type="button" name="profile" value="프로필 컴퓨터에서 업로드"/>
                    </div>
                    <div class="inputPro inputPro2"> 
                        <p><span>닉네임</span></p>
                        <input class="getNick" type="text" name="nickName" placeholder="닉네임"/>
                    </div>
                </div>
                <div class="regiId regiGo"> 
                    <input type="submit" name="regi" value="가입하기"/>
                </div>
            </form>
                <div class="regiId regiBack">
                    <p><a> <Link to="/login">이미 가입하셨다면? 로그인하세요.</Link></a></p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Regist;