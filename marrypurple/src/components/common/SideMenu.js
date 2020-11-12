import React from 'react';
import { Link } from 'react-router-dom';
// import styled from 'styled-components';
import '../../lib/styles/styles.scss';
import $ from 'jquery';
import { Helmet } from 'react-helmet';

const SideMenu = () => {
    async function script(){
        console.log(window.location.pathname);
        let currentPage = window.location.pathname;

        switch(currentPage){
            case '/match':
            case '/match_like':
            case '/match_profile':
                $('#m1').addClass('on');
                $('#slide_box div').removeClass('on').removeClass('off');
                $('#sub_menu_match').addClass('on');
                $('#sub_menu_match').siblings().addClass('off');
                break;
            case '/message':
            case '/message_profile':
                $('#m2').addClass('on');
                $('#slide_box div').removeClass('on').removeClass('off');
                $('#sub_menu_message').addClass('on');
                $('#sub_menu_message').siblings().addClass('off');
                break;
            case '/worldcup1':
            case '/worldcup2':
            case '/worldcup3':
            case '/Telepathy':
            case '/Telepathy_make_quiz':
            case '/Telepathy_get_quiz':
            case '/find_main':
            case '/find_select':
            case '/find_match':
            case '/gram_main':
            case '/gram_write':
            case '/gram_post':
            case '/board_bad':
                $('#m3').addClass('on');
                $('#slide_box div').removeClass('on').removeClass('off');
                $('#sub_menu_enter').addClass('on');
                $('#sub_menu_enter').siblings().addClass('off');
                switch(currentPage){
                    case '/worldcup1':
                    case '/worldcup2':
                    case '/worldcup3':
                        $('#left_menu #slide_box #sub_menu_enter ul a:nth-child(1)').addClass('on');
                        break;
                    case '/Telepathy':
                    case '/Telepathy_make_quiz':
                    case '/Telepathy_get_quiz':
                        $('#left_menu #slide_box #sub_menu_enter ul a:nth-child(2)').addClass('on');
                        break;
                    case '/find_main':
                    case '/find_select':
                    case '/find_match':
                        $('#left_menu #slide_box #sub_menu_enter ul a:nth-child(3)').addClass('on');
                        break;
                    case '/gram_main':
                    case '/gram_write':
                    case '/gram_post':
                        $('#left_menu #slide_box #sub_menu_enter ul a:nth-child(4)').addClass('on');
                        break;
                    case '/board_bad':
                        $('#left_menu #slide_box #sub_menu_enter ul a:nth-child(6)').addClass('on');
                        break;
                }
        }

        // 서브 메뉴 클릭시
        $('#m1').on('click', function() { 
            $('#slide_box div').removeClass('on').removeClass('off');
            $('#sub_menu_match').addClass('on');
            $('#sub_menu_match').siblings().addClass('off');
    
            $('#sub_menu a').removeClass('on');
            $(this).addClass('on');
        });
        $('#m2').on('click', function() {
            $('#slide_box div').removeClass('on').removeClass('off');
            $('#sub_menu_message').addClass('on');
            $('#sub_menu_message').siblings().addClass('off');
    
            $('#sub_menu a').removeClass('on');
            $(this).addClass('on');
        });
        $('#m3').on('click', function() {
            $('#slide_box div').removeClass('on').removeClass('off');
            $('#sub_menu_enter').addClass('on');
            $('#sub_menu_enter').siblings().addClass('off');
    
            $('#sub_menu a').removeClass('on');
            $(this).addClass('on');
        });
        $('#myprofile_btn').on('click', function() {
            $('#slide_box div').removeClass('on').removeClass('off');
            $('#sub_menu_myprofile').addClass('on');
            $('#sub_menu_myprofile').siblings().addClass('off');
    
            $('#sub_menu a').removeClass('on');
            $(this).addClass('on');
        });

        // 공지사항 누르면
        // 웹 버전
        $('#left_menu #slide_box #sub_menu_enter ul a:nth-child(5)').on('click', function(){
            $('#left_menu #slide_box #sub_menu_enter ul a:nth-child(6)').toggleClass('on2');
            $('#left_menu #slide_box #sub_menu_enter ul a:nth-child(7)').toggleClass('on2');
        });

        if($('#left_menu #slide_box #sub_menu_enter ul a:nth-child(6)').hasClass('on') || $('#left_menu #slide_box #sub_menu_enter ul a:nth-child(7)').hasClass('on')){
            $('#left_menu #slide_box #sub_menu_enter ul a:nth-child(6)').addClass('on2');
            $('#left_menu #slide_box #sub_menu_enter ul a:nth-child(7)').addClass('on2');
        }

        // 모바일 버전
        $('.enterM_1 a:nth-child(5)').on('click', function(){
            $('.enterM_1 a:nth-child(6)').toggleClass('on2');
            $('.enterM_1 a:nth-child(7)').toggleClass('on2');
        });
    }

    // const script = () => {
    //     console.log(window.location.pathname);
    //     let currentPage = window.location.pathname;

    //     switch(currentPage){
    //         case '/match':
    //         case '/match_like':
    //         case '/match_profile':
    //             $('#m1').addClass('on');
    //             $('#slide_box div').removeClass('on').removeClass('off');
    //             $('#sub_menu_match').addClass('on');
    //             $('#sub_menu_match').siblings().addClass('off');
    //             break;
    //         case '/message':
    //         case '/message_profile':
    //             $('#m2').addClass('on');
    //             $('#slide_box div').removeClass('on').removeClass('off');
    //             $('#sub_menu_message').addClass('on');
    //             $('#sub_menu_message').siblings().addClass('off');
    //             break;
    //         case '/worldcup1':
    //         case '/worldcup2':
    //         case '/worldcup3':
    //         case '/Telepathy':
    //         case '/Telepathy_make_quiz':
    //         case '/Telepathy_get_quiz':
    //         case '/find_main':
    //         case '/find_select':
    //         case '/find_match':
    //         case '/gram_main':
    //         case '/gram_write':
    //         case '/gram_post':
    //         case '/board_bad':
    //             $('#m3').addClass('on');
    //             $('#slide_box div').removeClass('on').removeClass('off');
    //             $('#sub_menu_enter').addClass('on');
    //             $('#sub_menu_enter').siblings().addClass('off');
    //             switch(currentPage){
    //                 case '/worldcup1':
    //                 case '/worldcup2':
    //                 case '/worldcup3':
    //                     $('#left_menu #slide_box #sub_menu_enter ul a:nth-child(1)').addClass('on');
    //                     break;
    //                 case '/Telepathy':
    //                 case '/Telepathy_make_quiz':
    //                 case '/Telepathy_get_quiz':
    //                     $('#left_menu #slide_box #sub_menu_enter ul a:nth-child(2)').addClass('on');
    //                     break;
    //                 case '/find_main':
    //                 case '/find_select':
    //                 case '/find_match':
    //                     $('#left_menu #slide_box #sub_menu_enter ul a:nth-child(3)').addClass('on');
    //                     break;
    //                 case '/gram_main':
    //                 case '/gram_write':
    //                 case '/gram_post':
    //                     $('#left_menu #slide_box #sub_menu_enter ul a:nth-child(4)').addClass('on');
    //                     break;
    //                 case '/board_bad':
    //                     $('#left_menu #slide_box #sub_menu_enter ul a:nth-child(6)').addClass('on');
    //                     break;
    //             }
    //     }

    //     // 서브 메뉴 클릭시
    //     $('#m1').on('click', function() { 
    //         $('#slide_box div').removeClass('on').removeClass('off');
    //         $('#sub_menu_match').addClass('on');
    //         $('#sub_menu_match').siblings().addClass('off');
    
    //         $('#sub_menu a').removeClass('on');
    //         $(this).addClass('on');
    //     });
    //     $('#m2').on('click', function() {
    //         $('#slide_box div').removeClass('on').removeClass('off');
    //         $('#sub_menu_message').addClass('on');
    //         $('#sub_menu_message').siblings().addClass('off');
    
    //         $('#sub_menu a').removeClass('on');
    //         $(this).addClass('on');
    //     });
    //     $('#m3').on('click', function() {
    //         $('#slide_box div').removeClass('on').removeClass('off');
    //         $('#sub_menu_enter').addClass('on');
    //         $('#sub_menu_enter').siblings().addClass('off');
    
    //         $('#sub_menu a').removeClass('on');
    //         $(this).addClass('on');
    //     });
    //     $('#myprofile_btn').on('click', function() {
    //         $('#slide_box div').removeClass('on').removeClass('off');
    //         $('#sub_menu_myprofile').addClass('on');
    //         $('#sub_menu_myprofile').siblings().addClass('off');
    
    //         $('#sub_menu a').removeClass('on');
    //         $(this).addClass('on');
    //     });

    //     // 공지사항 누르면
    //     // 웹 버전
    //     $('#left_menu #slide_box #sub_menu_enter ul a:nth-child(5)').on('click', function(){
    //         $('#left_menu #slide_box #sub_menu_enter ul a:nth-child(6)').toggleClass('on2');
    //         $('#left_menu #slide_box #sub_menu_enter ul a:nth-child(7)').toggleClass('on2');
    //     });

    //     if($('#left_menu #slide_box #sub_menu_enter ul a:nth-child(6)').hasClass('on') || $('#left_menu #slide_box #sub_menu_enter ul a:nth-child(7)').hasClass('on')){
    //         $('#left_menu #slide_box #sub_menu_enter ul a:nth-child(6)').addClass('on2');
    //         $('#left_menu #slide_box #sub_menu_enter ul a:nth-child(7)').addClass('on2');
    //     }

    //     // 모바일 버전
    //     $('.enterM_1 a:nth-child(5)').on('click', function(){
    //         $('.enterM_1 a:nth-child(6)').toggleClass('on2');
    //         $('.enterM_1 a:nth-child(7)').toggleClass('on2');
    //     });
    // }

    script();

    return(
        <>
            <Helmet>
                <script src="https://kit.fontawesome.com/f4b52f1d75.js" crossorigin="anonymous"></script>
                
            </Helmet>
            {/* 모바일 메뉴 */}
            <div id="m_menu">
                <ul>
                    <li><Link to="/profile_main"><div><i class="fas fa-address-card"></i></div></Link></li>
                    <li><Link to="/match"><div><i class="fas fa-heartbeat"></i></div></Link></li>
                    <li><Link to="/match_list"><div><i class="fas fa-comments"></i></div></Link></li>
                    <li><Link to="/enter_main"><div><i class="fas fa-plane"></i></div></Link></li>
                </ul>
            </div>
            {/* 웹 메뉴 */}
            <div id="left_menu">
                <ul>
                    <li>
                        <ul id="myprofile">
                            <Link to="/Profile" id="myprofile_btn"><li><div id="myPho"><div></div></div><span>나의 프로필</span></li></Link>
                            <Link to="work"><li></li></Link>
                        </ul>
                    </li>
                    <li>
                        <ul id="sub_menu">
                            <a href="/match" id="m1"><li>매치</li></a>
                            <a id="m2"><li>메시지</li></a>
                            <a id="m3"><li>엔터테인먼트</li></a>
                        </ul>
                    </li>
                    <li>
                        <div id="slide_box">
                            <div id="sub_menu_match" class="off">
                                <ul>
                                    <Link to="match_like"><div><li>나를 좋아요</li></div></Link>
                                    <Link to="message"><div><li>123</li></div></Link>
                                    <Link to="message"><div><li>야야야</li></div></Link>
                                </ul>
                            </div>
                            <div id="sub_menu_message" class="off">
                                <ul id="message_list">
                                    <a href="message.html"><li class="message_listP">
                                        <div class="message_listP_wrap"><div class="message_listP_photo"><div></div></div>
                                        <div><span class="message_listP_id">냐옹</span></div></div>
                                    </li></a>
                                    <a href="message.html"><li class="message_listP">
                                        <div class="message_listP_wrap"><div class="message_listP_photo"><div></div></div>
                                        <div><span class="message_listP_id">냐옹</span></div></div>
                                    </li></a>
                                    <a href="message.html"><li class="message_listP">
                                        <div class="message_listP_wrap"><div class="message_listP_photo"><div></div></div>
                                        <div><span class="message_listP_id">냐옹</span></div></div>
                                    </li></a>
                                </ul>
                            </div>
                            <div id="sub_menu_enter" class="off">
                                <ul>
                                    <Link to="/worldcup1"><div><li>이상형 월드컵</li></div></Link>
                                    <Link to="/Telepathy"><div><li>텔레파시</li></div></Link>
                                    <Link to="/find_main"><div><li>이상형 찾기</li></div></Link>
                                    <Link to="/gram_main"><div><li>메리퍼플그램</li></div></Link>
                                    <a><div><li>공지사항</li></div></a>
                                    <Link to="/board_bad"><div><li>불량회원</li></div></Link>
                                    <Link to="/FAQ" ><div><li>FAQ</li></div></Link>
                                </ul>
                            </div>
                            <div id="sub_menu_myprofile" class="off">
                                <dl>
                                    <Link to="Payment"><div><dd>결제하기 <span className="sub_menu_myprofile_icon">&gt;</span></dd></div></Link>
                                    <h2>DISCOVERY 설정</h2>
                                    <a>
                                        <div>
                                            <dd>원하는 상대 
                                                <p class="input_type_radio2">
                                                    <input type="radio" name="gender2" id="boy" checked/>
                                                    <label for="boy">남</label>
                                                    <input type="radio" name="gender2" id="all"/>
                                                    <label id="md2" for="all">모두</label>
                                                    <input type="radio" name="gender2" id="girl"/>
                                                    <label for="girl">여</label>
                                                </p>
                                            </dd>
                                        </div>
                                    </a>
                                    <div><dd>
                                        <div>연령대 <span id="slider-value"></span>
                                            <div slider id="slider-distance">
                                                {/* <div>
                                                    <div inverse-left style="width:100%;"></div>
                                                    <div inverse-right style="width:100%;"></div>
                                                    <div range style="left:0%;right:0%;"></div>
                                                    <span thumb style="left:0%;"></span>
                                                    <span thumb style="left:100%;"></span>
                                                    <div sign style="left:84%;">
                                                        <span id="value">18</span>
                                                    </div>
                                                
                                                    <div sign style="left:96%;">
                                                        <span id="value">55</span>
                                                    </div>
                                                </div>
                                                <input type="range" value="18" max="55" min="18" step="1" oninput="
                                                this.value=Math.min(this.value,this.parentNode.childNodes[5].value-1);
                                                let value = ((this.value-18)/parseInt(this.max))*100
                                                var children = this.parentNode.childNodes[1].childNodes;
                                                children[1].style.width=value+'%';
                                                children[5].style.left=value+'%';
                                                children[7].style.left=value+'%';
                                                // children[11].style.left=value+'%';
                                                children[11].childNodes[1].innerHTML=this.value;" />
                                            
                                                <input type="range" value="55" max="55" min="18" step="1" oninput="
                                                this.value=Math.max(this.value,this.parentNode.childNodes[3].value-(-1));
                                                let value = (this.value/parseInt(this.max))*100
                                                var children = this.parentNode.childNodes[1].childNodes;
                                                children[3].style.width=(100-value)+'%';
                                                children[5].style.right=(100-value)+'%';
                                                children[9].style.left=value+'%';
                                                // children[13].style.left=value+'%';
                                                children[13].childNodes[1].innerHTML=this.value;" />
                                                <span id="slider-between">-</span> */}
                                            </div>
                                        </div>
                                    </dd></div>
                                    <h2>알림</h2>
                                    <Link to="#"><div><dd>푸시알림 <span className="sub_menu_myprofile_icon">&gt;</span></dd></div></Link>
                                    <h2>도움말·고객 지원</h2>
                                    <Link to="/FAQ2"><div><dd>도움말·고객 지원 <span className="sub_menu_myprofile_icon">&gt;</span></dd></div></Link>
                                    <h2>커뮤니티</h2>
                                    <Link to="/FAQ2"><div><dd>커뮤니티 가이드라인 <span className="sub_menu_myprofile_icon">&gt;</span></dd></div></Link>
                                    <Link to="/FAQ"><div><dd>안전 및 정책 센터 <span className="sub_menu_myprofile_icon">&gt;</span></dd></div></Link>
                                    <Link to="/FAQ"><div><dd>안전을 위한 도움말 <span className="sub_menu_myprofile_icon">&gt;</span></dd></div></Link>
                                    <h2>법적 고지</h2>
                                    <Link to="/FAQ"><div><dd>개인정보 취급방침 <span className="sub_menu_myprofile_icon">&gt;</span></dd></div></Link>
                                    <Link href="#"><div><dd>로그아웃</dd></div></Link>
                                    <Link href="#"><div><dd>계정삭제</dd></div></Link>
                                </dl>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
};

export default SideMenu