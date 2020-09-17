import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import * as languages from 'lang';

const I18nContext = createContext();

export const useTranslate = () => {
  const { currentLang } = useContext(I18nContext);
  return { currentLang, t: key => languages[currentLang][key] };
};

export const I18nContextProvider = ({ lang, children }) => {
  const [currentLang] = useState(lang);
  return <I18nContext.Provider value={{ currentLang }}>{children}</I18nContext.Provider>;
};

I18nContextProvider.propTypes = {
  lang: PropTypes.string.isRequired,
};
