import type { ConfigProviderThemeVars } from 'wot-design-uni'
import { ref } from 'vue'
import { useUserStore } from '@/store'
import { storeToRefs } from 'pinia'

const theme = ref<'light' | 'dark'>('light')
const themeVars = ref<ConfigProviderThemeVars>()

export function useTheme(vars?: ConfigProviderThemeVars) {
  const store = useUserStore()
  const { userInfo } = storeToRefs(store)

  /* 替换 Wot 组件的样式 */
  vars && (themeVars.value = vars)

  const setTheme = () => {
    nextTick(() => {
      theme.value = userInfo.value.theme
      if (userInfo.value.followSystem) {
        uni.getSystemInfo({
          success: (res: any) => {
            store.setUserInfo({ theme: res.hostTheme })
            theme.value = res.hostTheme
            uni.setNavigationBarColor({
              frontColor: theme.value === 'light' ? '#000000' : '#ffffff',
              backgroundColor: theme.value === 'light' ? '#ffffff' : '#000000',
              animation: {
                duration: 400,
                timingFunc: 'easeIn'
              }
            })
          }
        })
      } else {
        uni.setNavigationBarColor({
          frontColor: theme.value === 'light' ? '#000000' : '#ffffff',
          backgroundColor: theme.value === 'light' ? '#ffffff' : '#000000',
          animation: {
            duration: 400,
            timingFunc: 'easeIn'
          }
        })
      }
    })
  }

  watch(theme, () => {
    store.setUserInfo({ theme: theme.value })
  })

  return {
    theme,
    themeVars,
    setTheme
  }
}
