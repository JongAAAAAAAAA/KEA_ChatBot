import { Color } from 'three';
import './Cheolwoong.css';
import Kkarmi from './Kkarmi.jpg';
import Kkarmi2 from './Kkarmi2.jpg';
import Kkarmi4 from './Kkarmi4.jpg';
import profileImg from './profileImg.jpg';
import travel from './travel.jpg';
import t2 from './t2.jpg';
import t3 from './t3.jpg';
import t5 from './t5.jpg';
import t6 from './t6.jpg';

export default function Cheolwoong() {
    return (        
        <div>                            
            {/* <section>                
                <div>
                    <img className="profile_img" src={Kkarmi} alt="profileImg"/>          
                    <div className="title_fonts">
                        <p>테스트용 텍스트</p>
                    </div>                                               
                </div>            
                <div>
                    <img className="profile_img" src={Kkarmi2} alt="profileImg"/>                    
                </div>                
                <div>
                    <img className="profile_img" src={Kkarmi} alt="profileImg"/>
                </div>
            </section> */}            
                <header className="title_fonts">
                    <div className='header_background' style={{paddingTop:"50px"}}>                                                
                    </div>
                </header>            
            <div className="background_img">     
                <div className="profile_parent">
                    <div className="profile_child" style={{marginLeft : "200px"}}>
                        <img className="profile_img" src={profileImg} alt="profileImg"/>        
                        <h4 className="content_fonts_smaller">201835539 최철웅, Software Architect</h4> 
                        <p className="content_fonts_smaller">빠르지 않아도 괜찮다. 옳바른 방향으로 꾸준히 나아가자.</p>                  
                    </div>
                    <div className="profile_left_text_child">
                        <div  style={{marginTop:"100px"}}>
                            <h4 className="content_fonts"><strong>안녕하세요?</strong></h4>
                            <p className="content_fonts_smaller">방문해주셔서 감사합니다!</p>
                            <p className="content_fonts_smaller">천천히 둘러보세요!</p>
                        </div>
                        <div  style={{marginTop:"50px"}}>
                            {/* <h4 className="content_fonts"><strong>Greetings</strong></h4> */}
                            <p className="content_fonts_smaller">Greetings! Thank you for visiting</p>
                            <p className="content_fonts_smaller">Please feel free to read</p>
                        </div>
                    </div>                    
                </div>    
                <hr style={{width:"1000px"}}/>

                <div className="profile_parent">
                    <div className="profile_child" style={{marginLeft : "200px"}}>
                            <h4 className="content_fonts"><strong>1999년 출생</strong></h4>
                            <p className="content_fonts_smaller">경상남도 창원</p>
                            <p className="content_fonts_smaller">2012년 남양초등학교 졸업</p>
                            <p className="content_fonts_smaller">2015년 사파중학교 졸업</p>
                            <p className="content_fonts_smaller">2018년 토월고등학교 졸업, 가천대학교 재학</p>
                            <p className="content_fonts_smaller">2021년 대한민국 육군 병장 만기 전역</p>

                            <hr style={{width : "300px", marginTop : "50px"}}></hr>
                            <p className="content_fonts_smaller">다섯 독수리 중 첫째</p>
                            <p className="content_fonts_smaller">현재 분당 야탑 거주</p>
                    </div>                    
                    <div className="profile_child" style={{marginRight : "200px"}}>
                        <img className="profile_img" src={travel} alt="travelImg"/>
                    </div>
                </div>
                <hr style={{width:"1000px"}}/>
                <div style={{marginTop:"50px"}}></div>

                <div className="profile_parent">
                    <div className="profile_child">         
                        <h2 className="content_fonts_green_color">여행 Lover</h2>       
                        <p className="content_fonts_smaller_green_color">저는 여행을 굉장히 좋아합니다!</p>
                        <h2 className="content_fonts_green_color">🤿🌎🏝️📸⛱️</h2>
                        <p className="content_fonts_smaller_green_color">앞으로도 세계 곳곳을 가보고 싶습니다</p>

                        <hr style={{width:"1000px"}}/>

                        <div className="parent_pure">
                            <div className="child_pure">
                                <img className="travel_img" style={{marginLeft:"350px"}} src={t6} alt="Kkarmi1"/>
                            </div>
                            <div className="child_pure">
                                <img className="travel_img" style={{marginRight:"350px"}} src={t2} alt="Kkarmi1"/>
                            </div>
                        </div>
                        <div className="parent_pure">
                            <div className="child_pure">
                                <img className="travel_img" style={{marginLeft:"350px"}} src={t3} alt="Kkarmi1"/>
                            </div>
                            <div className="child_pure">
                                <img className="travel_img" style={{marginRight:"350px"}} src={t5} alt="Kkarmi1"/>
                            </div>
                        </div>
                    </div>
                </div>

                <hr style={{width:"1000px"}}/>

                <div style={{marginTop:"315px"}}></div>                

                <div className="parent">
                    <div className="child left">
                        <img className="profile_img" src={Kkarmi} alt="Kkarmi1"/>
                        <p className="text_color_white">🐶저는 강아지도 키우고 있습니다!🐶</p>
                    </div>
                    <div className="child center">
                        <img className="profile_img" src={Kkarmi2} alt="Kkarmi2"/>
                        <p className="text_color_white">🕶️검은 털을 가진 까미입니다🕶️</p>
                    </div>
                    <div className="child right">
                        <img className="profile_img" src={Kkarmi4} alt="Kkarmi3"/>
                        <p className="text_color_white">😥성격이 밝지만 때때로 버릇이 없어요😥</p>
                    </div>
                </div>                       
            </div>            
        </div>
    )
}