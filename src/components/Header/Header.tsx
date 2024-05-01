import { useTranslation } from 'react-i18next';
import { landingPageIds } from '@config/ui';
import './Header.scss';
import { useEffect, useState } from 'react';
import { LanguageSwitch } from '@components/LanguageSwitch/LanguageSwitch';

type HeaderNavListProps = {
    onClickAny?: () => void;
    activeId?: string;
};

const HeaderNavList = ({
    onClickAny = () => {},
    activeId,
}: HeaderNavListProps) => {
    const { t } = useTranslation();

    return (
        <nav>
            <ul className="landing-header__nav-list">
                <li
                    onClick={() => {
                        onClickAny();
                    }}
                >
                    <a
                        className={
                            activeId === landingPageIds.hero
                                ? 'landing-header__active-link'
                                : ''
                        }
                        href={`#${landingPageIds.hero}`}
                    >
                        {t('home')}
                    </a>
                </li>

                <li
                    onClick={() => {
                        onClickAny();
                    }}
                >
                    <a
                        href={`#${landingPageIds.about}`}
                        className={
                            activeId === landingPageIds.about
                                ? 'landing-header__active-link'
                                : ''
                        }
                    >
                        {t('about-me')}
                    </a>
                </li>

                <li
                    onClick={() => {
                        onClickAny();
                    }}
                >
                    <a
                        href={`#${landingPageIds.workExperience}`}
                        className={
                            activeId === landingPageIds.workExperience
                                ? 'landing-header__active-link'
                                : ''
                        }
                    >
                        {t('work-experience')}
                    </a>
                </li>

                <li
                    onClick={() => {
                        onClickAny();
                    }}
                >
                    <a
                        href={`#${landingPageIds.projects}`}
                        className={
                            activeId === landingPageIds.projects
                                ? 'landing-header__active-link'
                                : ''
                        }
                    >
                        {t('projects')}
                    </a>
                </li>

                <li
                    onClick={() => {
                        onClickAny();
                    }}
                >
                    <a
                        href={`#${landingPageIds.skills}`}
                        className={
                            activeId === landingPageIds.skills
                                ? 'landing-header__active-link'
                                : ''
                        }
                    >
                        {t('skills')}
                    </a>
                </li>

                <li
                    onClick={() => {
                        onClickAny();
                    }}
                >
                    <a
                        href={`#${landingPageIds.contact}`}
                        className={
                            activeId === landingPageIds.contact
                                ? 'landing-header__active-link'
                                : ''
                        }
                    >
                        {t('contact')}
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export const Header = () => {
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

    const [isMobileAsideActive, setIsMobileAsideActive] = useState(false);

    const onOpenMobileAside = () => {
        setIsMobileAsideActive(true);
    };

    const onCloseMobileAside = () => {
        setIsMobileAsideActive(false);
    };

    return (
        <>
            {/* header */}
            <header
                className={`landing-header 
            `}
                id="landing-header"
            >
                <div className="landing-header__main-container">
                    {/* right */}
                    <div className="landing-header__right-container">
                        <button
                            className="landing-header__hamb-icon"
                            onClick={onOpenMobileAside}
                        >
                            <img
                                src="/assets/svg/hamb-icon.svg"
                                alt="open menu icon"
                            />
                        </button>
                    </div>
                    {/* left */}
                    <div className="landing-header__left-container">
                        <HeaderNavList activeId={activeId} />

                        <LanguageSwitch />
                    </div>
                </div>
            </header>

            {/* floating header */}
            <header
                className={`landing-header 
                    ${currentScroll > 100 ? 'landing-header--scrolled' : ''}
                    ${showHeaderBar && currentScroll > 100 ? '' : 'landing-header--hide'}
                    
                `}
                id="landing-header"
            >
                <div className="landing-header__main-container">
                    {/* right */}
                    <div className="landing-header__right-container">
                        <button
                            className="landing-header__hamb-icon"
                            onClick={onOpenMobileAside}
                        >
                            <img
                                src="/assets/svg/hamb-icon.svg"
                                alt="open menu icon"
                            />
                        </button>
                    </div>
                    {/* left */}
                    <div className="landing-header__left-container">
                        <HeaderNavList activeId={activeId} />

                        <LanguageSwitch />
                    </div>
                </div>

                <div className={`landing-header__underline `}></div>
            </header>

            {/* mobile aside */}
            <div
                className={`landing-header__mobile-aside-container 
                    ${isMobileAsideActive ? 'landing-header__mobile-aside-container--active' : ''}
                `}
                onClick={onCloseMobileAside}
            ></div>

            <aside
                className={`landing-header__mobile-aside
                    ${isMobileAsideActive ? 'landing-header__mobile-aside--active' : ''}
                `}
            >
                <button
                    className="landing-header__mobile-aside__close-icon"
                    onClick={onCloseMobileAside}
                >
                    <img
                        src="/assets/svg/close-icon.svg"
                        alt="close menu icon"
                    />
                </button>
                <HeaderNavList
                    onClickAny={onCloseMobileAside}
                    activeId={activeId}
                />
                <div className="landing-header__mobile-aside__language-switch-container">
                    <LanguageSwitch />
                </div>
            </aside>
        </>
    );
};
