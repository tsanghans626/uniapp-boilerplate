<!--
@description: 自定义导航栏 demo
-->

<route lang="json5" type="page">
{
  layout: 'theme', // 使用主题
  style: {
    navigationStyle: 'custom'
  }
}
</route>

<template>
  <div :style="{ height: `${statusBarHeight}px` }" class="bg-[var(--theme-bg-color)]"></div>
  <div
    class="w-[calc(100vw-40rpx)] flex justify-between items-center bg-[var(--theme-bg-color)] font-size-30rpx p-x-20rpx p-y-20rpx"
    :style="{ height: `${barHeight}px` }"
  >
    <div class="flex items-center w-50rpx">
      <wd-icon name="arrow-left" size="24px" @click="goBack"></wd-icon>
    </div>
    <div class="w-[calc(100%-100rpx)] pr-50rpx text-center font-bold">自定义导航栏 demo</div>
  </div>
</template>

<script setup lang="ts">
/* 返回上一页 */
const goBack = () => {
  uni.redirectTo({ url: '/pages/index/index' })
}

const statusBarHeight = ref(20)
const barHeight = ref(38)

onLoad(() => {
  // 状态栏高度
  statusBarHeight.value = (uni.getSystemInfoSync().statusBarHeight as number) || 0
  // #ifdef MP-WEIXIN
  // 胶囊数据
  const { top, height } = uni.getMenuButtonBoundingClientRect()
  // 自定义导航栏高度 = 胶囊高度 + 胶囊的 padding * 2, 如果获取不到设置为 38
  barHeight.value = height ? height + (top - statusBarHeight.value) * 2 : 38
  // #endif
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
