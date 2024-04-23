import { landingPageIds } from '@config/ui';
import { useTranslation } from 'react-i18next';
import './LandingAboutMe.scss';

export const LandingAboutMe = () => {
    const { t } = useTranslation();

    return (
        <div className="landing-about-me container" id={landingPageIds.about}>
            {/* left */}
            <div className="landing-about-me__left">
                <h2 className="title">{t('about-me-title')}</h2>
                <div className="title-underline"></div>

                {
                    <div className="landing-about-me__image landing-about-me__image--mobile mt-1">
                        <img
                            src="/assets/images/me.png"
                            alt="Me (Willy Antunez)"
                        />
                    </div>
                }

                <p className="paragraph mt-2">{t('about-me-paragraph-1')}</p>
                <p className="paragraph mt-2">{t('about-me-paragraph-2')}</p>
                <p className="paragraph mt-2">{t('about-me-paragraph-3')}</p>
            </div>

            {/* right */}
            <div className="landing-about-me__right">
                <div className="landing-about-me__image">
                    <img src="/assets/images/me.png" alt="Me (Willy Antunez)" />
                </div>
            </div>
        </div>
    );
};
