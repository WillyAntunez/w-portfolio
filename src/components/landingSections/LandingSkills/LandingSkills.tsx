import { landingPageIds } from '@config/ui';
import { useTranslation } from 'react-i18next';
import { data } from '@config/data';
import './LandingSkills.scss';
import { Skills } from './components/Skills/Skills';

export const LandingSkills = () => {
    const { t } = useTranslation();

    return (
        <div className="landing-skills container" id={landingPageIds.skills}>
            <h2 className="title">{t('skills-title')}</h2>
            <div className="title-underline"></div>

            <p className="mt-2">{t('skills-paragraph')}</p>

            {/* skills */}
            <div className="landing-skills__skills-container mt-4">
                <Skills
                    skills={data.technicalSkills.frontend}
                    title={t('frontend-skills-title')}
                    description={t('frontend-skills-paragraph')}
                />
            </div>

            <div className="landing-skills__skills-container mt-4">
                <Skills
                    skills={data.technicalSkills.backend}
                    title={t('backend-skills-title')}
                    description={t('backend-skills-paragraph')}
                />
            </div>

            <div className="landing-skills__skills-container mt-4">
                <Skills
                    skills={data.technicalSkills.design}
                    title={t('design-skills-title')}
                    description={t('design-skills-paragraph')}
                />
            </div>

            <div className="landing-skills__skills-container mt-4">
                <Skills
                    skills={data.technicalSkills.other}
                    title={t('others-skills-title')}
                    description={t('others-skills-paragraph')}
                />
            </div>

            {/* icons */}
            <div className="landing-skills__icons-container mt-4">
                <div className="landing-skills__icon">
                    <img
                        src="/assets/images/technologies/html.png"
                        alt="html"
                    />
                </div>

                <div className="landing-skills__icon">
                    <img src="/assets/images/technologies/css.png" alt="css" />
                </div>

                <div className="landing-skills__icon">
                    <img
                        src="/assets/images/technologies/js.png"
                        alt="javascript"
                    />
                </div>

                <div className="landing-skills__icon">
                    <img
                        src="/assets/images/technologies/react.png"
                        alt="react"
                    />
                </div>

                <div className="landing-skills__icon">
                    <img
                        src="/assets/images/technologies/node.png"
                        alt="node js"
                    />
                </div>

                <div className="landing-skills__icon">
                    <img
                        src="/assets/images/technologies/db.png"
                        alt="database"
                    />
                </div>
            </div>
        </div>
    );
};
