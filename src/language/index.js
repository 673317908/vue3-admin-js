// 导入i18n
import {
    createI18n
} from 'vue-i18n';

const i18n = createI18n({
    locale: "ch",
    messages: {
        ch: require("./china"),
        en: require("./english")
    }
})
export default i18n