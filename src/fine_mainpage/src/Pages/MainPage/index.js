import React from "react";
import { ScrollContainer, ScrollPage, Animator, batch, Fade, FadeIn, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";
import HeroPage1 from '../Components/HeroPage1';
import FindTutorPage from '../Components/FindTuTorPage';
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
            <ScrollPage page={0}>
                <HeroPage1 />
            </ScrollPage>

            <ScrollPage page={1}>
                <FindTutorPage />
            </ScrollPage>
        </ScrollContainer>
    );
}
export default Home;
