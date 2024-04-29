import './LanguageSwitch.scss';
import { useTranslation } from 'react-i18next';

export const LanguageSwitch = () => {
    const { i18n } = useTranslation();

    const handleSwitch = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en');
    };

    return (
        <div
            className={`labeled-switch`}
            onClick={() => {
                handleSwitch();
            }}
        >
            <div
                className={`labeled-switch__switch
                ${i18n.language === 'es' ? 'labeled-switch__switch--active' : ''}
            `}
            ></div>
            <div
                className={`labeled-switch__option ${
                    i18n.language === 'en'
                        ? 'labeled-switch__option--active'
                        : ''
                }`}
            >
                <img
                    src="/assets/images/flags/usa-rounded.png"
                    alt="uk flag"
                    className="labeled-switch__option-image"
                />
            </div>
            <div
                className={`
                labeled-switch__option 
                ${i18n.language === 'es' ? 'labeled-switch__option--active' : ''}
            `}
            >
                <img
                    src="/assets/images/flags/spain-rounded.png"
                    alt="spain flag"
                    className="labeled-switch__option-image"
                />
            </div>
        </div>
    );
};
