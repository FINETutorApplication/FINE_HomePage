import { ScrollContainer, ScrollPage, Animator, batch, Fade, FadeIn, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn, Move, FadeOut } from "react-scroll-motion";
import HeroPic1 from "../../../Assets/images/Frame1_Heropic.png";
import searchIcon from "../../../Assets/SVGs/Search_Icon.svg";
import lineDes from "../../../Assets/SVGs/line_des.svg";
import logoImage from "../../../Assets/images/LOGO.png";
import React from "react";
import "./style.css";

const HeroPage1 = () => {
    return (
    <ScrollPage page={0} animation={batch(FadeIn(0, 200), FadeOut(0, 200))}>
        <div class="home-page-1">
            <div class="header">
                <div class="header-items">
                    <a href="#"><img class="header-search-icon" src={searchIcon} /></a>
                    <a href="#"><div class="home-item">HOME</div></a>
                    <a href="#"><div class="find-tutor-item">TÌM GIA SƯ</div></a>
                    <a href="#"><div class="become-tutot-item">TRỞ THÀNH GIA SƯ</div></a>
                    <a href="#"><div class="about-item">VỀ CHÚNG TÔI</div></a>
                    <a href="#"><div class="contact-item">LIÊN HỆ</div></a>
                    <a href="#"><div class="header-scholarship-item">HỌC BỔNG</div></a>
                </div>
                <a href="#">
                    <div class="header-logo">
                        <img class="_1-2" src={logoImage} />
                        <div class="fine-platform">
                        <span>
                            <span class="fine-platform-span"></span>
                            <span class="fine-platform-span2">Fine</span>
                            <span class="fine-platform-span3">Platform</span>
                        </span>
                        </div>
                    </div>
                </a>
            </div>
            <div class="circle-des-2"></div>
            <Animator animation={batch(MoveOut(0,-500)) }>
                <div class="quote-1">
                    <span>
                        <span class="quote-1-span">Ignite Learning, Inspire Change with</span>
                        <span class="quote-1-span2">FINE</span>
                    </span>
                </div>
            </Animator>
            <Animator animation={batch(MoveOut(0,-700)) }>
                <div class="quote-2">
                    Nền tảng kết nối học sinh với hàng nghìn gia sư chất lượng.
                    <br /><br />
                    Học online hoặc trực tiếp một cách linh hoạt.
                </div>
            </Animator>
            <div class="circle-des-3"></div>
            <div class="circle-des-1"></div>
            <img class="line-des-1" src={lineDes}/>
            <Animator animation={batch(MoveOut(0,-300)) }>
                <img class="hero-image-1" src={HeroPic1} />
            </Animator>
            <Animator animation={batch(MoveOut(0,-600)) }>
                <button class="tutor-register-button" onClick={() => window.open("#", "_blank")}>
                    ĐĂNG KÍ LÀM GIA SƯ
                </button>
            </Animator>
            <Animator animation={batch(MoveOut(0,-500)) }>
                <button class="order-tutor-button" onClick={() => window.open("#", "_blank")}>
                    ĐẶT GIA SƯ
                </button>
            </Animator>
        </div>
    </ScrollPage>
    );
};

export default HeroPage1;
