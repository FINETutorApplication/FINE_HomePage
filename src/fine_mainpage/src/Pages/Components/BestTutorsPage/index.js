import Image1 from "../../../Assets/FindTutorPage/SVGs/image1.svg";
import lineDes from "../../../Assets/FindTutorPage/SVGs/des1.svg";
import rocket from "../../../Assets/FindTutorPage/rocket.png";
import { ScrollContainer, ScrollPage, Animator, batch, Fade, FadeIn, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn, Move } from "react-scroll-motion";
import React, { useEffect, useRef } from "react";
import "./style.css";

const BestTutorsPage = () => {
    const scrollRef = useRef(null);

    const bestTutors = [
        { name: "Nguyễn Xuân Hiệp", subject: "Front-end Developer", imageSrc: "https://images.unsplash.com/photo-1538947151057-dfe933d688d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80", link_quick_book: "" },
        { name: "Nguyễn Văn A", subject: "Back-end Developer", imageSrc: "https://images.unsplash.com/photo-1538947151057-dfe933d688d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80", link_quick_book: "" },
        { name: "Trần Thị B", subject: "UI/UX Designer", imageSrc: "https://images.unsplash.com/photo-1538947151057-dfe933d688d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80", link_quick_book: "" },
        { name: "Phạm Công C", subject: "Full Stack Developer", imageSrc: "https://images.unsplash.com/photo-1538947151057-dfe933d688d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80", link_quick_book: "" },
        { name: "Lê Duy D", subject: "Data Scientist", imageSrc: "https://images.unsplash.com/photo-1538947151057-dfe933d688d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80", link_quick_book: "" },
    ];
    useEffect(() => {
        const scrollContainer = scrollRef.current;
        let scrollAmount = 200;
        const speed = 350; 
        const delay = 2000;

        const scroll = () => {
            if (scrollContainer) {
                scrollAmount += speed;
                scrollContainer.scrollLeft = scrollAmount;
                if (scrollAmount >= scrollContainer.scrollWidth / 2) {
                    scrollAmount = 0;
                }
            }
        };

        const interval = setInterval(scroll, delay);
        return () => clearInterval(interval);
    }, []);

    return (
        <ScrollPage page={2}>
            <div class="frame-4">
                <div class="des-2"></div>
                <div class="des-1"></div>
                <div class="des-3"></div>
                <div class="des-6"></div>
                <div class="des-5"></div>
                <Animator animation={batch(MoveIn(0,300),MoveOut(0,-300)) }>
                    <div className="title-best-tutor">Our Best Tutors</div>
                </Animator>
                <Animator animation={batch(MoveIn(0,600),MoveOut(1000,-500)) }>
                <div className="listbest-tutors" ref={scrollRef}>
                    {[...bestTutors, ...bestTutors].map((tutor, index) => (
                        <div key={index} className="tutor-card">
                            <img className="tutor-image" src={tutor.imageSrc} />
                            <div class="tutor-details">
                            <div className="tutor-name">{tutor.name}</div>
                            <div className="tutor-subject">{tutor.subject}</div>
                            <a href={tutor.link_quick_book} target="_blank" rel="noreferrer" className="book-button">
                                Đặt lịch ngay
                            </a>
                            </div>
                        </div>
                    ))}
                </div>
                </Animator>
                <div class="des-4"></div>
            </div>
        </ScrollPage>
    );
};

export default BestTutorsPage;
