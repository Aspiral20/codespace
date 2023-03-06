import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { en, ro, ru } from './translation/'


const resources = {
	ro: {
		translation: ro
	},
	ru: {
		translation: ru
	},
	en: {
		translation: en
	}
}

i18n
	.use(initReactI18next)
	.init({
		fallbackLng: 'ro',
		debug: true,
		resources,
		interpolation: {
			escapeValue: false, // not needed for react as it escapes by default
		}
	});


export default i18n;