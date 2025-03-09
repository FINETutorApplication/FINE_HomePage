import { ScrollContainer, ScrollPage, Animator, batch, Fade, FadeIn, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn, Move, FadeOut } from "react-scroll-motion";
import HeroPic1 from "../../../Assets/images/Frame1_Heropic.png";
import searchIcon from "../../../Assets/SVGs/Search_Icon.svg";
import lineDes from "../../../Assets/SVGs/line_des.svg";
import logoImage from "../../../Assets/images/LOGO.png";
import React from "react";
import "./style.css";

const AboutPage = () => {
    return (
        <ScrollPage page={0} animation={batch(FadeIn(0, 200), FadeOut(0, 200))}>
            <div class="frame-3">
                <Animator animation={batch(MoveIn(0,300),MoveOut(0,-300)) }>
                    <div class="des-17"></div>
                </Animator>
                <Animator animation={batch(MoveIn(0,300),MoveOut(500,-200)) }>
                    <div class="des-16"></div>
                    <div class="des-15"></div>
                    <div class="des-14"></div>
                </Animator>
                <Animator animation={batch(MoveIn(200,300),MoveOut(500,-200)) }>
                    <div class="des-13"></div>
                    <div class="des-12"></div>
                </Animator>
                <div class="des-11"></div>
                <section class="services" id="services">
                    <Animator animation={batch(MoveIn(0,600),MoveOut(0,-600)) }>
                        <h2 class="heading"><span class="services_heading">Our Services</span></h2>
                    </Animator>
                    <Animator animation={batch(MoveIn(0,300),MoveOut(0,-300)) }>
                        <div class="services-container">
                            <div class="services-box">
                                <i class='bx bx-code-alt'></i>
                                <h3>Marketing Strategist</h3>
                                <p>As a Marketing Strategist, I always engage myself to think outside the box in order to generate innovative ideas to meet budget requirements and business goals in marketing campaigns.</p>
                                <a href="#" class="btn">Read More</a>
                            </div>
                            <div class="services-box">
                                <i class='bx bxs-paint'></i>
                                <h3>Marketing Consultant</h3>
                                <p>I can provide strategic and practical advice to enhance our company's marketing efforts. Additionally, I am capable of organizing our marketing activities and strategy.</p>
                                <a href="#" class="btn">Read More</a>
                            </div>
                            <div class="services-box">
                                <i class='bx bx-bar-chart-alt'></i>
                                <h3>Digital Marketing</h3>
                                <p>I can build innovative strategies to promote the business brand, products, and services. Moreover, I experienced various marketing tools and techniques like PPC, SEO, SEM, email, and social media products.</p>
                                <a href="#" class="btn">Read More</a>
                            </div>
                        </div>
                    </Animator>
                </section>
            </div>
        </ScrollPage>
    );
};

export default AboutPage;
