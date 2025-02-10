<route lang="json5" type="home">
{
  layout: 'theme', // 使用主题
  style: {
    navigationStyle: 'custom'
  }
}
</route>

<template>
  <!-- 顶部自定义导航栏 -->
  <div class="w-[calc(100vw-60rpx)] p-x-30rpx theme-bg-##f5f5f5 pb-20rpx">
    <!-- 状态栏高度 -->
    <div :style="{ height: `${statusBarHeight}px` }"></div>
    <div class="flex">
      <div class="w-120rpx h-120rpx">
        <image class="w-100% h-100%" src="@/static/local/logo.png" />
      </div>
      <div class="ml-30rpx">
        <div class="font-size-44rpx font-bold flex items-center" :style="{ height: `${barHeight}px` }">uni-plus</div>
        <div class="font-size-26rpx opacity-60">一个 “超超超” 好用的 uniapp 模板</div>
      </div>
    </div>
  </div>
  <div class="p-x-30rpx flex flex-col items-center mt-30rpx">
    <!-- 切换主题色 -->
    <div
      class="bg-[var(--theme-bg-color)] rounded-20rpx overflow-hidden flex justify-evenly items-center w-100% h-120rpx font-size-20rpx line-height-28rpx"
    >
      <div class="w-94rpx h-50rpx rounded-25rpx bg-#ffc400 flex justify-center items-center">小黄</div>
      <div class="w-94rpx h-50rpx rounded-25rpx bg-#0163ff color-#ffffff flex justify-center items-center">蓝色</div>
      <div class="w-94rpx h-50rpx rounded-25rpx bg-#795548 color-#ffffff flex justify-center items-center">默认</div>
      <div class="flex justify-center items-center">
        <div class="font-size-28rpx mr-10rpx color-#9e9e9e">暗黑模式：</div>
        <wd-switch v-model="theme" size="23px" active-value="dark" inactive-value="light" active-color="#272a2f" />
      </div>
    </div>
    <!-- 功能列表 -->
    <div class="bg-[var(--theme-bg-color)] shadow-md rounded-20rpx overflow-hidden mt-40rpx">
      <wd-grid border :column="3">
        <wd-grid-item use-slot>
          <wd-icon name="layers" size="36px" color="#0163ff"></wd-icon>
          <div class="font-size-28rpx font-bold">Layout布局</div>
          <div class="color-#9e9e9e font-size-22rpx">SFC</div>
        </wd-grid-item>
        <wd-grid-item use-slot>
          <wd-icon name="attach" size="36px" color="#ffc400"></wd-icon>
          <div class="font-size-28rpx font-bold">Pinia使用</div>
          <div class="color-#9e9e9e font-size-22rpx">状态管理</div>
        </wd-grid-item>
        <wd-grid-item use-slot>
          <wd-icon name="link-unlink" size="36px" color="#ca145d"></wd-icon>
          <div class="font-size-28rpx font-bold">单一请求</div>
          <div class="color-#9e9e9e font-size-22rpx">请求(与状态分离)</div>
        </wd-grid-item>
        <wd-grid-item use-slot>
          <wd-icon name="link" size="36px" color="#11cde8"></wd-icon>
          <div class="font-size-28rpx font-bold">请求+状态</div>
          <div class="color-#9e9e9e font-size-22rpx">数据与请求绑定</div>
        </wd-grid-item>
        <wd-grid-item use-slot>
          <wd-icon name="user" size="36px" color="#fe1c00"></wd-icon>
          <div class="font-size-28rpx font-bold">登录示例</div>
          <div class="color-#9e9e9e font-size-22rpx">无感刷新</div>
        </wd-grid-item>
        <wd-grid-item use-slot>
          <wd-icon name="lock-off" size="36px" color="#607d8b"></wd-icon>
          <div class="font-size-28rpx font-bold">权限控制</div>
          <div class="color-#9e9e9e font-size-22rpx">路由与按钮</div>
        </wd-grid-item>
        <wd-grid-item use-slot>
          <wd-icon name="chart" size="36px" color="#795548"></wd-icon>
          <div class="font-size-28rpx font-bold">图表组件</div>
          <div class="color-#9e9e9e font-size-22rpx">Echarts 5.14</div>
        </wd-grid-item>
        <wd-grid-item use-slot>
          <wd-icon name="chart" size="36px" color="#a61bc3"></wd-icon>
          <div class="font-size-28rpx font-bold">WotUI组件</div>
          <div class="color-#9e9e9e font-size-22rpx">高频组件</div>
        </wd-grid-item>
        <wd-grid-item use-slot>
          <wd-icon name="view-module" size="36px" color="#d4ed00"></wd-icon>
          <div class="font-size-28rpx font-bold">分页案例</div>
          <div class="color-#9e9e9e font-size-22rpx">z-padding</div>
        </wd-grid-item>
        <wd-grid-item use-slot>
          <wd-icon name="view-list" size="36px" color="#fea600"></wd-icon>
          <div class="font-size-28rpx font-bold">无导航栏</div>
          <div class="color-#9e9e9e font-size-22rpx">custom</div>
        </wd-grid-item>
        <wd-grid-item use-slot>
          <wd-icon name="menu-fold" size="36px" color="#652df4"></wd-icon>
          <div class="font-size-28rpx font-bold">自定义导航栏</div>
          <div class="color-#9e9e9e font-size-22rpx">自定义组件实现</div>
        </wd-grid-item>
        <wd-grid-item use-slot>
          <wd-icon name="chart-bubble" size="36px" color="#ca145d"></wd-icon>
          <div class="font-size-28rpx font-bold">Unocss</div>
          <div class="color-#9e9e9e font-size-22rpx">原子CSS</div>
        </wd-grid-item>
      </wd-grid>
    </div>
    <!-- 多语言 -->
    <div
      class="bg-[var(--theme-bg-color)] rounded-20rpx overflow-hidden flex justify-between items-center w-[calc(100%-60rpx)] h-120rpx mt-40rpx p-x-30rpx"
    >
      <div class="flex items-center">
        <wd-icon name="setting" size="22px" color="#0163ff"></wd-icon>
        <div class="font-size-30rpx ml-30rpx">设置语言（国际化）</div>
      </div>
      <div class="flex items-center">
        <div class="font-size-28rpx color-#9e9e9e mr-5rpx h-22px line-height-22px">中文简体</div>
        <wd-icon name="chevron-right" size="22px" color="#9e9e9e"></wd-icon>
      </div>
    </div>
    <!-- 暗黑模式 -->
    <div
      class="bg-[var(--theme-bg-color)] rounded-20rpx overflow-hidden flex justify-between items-center w-[calc(100%-60rpx)] h-120rpx mt-40rpx p-x-30rpx"
    >
      <div class="flex items-center">
        <wd-icon name="windows-filled" size="26px" color="#cf3d35"></wd-icon>
        <div class="font-size-30rpx ml-30rpx">暗黑模式跟随系统</div>
      </div>
      <wd-checkbox
        custom-shape-class="w-[var(--wot-checkbox-size,22px)!important] h-[var(--wot-checkbox-size,22px)!important]"
        v-model="followingSystem"
        checked-color="#cf3d35"
        custom-style="margin:0"
      />
    </div>
    <!-- 底部版本号 -->
    <div class="w-60% mt-10rpx opacity-60">
      <wd-divider>uni-app 0.0.12</wd-divider>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTheme } from '@/hooks/useTheme'

const { theme } = useTheme()
import { ref } from 'vue'
const followingSystem = ref(false)

const statusBarHeight = ref()
const barHeight = ref()

onLoad(() => {
  // 状态栏高度
  statusBarHeight.value = (uni.getSystemInfoSync().statusBarHeight as number) || 20
  // 胶囊数据
  const { top, height } = wx.getMenuButtonBoundingClientRect()
  // 自定义导航栏高度 = 胶囊高度 + 胶囊的 padding * 2, 如果获取不到设置为 38
  barHeight.value = height ? height + (top - statusBarHeight.value) * 2 : 38
})
</script>

<style>
/* 默认主题 */
:root page {
  min-height: 100vh;
  background: #f5f5f5;
  --theme-bg-color: #ffffff;
}

/* 暗黑模式 start */
.wot-theme-dark {
  color: #f5f5f5;
  background-color: black;
  --theme-bg-color: #1b1b1b;
}
</style>
