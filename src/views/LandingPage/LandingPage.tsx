import { Header } from '@components/Header/Header';
import { LandingAboutMe } from '@components/landingSections/LandingAboutMe/LandingAboutMe';
import { LandingHero } from '@components/landingSections/LandingHero/LandingHero';

import './LandingPage.scss';

export const LandingPage = () => {
    return (
        <div className="landing-page">
            <Header />

            <LandingHero />

            <LandingAboutMe />

            <div className="landing-page__desk-image mt-3">
                <img src="/assets/images/desk.png" alt="desk-image" />
            </div>

            {/* TODO: DELETE THIS */}
            <div
                style={{
                    marginTop: '100vh',
                }}
            ></div>
        </div>
    );
};
