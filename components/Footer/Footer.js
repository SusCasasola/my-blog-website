import React from 'react';
import PropTypes from 'prop-types';
import translate from 'utils/translate';

const Footer = ({ currentUrl, currentLang, showLangSwitch }) => {
  const renderLangPicker = () => {
    const newLang = currentLang === 'es' ? 'en' : 'es';
    let newUrl = currentUrl.replace(`/${currentLang}`, `/${newLang}`);
    if (newUrl === currentUrl) {
      newUrl = `/${newLang}${newUrl}`;
    }
    return <a href={newUrl}>{translate(currentLang, 'footer_switch_lang')}</a>;
  };

  return (
    <footer>
      {showLangSwitch && renderLangPicker()}
      <span>{translate(currentLang, 'footer_built_with')}</span>
      <span>© Sussie Casasola - 2019</span>
    </footer>
  );
};

Footer.propTypes = {
  showLangSwitch: PropTypes.bool,
  currentUrl: PropTypes.string.isRequired,
  currentLang: PropTypes.string.isRequired,
};

Footer.defaultProps = {
  showLangSwitch: true,
};

export default Footer;
