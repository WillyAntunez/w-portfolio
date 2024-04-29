import { useTranslation } from 'react-i18next';
import './LandingFooter.scss';

export const LandingFooter = () => {
    const { t } = useTranslation();

    return (
        <div className="landing-footer mt-4">
            <div className="landing-footer__top-line"></div>

            <div className="landing-footer__content">
                <img
                    className="landing-footer__medal"
                    src="/assets/images/medal.png"
                    alt="medal-icon"
                />

                <div>
                    <p className="landing-footer__text ">
                        {t('footer-text-1')}
                    </p>
                    <p>{t('footer-text-2')}</p>
                </div>

                <small className="landing-footer__copy-right mt-1">
                    {t('footer-copy-right')}
                </small>
            </div>
        </div>
    );
};
