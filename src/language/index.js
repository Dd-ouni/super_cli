//语言
import { createI18n } from 'vue-i18n'		//引入vue-i18n组件
import el_lang_en from 'element-plus/lib/locale/lang/en';
import el_lang_zh_cn from 'element-plus/lib/locale/lang/zh-cn';
import locale_lang_en from "./en";
import locale_lang_zh_cn from "./zh-cn";

const messages = {
  "zh-cn": {
    ...el_lang_zh_cn,
    ...locale_lang_zh_cn
  },
  "en": {
    ...el_lang_en,
    ...locale_lang_en
  }
};

const i18n = createI18n({
  locale: window.localStorage.getItem('lang') || 'zh-cn',
  messages
})
export default i18n; 
