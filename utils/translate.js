import * as languages from 'languages';

const translate = (lang, key) => languages[lang][key]

export default translate;