<route type="home" lang="json5">
{
  layout: 'theme', // 使用主题
  style: {
    navigationBarTitleText: 'i18n 多语言 Demo'
  }
}
</route>

<template>
  <button @click="setLocale">{{ t('nowLocale') }}</button>
  <!-- 底部作者信息 -->
  <div class="w-60% mt-10rpx opacity-60 m-auto">
    <wd-divider>{{ t('authorText') }}</wd-divider>
  </div>
  <div class="w-100vw mt-10rpx opacity-60 flex justify-center font-size-28rpx" v-for="item in list" :key="item.about">
    {{ item.about }}
  </div>
  <div class="w-100vw mt-40rpx">
    <wd-calendar v-model="calendarData" />
  </div>
</template>

<script setup lang="ts">
import { useI18n } from '@/hooks/useI18n'
const { t, setLocale } = useI18n()
const calendarData = ref()

const list = ref([
  {
    about: t('about', 'text')
  }
])
</script>

<style>
/* 暗黑模式 start */
.wot-theme-dark {
  color: #f5f5f5;
  background: black;
  --theme-bg-color: #1b1b1b;
}
</style>
