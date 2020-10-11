import { format } from 'date-fns';
import { es, enUS } from 'date-fns/locale';

import { useTranslate } from 'components/I18nContext';

const availableLocales = { es, en: enUS };

const formatDate = date => {
  const { currentLang } = useTranslate();
  return format(new Date(date), 'PPP', { locale: availableLocales[currentLang] });
};

export default formatDate;
