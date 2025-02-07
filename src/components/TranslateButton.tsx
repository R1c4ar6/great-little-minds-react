import { useTranslation } from 'react-i18next';
import React from 'react';

const TranslateButton: React.FC = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="nav-item dropdown">
      <button className="nav-link dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        {t('navbar.translate')}
      </button>
      <ul className="dropdown-menu">
        <li><a className="dropdown-item" href="#" onClick={() => changeLanguage('en')}>English</a></li>
        <li><a className="dropdown-item" href="#" onClick={() => changeLanguage('es')}>Español</a></li>
      </ul>
    </div>
  );
}

export default TranslateButton;