import { useTranslation } from 'react-i18next';
import './LandingProjects.scss';
import { landingPageIds } from '@config/ui';
import { data } from '@config/data';

export const LandingProjects = () => {
    const { t, i18n } = useTranslation();

    return (
        <div
            className="landing-projects container"
            id={landingPageIds.projects}
        >
            <h2 className="title">{t('projects-title')}</h2>
            <div className="title-underline"></div>

            <div className="landing-projects__projects mt-4">
                {data.projects.map((project, index) => (
                    <div className="landing-projects__project-card" key={index}>
                        <div className="landing-projects__project-card__image">
                            <img src={project.image} alt={project.title} />
                        </div>
                        <div className="landing-projects__project-card__content">
                            <div>
                                <h4 className="landing-projects__project-card__title">
                                    {project.title}
                                </h4>
                                <p className="landing-projects__project-card__description">
                                    {
                                        project.description[
                                            i18n.language as 'en' | 'es'
                                        ]
                                    }
                                </p>

                                <div className="landing-projects__project-card__tags">
                                    {project.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="tag"
                                            style={{
                                                backgroundColor: tag.color,
                                                color: tag.textColor,
                                            }}
                                        >
                                            {tag.label}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <a
                                href={project.url}
                                target="_blank"
                                rel="noreferrer"
                                className="landing-projects__project-card__button"
                            >
                                {t('view-project')}
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
