import { Header } from '@components/Header/Header';
import { LandingAboutMe } from '@components/landingSections/LandingAboutMe/LandingAboutMe';
import { LandingHero } from '@components/landingSections/LandingHero/LandingHero';
import { LandingSkills } from '@components/landingSections/LandingSkills/LandingSkills';
import { LandingWorkExperience } from '@components/landingSections/LandingWorkExperience/LandingWorkExperience';
import { LandingProjects } from '@components/landingSections/LandingProjects/LandingProjects';
import { LandingContact } from '@components/landingSections/LandingContent/LandingContact';

import './LandingPage.scss';
import { LandingFooter } from '@components/landingSections/LandingFooter/LandingFooter';

export const LandingPage = () => {
    return (
        <div className="landing-page">
            <Header />

            <LandingHero />

            <LandingAboutMe />

            <div className="landing-page__desk-image mt-4">
                <img src="/assets/images/desk.png" alt="desk-image" />
            </div>

            <LandingWorkExperience />

            <LandingProjects />

            <LandingSkills />

            <LandingContact />

            <LandingFooter />
        </div>
    );
};
