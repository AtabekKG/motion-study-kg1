import React from 'react';
import HomeHero from "./Home-hero/Home-hero";
import HomeAbout from "./Home-about/Home-about";
import HomeExams from "./Home-exams/Home-exams";
import HomeComments from "./Home-comments/Home-comments";
import HomeForm from "./Home-form/Home-form";

const Home = () => {
    return (
        <>
            <HomeHero/>
            <HomeAbout/>
            <HomeExams/>
            <HomeComments/>
            <HomeForm/>
        </>
    );
};

export default Home;