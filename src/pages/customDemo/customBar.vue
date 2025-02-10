<!--
@description: 自定义导航栏 demo
-->

<route lang="json5" type="page">
{
  style: {
    navigationStyle: 'custom'
  }
}
</route>

<template>
  <div
    class="w-[calc(100vw-40rpx)] flex justify-between items-center color-#000000 font-size-30rpx p-x-20rpx"
    :style="{ marginTop: `${statusBarHeight}px`, height: `${barHeight}px` }"
  >
    <div class="flex items-center w-50rpx">
      <wd-icon name="arrow-left" size="22px" @click="goBack"></wd-icon>
    </div>
    <div class="w-[calc(100%-100rpx)] pr-50rpx text-center">自定义导航栏 demo</div>
  </div>
</template>

<script setup lang="ts">
/* 返回上一页 */
const goBack = () => {
  uni.navigateTo({ url: '/pages/index/index' })
}

const statusBarHeight = ref()
const barHeight = ref()

onLoad(() => {
  // 状态栏高度
  statusBarHeight.value = (uni.getSystemInfoSync().statusBarHeight as number) || 0
  // 胶囊数据
  const { top, height } = wx.getMenuButtonBoundingClientRect()
  // 自定义导航栏高度 = 胶囊高度 + 胶囊的 padding * 2, 如果获取不到设置为 38
  barHeight.value = height ? height + (top - statusBarHeight.value) * 2 : 38
})
</script>
