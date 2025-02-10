<!--
@description: DEMO 案例主导航页
-->

<route lang="json5" type="home">
{
  layout: 'theme', // 使用主题
  style: {
    navigationStyle: 'custom'
  }
}
</route>

<template>
  <div class="min-h-100vh">
    <!-- 顶部自定义导航栏 -->
    <div class="w-[calc(100vw-60rpx)] p-x-30rpx pb-20rpx">
      <!-- 状态栏高度 -->
      <div :style="{ height: `${statusBarHeight}px` }"></div>
      <div class="flex items-center">
        <div class="w-130rpx h-130rpx">
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
        <wd-grid border :column="3" clickable>
          <wd-grid-item use-slot v-for="item in gridList" :key="item.iconName" link-type="navigateTo" :url="item.url">
            <wd-icon :name="item.iconName" size="36px" :color="item.color"></wd-icon>
            <div class="font-size-28rpx font-bold">{{ item.title }}</div>
            <div class="color-#9e9e9e font-size-22rpx">{{ item.text }}</div>
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
          v-model="userInfo.followSystem"
          checked-color="#cf3d35"
          custom-style="margin:0"
          @change="setTheme"
        />
      </div>
      <!-- 底部版本号 -->
      <div class="w-60% mt-10rpx opacity-60">
        <wd-divider>uni-app 0.0.12</wd-divider>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useTheme } from '@/hooks/useTheme'
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/store'
const store = useUserStore()
const { theme, setTheme } = useTheme()
const { userInfo } = storeToRefs(store)
const statusBarHeight = ref()
const barHeight = ref()

/* 宫格列表 */
const gridList = ref([
  {
    iconName: 'layers',
    title: 'Layout布局',
    text: 'SFC',
    color: '#0163ff',
    url: '/pages/layoutDemo/index'
  },
  {
    iconName: 'attach',
    title: 'Pinia使用',
    text: '状态管理',
    color: '#ffc400',
    url: '/pages/piniaDemo/index'
  },
  {
    iconName: 'link-unlink',
    title: '单一请求',
    text: '请求(与状态分离)',
    color: '#ca145d',
    url: '/pages/queryDemo/queryTestDemo'
  },
  {
    iconName: 'link',
    title: '请求+状态',
    text: '请求(与状态结合)',
    color: '#11cde8',
    url: '/pages/queryDemo/useRequestDemo'
  },
  {
    iconName: 'user',
    title: '登录示例',
    text: '无感刷新',
    color: '#fe1c00',
    url: '/pages/queryDemo/loginDemo'
  },
  {
    iconName: 'lock-off',
    title: '权限控制',
    text: '路由与按钮',
    color: '#607d8b',
    url: '/pages/routerDemo/index'
  },
  {
    iconName: 'chart',
    title: '图表组件',
    text: 'Echarts 5.14',
    color: '#795548',
    url: '/pages/echartsDemo/index'
  },
  {
    iconName: 'view-module',
    title: 'WotUI组件',
    text: '高频组件',
    color: '#a61bc3',
    url: '/pages/layoutDemo/index'
  },
  {
    iconName: 'view-module',
    title: '分页案例',
    text: 'z-padding',
    color: '#d4ed00',
    url: '/pages/queryDemo/zPagingDemo'
  },
  {
    iconName: 'view-list',
    title: '无导航栏',
    text: 'custom',
    color: '#fea600',
    url: '/pages/customDemo/index'
  },
  {
    iconName: 'menu-fold',
    title: '自定义导航栏',
    text: '自定义组件实现',
    color: '#652df4',
    url: '/pages/customDemo/customBar'
  },
  {
    iconName: 'chart-bubble',
    title: 'Unocss',
    text: '原子CSS',
    color: '#ca145d',
    url: '/pages/unocssDemo/index'
  }
])

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
  color: #000000;
  background: #f5f5f5;
  --theme-bg-color: #ffffff;
}

/* 暗黑模式 start */
.wot-theme-dark {
  color: #f5f5f5;
  background: black;
  --theme-bg-color: #1b1b1b;
}
</style>
