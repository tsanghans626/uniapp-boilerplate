<!--
@description: 无导航栏 demo
-->

<route lang="json5" type="page">
{
  style: {
    navigationStyle: 'custom'
  }
}
</route>

<template>
  <div class="w-100vw h-100vw flex flex-col justify-center items-center color-#9e9e9e font-size-30rpx">
    <div class="color-emerald font-size-38rpx">无导航栏 demo</div>
    <div class="m-y-10rpx">设置 navigationStyle: 'custom'</div>
    <div>即可取消默认导航栏</div>
    <wd-button type="success" custom-class="mt-20rpx" @click="goBack">返回首页</wd-button>
  </div>
</template>

<script setup lang="ts">
/* 返回上一页 */
const goBack = () => {
  uni.navigateTo({ url: '/pages/index/index' })
}
</script>
