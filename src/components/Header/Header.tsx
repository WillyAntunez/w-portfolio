import { useTranslation } from 'react-i18next';
import { landingPageIds } from '@config/ui';
import './Header.scss';

export const Header = () => {
    const { t } = useTranslation();

    return (
        <header className="landing-header" id="landing-header">
            <div className="landing-header__main-container">
                {/* right */}
                <div className="landing-header__right-container"></div>
                {/* left */}
                <div className="landing-header__left-container">
                    <nav>
                        <ul className="landing-header__left-container__nav-list">
                            <li>
                                <a href={`#${landingPageIds.hero}`}>
                                    {t('home')}
                                </a>
                            </li>
                            <li>
                                <a href={`#${landingPageIds.about}`}>
                                    {t('about-me')}
                                </a>
                            </li>
                            <li>
                                <a href={`#${landingPageIds.skills}`}>
                                    {t('skills')}
                                </a>
                            </li>
                            <li>
                                <a href={`#${landingPageIds.workExperience}`}>
                                    {t('work-experience')}
                                </a>
                            </li>
                            <li>
                                <a href={`#${landingPageIds.projects}`}>
                                    {t('projects')}
                                </a>
                            </li>
                            <li>
                                <a href={`#${landingPageIds.contact}`}>
                                    {t('contact')}
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};
