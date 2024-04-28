import { landingPageIds } from '../../../config/ui';
import { useTranslation } from 'react-i18next';
import './LandingContact.scss';
import { data } from '@config/data';

export const LandingContact = () => {
    const { t } = useTranslation();

    return (
        <div className="landing-contact container" id={landingPageIds.contact}>
            <h2 className="title">{t('contact-title')}</h2>
            <div className="title-underline"></div>

            <div className="landing-contact__container">
                <div className="landing-contact__left-container">
                    <h3 className="landing-contact__left-container__title">
                        {t('contact-left-title')}
                    </h3>

                    <p className="mt-3">{t('contact-left-paragraph')}</p>

                    <div className="landing-contact__contact  mt-4">
                        <div className="landing-contact__contact__icon">
                            <svg
                                width="30"
                                height="29"
                                viewBox="0 0 30 29"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clipPath="url(#clip0_25_54)">
                                    <path
                                        d="M8.26163 11.9186C9.26993 13.6856 10.432 15.3814 11.9408 16.9278C13.4545 18.4837 15.3368 19.8997 17.7733 21.1093C17.954 21.1947 18.1249 21.1947 18.2787 21.1354C18.5107 21.05 18.7475 20.8627 18.9794 20.6373C19.1601 20.4618 19.3847 20.1819 19.6191 19.876C20.5566 18.6782 21.7162 17.1911 23.3544 17.9359C23.391 17.9525 23.4179 17.9714 23.4545 17.9857L28.9184 21.0382C28.9355 21.0477 28.955 21.0643 28.9696 21.0737C29.6899 21.5552 29.9877 22.2976 29.995 23.1396C29.995 23.9958 29.6703 24.9588 29.1942 25.7723C28.5644 26.8467 27.6366 27.5582 26.5673 28.0279C25.5492 28.4832 24.4164 28.7275 23.3275 28.8841C21.6186 29.1284 20.017 28.9718 18.3788 28.4832C16.7773 28.0018 15.1635 27.2072 13.4008 26.1494L13.2714 26.0688C12.4633 25.5778 11.5893 25.0536 10.7323 24.4346C7.59757 22.1339 4.40176 18.811 2.31924 15.1537C0.573639 12.0846 -0.378509 8.77122 0.14151 5.61435C0.429596 3.88294 1.19376 2.30806 2.52676 1.26921C3.68887 0.358441 5.25382 -0.139638 7.28018 0.0358757C7.51212 0.0524783 7.71964 0.182927 7.8295 0.377415L11.3329 6.1314C11.8456 6.77653 11.9091 7.41692 11.6283 8.05731C11.3964 8.58147 10.9276 9.06532 10.288 9.51596C10.1 9.6725 9.8754 9.83141 9.63858 9.99744C8.85489 10.5501 7.96378 11.1881 8.26895 11.9376L8.26163 11.9186Z"
                                        fill="#75598D"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_25_54">
                                        <rect
                                            width="30"
                                            height="29"
                                            fill="white"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>

                        <div className="landing-contact__contact__info">
                            <h4 className="landing-contact__contact__info__title">
                                {t('contact-phone')}
                            </h4>
                            <p className="landing-contact__contact__info__text">
                                <a href="tel:" className="text-decoration-none">
                                    {data.phone}
                                </a>
                            </p>
                        </div>
                    </div>

                    <div className="landing-contact__contact  mt-3">
                        <div className="landing-contact__contact__icon">
                            <svg
                                width="30"
                                height="21"
                                viewBox="0 0 30 21"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clipPath="url(#clip0_25_65)">
                                    <path
                                        d="M30 18.7819C29.917 19.0156 29.8341 19.2501 29.7628 19.4503C26.7436 16.468 23.7274 13.488 20.7082 10.5057C23.7204 7.53434 26.7389 4.55593 29.7644 1.57129C29.827 1.74424 29.9131 1.98186 29.9992 2.21948V18.7811L30 18.7819Z"
                                        fill="#75598D"
                                    />
                                    <path
                                        d="M1.50769 0.216502C1.85604 0.139374 2.15272 0.0684777 2.45253 0.0108261C2.55664 -0.00865084 2.66702 0.00537253 2.77426 0.00537253C10.9263 0.00537253 19.0792 0.0030353 27.2313 0.0116051C27.6297 0.0116051 28.0289 0.109769 28.4274 0.161967C28.4305 0.195467 28.4344 0.228967 28.4376 0.262468C28.3843 0.324015 28.335 0.388678 28.2779 0.44633C24.1282 4.58946 19.9786 8.73103 15.8282 12.8734C15.2904 13.4094 14.7088 13.4078 14.1695 12.8703C10.0261 8.73414 5.88354 4.59881 1.74018 0.46269C1.67912 0.401922 1.6212 0.337259 1.50769 0.215723V0.216502Z"
                                        fill="#75598D"
                                    />
                                    <path
                                        d="M10.6257 11.8278C11.3795 12.5703 12.1897 13.3712 13.0023 14.169C13.8814 15.0314 15.1049 15.2698 16.1781 14.7463C16.5037 14.5873 16.8012 14.3466 17.065 14.0942C17.7961 13.3938 18.503 12.6669 19.2201 11.9517C19.2874 11.8847 19.3586 11.8208 19.3852 11.7959C22.4107 14.7829 25.4245 17.7566 28.5111 20.8036C28.0954 20.876 27.7479 20.9843 27.3995 20.989C25.9059 21.0085 24.4116 20.9976 22.918 20.9976C16.2008 20.9976 9.48282 21.0007 2.76562 20.9906C2.36717 20.9906 1.96794 20.8908 1.50531 20.8285C4.59345 17.7815 7.6041 14.8109 10.6265 11.8286L10.6257 11.8278Z"
                                        fill="#75598D"
                                    />
                                    <path
                                        d="M9.3114 10.4982C6.2851 13.4867 3.26662 16.4667 0.209007 19.4856C0.140904 19.1607 0.0101764 18.8265 0.00939359 18.4915C-0.0031312 13.1657 -0.0031312 7.83918 0.00939359 2.51341C0.0101764 2.17841 0.139338 1.84341 0.209007 1.51074C3.26819 4.53122 6.28666 7.51119 9.31218 10.4982H9.3114Z"
                                        fill="#75598D"
                                    />
                                    <g clipPath="url(#clip1_25_65)">
                                        <path
                                            d="M30 18.7819C29.917 19.0156 29.8341 19.2501 29.7628 19.4503C26.7436 16.468 23.7274 13.488 20.7082 10.5057C23.7204 7.53434 26.7389 4.55593 29.7644 1.57129C29.827 1.74424 29.9131 1.98186 29.9992 2.21948V18.7811L30 18.7819Z"
                                            fill="#75598D"
                                        />
                                        <path
                                            d="M1.50769 0.216502C1.85604 0.139374 2.15272 0.0684777 2.45253 0.0108261C2.55664 -0.00865084 2.66702 0.00537253 2.77426 0.00537253C10.9263 0.00537253 19.0792 0.0030353 27.2313 0.0116051C27.6297 0.0116051 28.0289 0.109769 28.4274 0.161967C28.4305 0.195467 28.4344 0.228967 28.4376 0.262468C28.3843 0.324015 28.335 0.388678 28.2779 0.44633C24.1282 4.58946 19.9786 8.73103 15.8282 12.8734C15.2904 13.4094 14.7088 13.4078 14.1695 12.8703C10.0261 8.73414 5.88354 4.59881 1.74018 0.46269C1.67912 0.401922 1.6212 0.337259 1.50769 0.215723V0.216502Z"
                                            fill="#75598D"
                                        />
                                        <path
                                            d="M10.6257 11.8278C11.3795 12.5703 12.1897 13.3712 13.0023 14.169C13.8814 15.0314 15.1049 15.2698 16.1781 14.7463C16.5037 14.5873 16.8012 14.3466 17.065 14.0942C17.7961 13.3938 18.503 12.6669 19.2201 11.9517C19.2874 11.8847 19.3586 11.8208 19.3852 11.7959C22.4107 14.7829 25.4245 17.7566 28.5111 20.8036C28.0954 20.876 27.7479 20.9843 27.3995 20.989C25.9059 21.0085 24.4116 20.9976 22.918 20.9976C16.2008 20.9976 9.48282 21.0007 2.76562 20.9906C2.36717 20.9906 1.96794 20.8908 1.50531 20.8285C4.59345 17.7815 7.6041 14.8109 10.6265 11.8286L10.6257 11.8278Z"
                                            fill="#75598D"
                                        />
                                        <path
                                            d="M9.3114 10.4982C6.2851 13.4867 3.26662 16.4667 0.209007 19.4856C0.140904 19.1607 0.0101764 18.8265 0.00939359 18.4915C-0.0031312 13.1657 -0.0031312 7.83918 0.00939359 2.51341C0.0101764 2.17841 0.139338 1.84341 0.209007 1.51074C3.26819 4.53122 6.28666 7.51119 9.31218 10.4982H9.3114Z"
                                            fill="#75598D"
                                        />
                                    </g>
                                </g>
                                <defs>
                                    <clipPath id="clip0_25_65">
                                        <rect
                                            width="30"
                                            height="21"
                                            fill="white"
                                        />
                                    </clipPath>
                                    <clipPath id="clip1_25_65">
                                        <rect
                                            width="30"
                                            height="21"
                                            fill="white"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>

                        <div className="landing-contact__contact__info">
                            <h4 className="landing-contact__contact__info__title">
                                {t('contact-email')}
                            </h4>
                            <p className="landing-contact__contact__info__text ">
                                <a
                                    href="mailto:"
                                    className="text-decoration-none"
                                >
                                    {data.email}
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* social */}
                    <div className="landing-contact__social mt-3">
                        {/* linkedin */}
                        <a
                            href={data.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            className="landing-contact__social__icon"
                        >
                            <img
                                src={'/assets/svg/linkedin.svg'}
                                alt="linkedin button"
                                className="landing-contact__social__icon"
                            />
                        </a>

                        {/* whatsapp */}
                        <a
                            href={`https://wa.me/${data.whatsapp}?text=${t('whatsapp-message')}`}
                            target="_blank"
                            rel="noreferrer"
                            className="landing-contact__social__icon"
                        >
                            <img
                                src={'/assets/svg/whatsapp.svg'}
                                alt="whatsapp button"
                                className="landing-contact__social__icon"
                            />
                        </a>

                        {/* github */}
                        <a
                            href={data.github}
                            target="_blank"
                            rel="noreferrer"
                            className="landing-contact__social__icon"
                        >
                            <img
                                src={'/assets/svg/github.svg'}
                                alt="github button"
                                className="landing-contact__social__icon"
                            />
                        </a>
                    </div>
                </div>

                <div className="landing-contact__right-container ">
                    <div className="landing-contact__form">
                        <div className="landing-contact__form__title-ribbon">
                            <h3 className="landing-contact__right-container__title">
                                {t('contact-right-title')}
                            </h3>
                        </div>

                        <div className="landing-contact__form__form">
                            {/* name */}
                            <div className="landing-contact__form__input-group">
                                <label
                                    htmlFor="name"
                                    className="landing-contact__form__label"
                                >
                                    <span className="landing-contact__form__label__number">
                                        01
                                    </span>
                                    {t('contact-name-label')}
                                </label>

                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="landing-contact__form__input"
                                    placeholder={t('contact-name-placeholder')}
                                />
                            </div>

                            {/* email */}
                            <div className="landing-contact__form__input-group">
                                <label
                                    htmlFor="email"
                                    className="landing-contact__form__label"
                                >
                                    <span className="landing-contact__form__label__number">
                                        02
                                    </span>
                                    {t('contact-email-label')}
                                </label>

                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="landing-contact__form__input"
                                    placeholder={t('contact-email-placeholder')}
                                />
                            </div>

                            {/* organization name */}
                            <div className="landing-contact__form__input-group">
                                <label
                                    htmlFor="organization"
                                    className="landing-contact__form__label"
                                >
                                    <span className="landing-contact__form__label__number">
                                        03
                                    </span>
                                    {t('contact-organization-label')}
                                </label>

                                <input
                                    type="text"
                                    id="organization"
                                    name="organization"
                                    className="landing-contact__form__input"
                                    placeholder={t(
                                        'contact-organization-placeholder',
                                    )}
                                />
                            </div>

                            {/* reason */}
                            <div className="landing-contact__form__input-group">
                                <label
                                    htmlFor="reason"
                                    className="landing-contact__form__label"
                                >
                                    <span className="landing-contact__form__label__number">
                                        04
                                    </span>
                                    {t('contact-reason-label')}
                                </label>
                                <input
                                    type="text"
                                    id="reason"
                                    name="reason"
                                    className="landing-contact__form__input"
                                    placeholder={t(
                                        'contact-reason-placeholder',
                                    )}
                                />
                            </div>

                            {/* message */}
                            <div className="landing-contact__form__input-group">
                                <label
                                    htmlFor="message"
                                    className="landing-contact__form__label"
                                >
                                    <span className="landing-contact__form__label__number">
                                        05
                                    </span>
                                    {t('contact-message-label')}
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    className="landing-contact__form__input"
                                    placeholder={t(
                                        'contact-message-placeholder',
                                    )}
                                ></textarea>
                            </div>
                        </div>

                        <div className="landing-contact__form__send-button-container">
                            <button
                                type="submit"
                                className="landing-contact__form__send-button"
                            >
                                {t('contact-send-button')}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
