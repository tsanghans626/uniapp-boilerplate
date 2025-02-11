<!--
@description: pinia 使用 dome
-->

<route type="page" lang="json5">
{
  layout: 'theme', // 使用主题
  style: {
    navigationBarTitleText: 'pinia 使用 dome'
  }
}
</route>

<template>
  <div>用户名：{{ userInfo.userName }}</div>
  <button @click="changeUserName">改变用户名</button>
</template>

<script setup lang="ts">
/* ------------------------ 导入 与 引用 ----------------------------------- */
import { useUserStore } from '@/store'
import { storeToRefs } from 'pinia'
const store = useUserStore()
const { userInfo } = storeToRefs(store)

// 改变用户名
const changeUserName = () => {
  store.setUserInfo({ userName: 'uni-lin-pro' })
}

onMounted(() => {
  console.log('userInfo', userInfo.value)
})
</script>

<style>
/* 暗黑模式 start */
.wot-theme-dark {
  color: #f5f5f5;
  background: black;
  --theme-bg-color: #1b1b1b;
}
</style>
