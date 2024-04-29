import { useTranslation } from 'react-i18next';
import { landingPageIds } from '@config/ui';
import './Header.scss';
import { useEffect, useState } from 'react';
import { LanguageSwitch } from '@components/LanguageSwitch/LanguageSwitch';

export const Header = () => {
    const { t } = useTranslation();

    const [showHeaderBar, setShowHeaderBar] = useState(false);
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [currentScroll, setCurrentScroll] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const st = window.pageYOffset || document.documentElement.scrollTop;

            if (st < lastScrollTop) {
                // downscroll code
                setShowHeaderBar(true);
            } else {
                // upscroll code
                setShowHeaderBar(false);
            }
            setLastScrollTop(st <= 0 ? 0 : st);
            setCurrentScroll(st);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollTop, showHeaderBar, currentScroll]);

    // watch active id on scroll and set in state
    const [activeId, setActiveId] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const { hero, about, workExperience, projects, skills, contact } =
                landingPageIds;

            const heroSection = document.getElementById(hero);
            const aboutSection = document.getElementById(about);
            const workExperienceSection =
                document.getElementById(workExperience);
            const projectsSection = document.getElementById(projects);
            const skillsSection = document.getElementById(skills);
            const contactSection = document.getElementById(contact);

            const scrollPosition = window.scrollY + 200;

            if (contactSection && scrollPosition >= contactSection.offsetTop) {
                setActiveId(contact);
            } else if (
                skillsSection &&
                scrollPosition >= skillsSection.offsetTop
            ) {
                setActiveId(skills);
            } else if (
                projectsSection &&
                scrollPosition >= projectsSection.offsetTop
            ) {
                setActiveId(projects);
            } else if (
                workExperienceSection &&
                scrollPosition >= workExperienceSection.offsetTop
            ) {
                setActiveId(workExperience);
            } else if (
                aboutSection &&
                scrollPosition >= aboutSection.offsetTop
            ) {
                setActiveId(about);
            } else if (heroSection && scrollPosition >= heroSection.offsetTop) {
                setActiveId(hero);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [activeId]);

    return (
        <>
            <header
                className={`landing-header 
            `}
                id="landing-header"
            >
                <div className="landing-header__main-container">
                    {/* right */}
                    <div className="landing-header__right-container"></div>
                    {/* left */}
                    <div className="landing-header__left-container">
                        <nav>
                            <ul className="landing-header__left-container__nav-list">
                                <li>
                                    <a href={`#${landingPageIds.about}`}>
                                        {t('about-me')}
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href={`#${landingPageIds.workExperience}`}
                                    >
                                        {t('work-experience')}
                                    </a>
                                </li>

                                <li>
                                    <a href={`#${landingPageIds.projects}`}>
                                        {t('projects')}
                                    </a>
                                </li>

                                <li>
                                    <a href={`#${landingPageIds.skills}`}>
                                        {t('skills')}
                                    </a>
                                </li>

                                <li>
                                    <a href={`#${landingPageIds.contact}`}>
                                        {t('contact')}
                                    </a>
                                </li>

                                <LanguageSwitch />
                            </ul>
                        </nav>
                    </div>
                </div>

                {/* {currentScroll > 300 ? (
                <div className={`landing-header__underline `}></div>
            ) : null} */}
            </header>

            <header
                className={`landing-header 
                    ${currentScroll > 100 ? 'landing-header--scrolled' : ''}
                    ${showHeaderBar && currentScroll > 100 ? '' : 'landing-header--hide'}
                    
            `}
                id="landing-header"
            >
                <div className="landing-header__main-container">
                    {/* right */}
                    <div className="landing-header__right-container"></div>
                    {/* left */}
                    <div className="landing-header__left-container">
                        <nav>
                            <ul className="landing-header__left-container__nav-list">
                                <li>
                                    <a
                                        className={
                                            activeId === landingPageIds.hero
                                                ? 'active'
                                                : ''
                                        }
                                        href={`#${landingPageIds.hero}`}
                                    >
                                        {t('home')}
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className={
                                            activeId === landingPageIds.about
                                                ? 'active'
                                                : ''
                                        }
                                        href={`#${landingPageIds.about}`}
                                    >
                                        {t('about-me')}
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className={
                                            activeId ===
                                            landingPageIds.workExperience
                                                ? 'active'
                                                : ''
                                        }
                                        href={`#${landingPageIds.workExperience}`}
                                    >
                                        {t('work-experience')}
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className={
                                            activeId === landingPageIds.projects
                                                ? 'active'
                                                : ''
                                        }
                                        href={`#${landingPageIds.projects}`}
                                    >
                                        {t('projects')}
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className={
                                            activeId === landingPageIds.skills
                                                ? 'active'
                                                : ''
                                        }
                                        href={`#${landingPageIds.skills}`}
                                    >
                                        {t('skills')}
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className={
                                            activeId === landingPageIds.contact
                                                ? 'active'
                                                : ''
                                        }
                                        href={`#${landingPageIds.contact}`}
                                    >
                                        {t('contact')}
                                    </a>
                                </li>

                                <LanguageSwitch />
                            </ul>
                        </nav>
                    </div>
                </div>

                <div className={`landing-header__underline `}></div>
            </header>
        </>
    );
};
