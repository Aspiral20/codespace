import { useTranslation } from "react-i18next";
import { TranslationsType } from "../../@types/graphql";

const useCoreTranslation = (translations?: TranslationsType) => {
	const { i18n } = useTranslation()
	const curLang = i18n.language

	if (translations) {
		return translations.find(item => item.lang.lang === curLang)
	}
}

export default useCoreTranslation;