import React from "react";
import { ScrollContainer, ScrollPage, Animator, batch, Fade, FadeIn, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn, Move } from "react-scroll-motion";
import HeroPage1 from '../Components/HeroPage1';
import FindTutorPage from '../Components/FindTuTorPage';
import BestTutorsPage from '../Components/BestTutorsPage';
import "./style.css";

const Home = () => {
    const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());

    const handleContactClick = (url) => {
        const win = window.open(url, '_blank');
        win.focus();
    }

    const handleDownloadClick = (url) => {
        window.open(url, '_blank');
    }

    return (
        <ScrollContainer>
            <HeroPage1 />
            <FindTutorPage />
            <BestTutorsPage />
        </ScrollContainer>
    );
}
export default Home;
