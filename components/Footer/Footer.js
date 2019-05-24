const Footer = ({ currentUrl, currentLang }) => {
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

  return (
    <footer>
      {renderLangPicker()}
      © Sussie Casasola - 2019
    </footer>
  );
};

export default Footer;
