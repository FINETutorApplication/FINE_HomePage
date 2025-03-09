import { ScrollContainer, ScrollPage, Animator, batch, Fade, FadeIn,FadeOut, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn, Move } from "react-scroll-motion";
import Image1 from "../../../Assets/FindTutorPage/SVGs/image1.svg";
import lineDes from "../../../Assets/FindTutorPage/SVGs/des1.svg";
import rocket from "../../../Assets/FindTutorPage/rocket.png";
import React from "react";
import "./style.css";

const FindTutorPage = () => {
    return (
        <ScrollPage page={1}>
            <div class="tim-giasu">
                <div class="line-des-3"></div>
                <Animator animation={batch(MoveIn(0,500),MoveOut(0,-500)) }>
                    <div class="globe"></div>
                </Animator>
                <img class="group-2" src={lineDes}/>
                <Animator animation={batch(MoveIn(0,200),MoveOut(0,-200)) }>
                    <img class="home-1-1" src={Image1} />
                </Animator>
                <div class="circle-3"></div>
                <div class="circle-2"></div>
                <div class="circle-1"></div>
                <Animator animation={batch(MoveIn(0,400),MoveOut(0,-400)) }>
                    <img class="rocket" src={rocket} />
                </Animator>
                <div class="text-1">
                    <div class="container">
                        <div class="loading-wrapper">
                            <div class="fine_text">Fine</div>
                            <div class="loading-bar">
                                <div class="progress-bar"></div>
                            </div>
                            <div class="fast_text">Fast</div>
                        </div>
                        <div class="text">The Perfect Tutor for You in just <span>30</span> seconds!</div>
                    </div>
                </div>
                <button class="start_button-1">Bắt đầu ngay</button>
            </div>
        </ScrollPage>
    );
};

export default FindTutorPage;
