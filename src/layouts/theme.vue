<!-- theme.vue -->
<template>
  <WdConfigProvider :theme="theme" :theme-vars="themeVars">
    <slot></slot>
  </WdConfigProvider>
</template>

<script setup lang="ts">
import { useTheme } from '@/hooks/useTheme'

const { theme, themeVars } = useTheme()
</script>
