import { useTranslation } from 'react-i18next';

import { data } from '@config/data';

import './LandingHero.scss';
import { landingPageIds } from '@config/ui';

export const LandingHero = () => {
    const { t } = useTranslation();

    return (
        <div className="landing-hero full-container" id={landingPageIds.hero}>
            <div className="landing-hero__inside-container">
                {/* top text */}
                <div className="landing-hero__top-text">
                    <span className="title">{t('hi-my-name-is')}</span>
                    <h1 className="align-text-right landing-hero__top-text__name">
                        {data.shortName.toUpperCase()}
                    </h1>

                    <span className="title">
                        {t('and-i-am-a')}{' '}
                        <h2 className="landing-hero__top-text__title">
                            {t('web-developer')}
                        </h2>
                    </span>

                    <button className="landing-hero__top-text__cta">
                        {t('contact-me-cto')}
                    </button>
                </div>

                {/* bottom line */}
                <div className="landing-hero__bottom-line"></div>
            </div>
        </div>
    );
};
