import { useUserStore } from '@/store'
const store = useUserStore()
import en from '@/i18n/en.json'
import zh from '@/i18n/zh.json'

export const useI18n = () => {
  /* 如果国际化是元素，直接返回，如果是 ref 中的数据就需要加 computed 不然不会动态变化 */
  const t = (key, type?: string) => {
    if (type === 'text') {
      return computed(() => {
        return store.getLocale === 'zh' ? zh[key] : en[key]
      })
    }
    return store.getLocale === 'zh' ? zh[key] : en[key]
  }

  const setLocale = () => {
    return store.setLocale()
  }

  return {
    t,
    setLocale
  }
}
