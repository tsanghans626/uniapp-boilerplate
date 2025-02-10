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

  return {
    theme,
    themeVars
  }
}
