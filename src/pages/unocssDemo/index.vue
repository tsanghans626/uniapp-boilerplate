<!--
@description: Unocss 使用 dome
-->

<route type="page" lang="json5">
{
  layout: 'theme', // 使用主题
  style: {
    navigationBarTitleText: 'Unocss 使用 dome'
  }
}
</route>

<template>
  <div class="w-100vw h-100vw flex flex-col justify-center items-center font-size-32rpx">
    <div class="color-red">设置字体颜色 color-red</div>
    <div class="bg-blue">设置背景颜色 bg-blue</div>
  </div>
</template>

<style>
/* 暗黑模式 start */
.wot-theme-dark {
  color: #f5f5f5;
  background: black;
  --theme-bg-color: #1b1b1b;
}
</style>
