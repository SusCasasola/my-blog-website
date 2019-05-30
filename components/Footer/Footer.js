import PropTypes from 'prop-types';

const Footer = ({ currentUrl, currentLang, showLangSwitch }) => {
  const renderLangPicker = () => {
    const text = {
      es: '🇺🇸 Cambiar a Inglés',
      en: '🇲🇽 Switch to Spanish ',
    };
    const newLang = currentLang === 'es' ? 'en' : 'es';
    let newUrl = currentUrl.replace(`/${currentLang}`,`/${newLang}`);
    if (newUrl === currentUrl) {
      newUrl = `/${newLang}${newUrl}`;
    }
    return <a href={newUrl}>{text[currentLang]}</a>;
  };

  const builtWith = currentLang === 'es' ? 
    'Construido con Next.js, Contentful y Netlify'
    : 'Built with Next.js, Contentful and Netlify';

  return (
    <footer>
      {showLangSwitch && renderLangPicker()}
      <span>{builtWith}</span>
      <span>© Sussie Casasola - 2019</span>
    </footer>
  );
};

Footer.propTypes = {
  showLangSwitch: PropTypes.bool
};

Footer.defaultProps = {
  showLangSwitch: true,
};

export default Footer;
