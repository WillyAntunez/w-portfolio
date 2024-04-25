import { landingPageIds } from '@config/ui';
import { useTranslation } from 'react-i18next';

import './LandingWorkExperience.scss';
import { data } from '@config/data';

export const LandingWorkExperience = () => {
    const { t, i18n } = useTranslation();

    const language: 'en' | 'es' = i18n.language === 'en' ? 'en' : 'es';

    return (
        <div
            className="landing-work-experience container"
            id={landingPageIds.workExperience}
        >
            <h2 className="title">{t('work-experience-title')}</h2>
            <div className="title-underline"></div>

            {/* {i18n.language} */}

            <div className="landing-work-experience__work-experience mt-4">
                {data.workExperience.map((work, index) => (
                    <div
                        key={index}
                        className="landing-work-experience__work-experience-item"
                    >
                        {/* image */}
                        <div className="landing-work-experience__work-experience-item__image">
                            <img src={work.logo} alt={work.company} />
                        </div>
                        {/* content */}
                        <div className="landing-work-experience__work-experience-item__content">
                            {/* title */}
                            <h4 className="landing-work-experience__work-experience-item__title">
                                {work.company}
                            </h4>
                            {/* job title */}
                            <p className="landing-work-experience__work-experience-item__job-title">
                                {work.jobTitle[language]}
                            </p>
                            {/* time */}
                            <p className="landing-work-experience__work-experience-item__time">
                                {work.startDate} - {work.endDate}
                            </p>
                            {/* description */}
                            <p className="landing-work-experience__work-experience-item__description">
                                {work.jobDescription[language]}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
