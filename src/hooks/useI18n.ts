import { useUserStore } from '@/store'
import { Locale, useCurrentLang } from 'wot-design-uni'
import enUS from 'wot-design-uni/locale/lang/en-US'
import zhCN from 'wot-design-uni/locale/lang/zh-CN'

const store = useUserStore()
import en from '@/i18n/en.json'
import zh from '@/i18n/zh.json'

export const useI18n = () => {
  /* 用于界定当前语言 与 pinia 中的语言*/
  const currentLang = ref()

  const t = (key, type?: string) => {
    if (currentLang.value != store.getLocale) {
      /* 设置原生元素 */
      uni.setNavigationBarTitle({
        title: store.getLocale === 'zh-CN' ? zh[key] : en[key]
      })
      currentLang.value = store.getLocale
    }
    /* 设置 WotUI 组件语言 */
    const wotUiCurrentLang = useCurrentLang().value
    if (wotUiCurrentLang != store.getLocale) {
      Locale.use(store.getLocale, store.getLocale === 'zh-CN' ? zhCN : enUS)
    }

    /* 如果国际化是元素，直接返回，如果是 ref 中的数据就需要加 computed 不然不会动态变化 */
    if (type === 'text') {
      return computed(() => {
        return store.getLocale === 'zh-CN' ? zh[key] : en[key]
      })
    }
    return store.getLocale === 'zh-CN' ? zh[key] : en[key]
  }

  const setLocale = () => {
    /* 切换 语言 */
    store.setLocale()
  }

  return {
    t,
    setLocale
  }
}
