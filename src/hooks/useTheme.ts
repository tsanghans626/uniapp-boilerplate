import type { ConfigProviderThemeVars } from 'wot-design-uni'
import { ref } from 'vue'
import { useUserStore } from '@/store'
import { storeToRefs } from 'pinia'
const store = useUserStore()
const { userInfo } = storeToRefs(store)

const theme = ref()
const themeVars = ref<ConfigProviderThemeVars>()
theme.value = userInfo.value.theme

export function useTheme(vars?: ConfigProviderThemeVars) {
  /* 替换 Wot 组件的样式 */
  vars && (themeVars.value = vars)

  const setTheme = () => {
    if (!userInfo.value.followSystem) {
      return
    }
    uni.getSystemInfo({
      success: (res: any) => {
        store.setUserInfo({ theme: res.hostTheme })
        theme.value = res.hostTheme
      }
    })
  }

  return {
    theme,
    themeVars,
    setTheme
  }
}
